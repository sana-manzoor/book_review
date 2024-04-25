import { Component, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder,Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  SERVER_URL:any="https://bookreview-server-2.onrender.com"
  bid:any=0
  book:any={}
  upd: any = {};
  img:any=""
  imgFile:any=""
  bookPicture:string=""



  
  constructor(private aroute:ActivatedRoute,private api:ApiService,private toastr:ToastrService,private fb:FormBuilder,private r:Router){
    this.aroute.params.subscribe((res:any)=>{
      // console.log(res.id)
      this.bid=res.id
      console.log(this.bid)
    })
  }

  

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
        
    
          this.img=file.name
        
       
          this.book.b_image=event.target.result
    
        }
    
      }
  

  ngOnInit() {
    this.getData()
     

  }


  getData(){
    console.log(this.bid)
    this.api.detBook(this.bid).subscribe((res:any)=>{
      // console.log(res)
      this.book=res
      console.log(this.book)
      // res1=this.book
      // console.log(this.book)
    })
  }


  
  handleUpdateBook(){
    console.log(this.book)
    // if(this.imgFile){
    //   this.book.b_image=this.imgFile
    // }
    this.api.updatebook(this.book._id,this.book).subscribe((res:any)=>{
      this.bookPicture=res.b_image

      this.toastr.success("Book Updated Successfully!!")
      this.bookPicture=res.b_image
      this.getData()
      this.r.navigateByUrl("/viewb")

     console.log(res)
     
    },
    (err:any)=>{
      // this.toastr.error(err.message)
      console.log(err)
    })
  }

deleteb(id:any){
    this.api.deletebook(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        
        this.toastr.success("Book deleted successfully!!")
        this.r.navigateByUrl("/viewb")

      // this.getData()
      }
      
    })
  }

}
