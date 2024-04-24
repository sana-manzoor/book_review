import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { OnInit } from '@angular/core';
import { FormBuilder,NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  
  
  SERVER_URL:any="http://localhost:3000"
  bid:any=0
  book:any={}
  users:any[]=[]
  uid:any=""
  udet:any=""
  filt:any=""
  userId:any=""
  rev:any={}
  uname:any=""
  
  
  constructor(private aroute:ActivatedRoute,private api:ApiService,private toastr:ToastrService,private fb:FormBuilder,private r:Router){
    this.aroute.params.subscribe((res:any)=>{
      // console.log(res.id)
      this.bid=res.id
      console.log(this.bid)
    })
  }

  ngOnInit() {
    this.getData()
    this.getData2()

  }



  getData(){
    console.log(this.bid)
    this.api.getBook(this.bid).subscribe((res:any)=>{
      // console.log(res)
      this.book=res
      this.uid=res.comment
      for (let key in this.uid) {
        this.udet=this.uid[key]
        console.log(this.udet.userId);
      }
     
      // res1=this.book
      // console.log(this.book)
    })
  }

  getData2(){
    this.api.getAllUsers().subscribe((res:any)=>{
      // if(this.udet.userId==res._id){
      //   console.log(this.udet.userId==res._id)

      // }
      console.log(res);
    // this.filt=  res.find((item:any)=>{
    //       item._id == this.udet.userId
          
    //       console.log(this.filt)
    //   })
      // this.users=res
    //  if(this.book.comment.userId==res._id){
    //   this.uname=res.username
    //   console.log(this.uname)
    //  }

    },
    (err:any)=>{
         console.log(err)
    }
    )
  }

  
  handlecomment(){
    // this.userId=sessionStorage.getItem("Token")
     const unm:any=sessionStorage.getItem("excistingUser")
     this.uname=JSON.parse(unm)
    //  console.log(this.uname.username)
     this.rev.usern=this.uname.username
     console.log(this.rev)

  
    
    // console.log(this.rev.review)

    
    this.api.addComment(this.book._id,this.rev).subscribe((res:any)=>{
     

      this.toastr.success("Review Added Successfully!!")
     
      this.getData()
      

     console.log(res)
     
    },
    (err:any)=>{
      // this.toastr.error(err.message)
      console.log(err)
    })
  }

  resetform(form:NgForm){
    this.rev.review = '';
    form.resetForm();
  }



  addWish(data:any){
    if(sessionStorage.getItem('Token')){
      console.log(data)
      this.api.addWishApi(data).subscribe({
        next:(res:any)=>{
          this.toastr.success("Book Added to wishList!!")

        },
        error:(err:any)=>{
          console.log(err)
          this.toastr.error(err.error)
        }
      })
    }
    else{
      this.toastr.warning("Login First!!")
    }
  }
}
