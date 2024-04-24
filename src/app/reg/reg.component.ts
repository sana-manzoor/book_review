import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  constructor(private fb:FormBuilder,private router:Router,private api:ApiService,private toastr:ToastrService){

  }

  regForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@!]*'),Validators.minLength(6)]]

  })

  getFormData(){
    console.log(this.regForm.value)
    this.api.userRegister(this.regForm.value).subscribe({
      next:(res:any)=>{
        console.log(res.status)
        this.toastr.success(`${this.regForm.value.username} Successfully Registered!!`)
        this.router.navigateByUrl('/log')
      },
      error:(err)=>{
         console.log(err)
        this.toastr.error("Registration Failed!!")
      }
    })
  }

}
