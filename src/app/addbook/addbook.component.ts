import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent  {

  
  constructor(private router:Router,private toastr:ToastrService,private api:ApiService,private fb:FormBuilder){

  }

  // books:any[]=[]
  img:any=""
  imgFile:any=""
  bookPicture:string="https://www.svgrepo.com/show/334723/image-add.svg"


  bookForm=this.fb.group({
    id:['',[Validators.required]],
    title:['',[Validators.required]],
    description:['',[Validators.required]],
    category:['',[Validators.required]],
    author:['',[Validators.required]],
    // b_image:['',[Validators.required]],
    // userId:['']



  })

   
logout(){
  sessionStorage.clear()
  
  this.router.navigateByUrl('/log')

}


  // ngOnInit() {
  //   this.getData()
  // }

  getFile(event:any){
    const file:File=event.target.files[0]
    console.log(file)
    let fr=new FileReader()
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      this.img=event.target.result
      this.imgFile=file
      this.bookPicture=event.target.result
      

      // if(this.imgFile){
      //   this.bookPicture=this.imgFile
      // }
      // console.log(file.name)
      // console.log(event.target.result)
    

      // this.img=file.name
      // this.bookForm.value.b_image=this.img
      // console.log(this.bookForm.value.b_image)
      // this.b_image.profileImage=event.target.result

    }

  }

  getFormData(){
  //   this.exc=(sessionStorage.getItem("excistingUser(_id)"))
   
  //  console.log(this.exc)
   
    
    // this.bookForm.value.userId=this.token
    // console.log(this.bookForm.value.userId)
    // this.bookForm.value.b_image=this.img
    // this.bookForm.value.userId=sessionStorage.getItem('Token')
    // console.log(this.bookForm.value.b_image)
    // console.log(this.bookForm.value)
    const formData=new FormData()
    formData.append('id',`${this.bookForm.value.id}`),
     formData.append('title',`${this.bookForm.value.title}`),
    formData.append('description',`${this.bookForm.value.description}`),
    formData.append('category',`${this.bookForm.value.category}`),
    formData.append('author',`${this.bookForm.value.author}`),
    formData.append('b_image',this.imgFile)
    // formData.append("userId",this.)
    console.log(formData,"formdata")
    console.log(this.imgFile,"imgfile")
      if(this.imgFile){
        this.bookPicture=this.imgFile
      }
    

    console.log(this.bookForm.value)

    this.api.addBook(formData).subscribe({
      next:(res:any)=>{
        console.log(res.status)
        this.bookPicture="https://www.svgrepo.com/show/334723/image-add.svg"

        this.toastr.success(" Successfully Added!!")

        this.bookForm.reset()
      },
      error:(err)=>{
         console.log(err)
        this.toastr.error("Adding Failed!!")
      }
    })
  }

  
}
