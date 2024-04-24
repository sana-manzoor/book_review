import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private router:Router,private api:ApiService,private toastr:ToastrService){

  }

  logForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@!]*'),Validators.minLength(6)]]

  })

  getFormData(){
    console.log(this.logForm.value)
    this.api.userLogin(this.logForm.value).subscribe({
      next:(res:any)=>{
        console.log(res.status)
        sessionStorage.setItem('excistingUser',JSON.stringify(res.excistingUser))
        sessionStorage.setItem('Token',res.token)
        sessionStorage.setItem('Role',res.role)

        this.toastr.success("Login Successfull!!")
        if(sessionStorage.getItem('Role')=="admin"){
          this.router.navigateByUrl('/admdb')

        }
        else{
          this.router.navigateByUrl('/userdb')
        }
      },
      error:(err)=>{
        // console.log(err)
        this.toastr.error("Login Failed!!")
      }
    })

  }


}
