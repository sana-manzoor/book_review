import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  users:any[]=[]

   constructor(private api:ApiService){

   }

   ngOnInit() {
     this.getData()
   }

   getData(){
    this.api.getAllUsers().subscribe((res:any)=>{
      console.log(res);
      this.users=res
    },
    (err:any)=>{
         console.log(err)
    }
    )
  }
}
