import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userdb',
  templateUrl: './userdb.component.html',
  styleUrls: ['./userdb.component.css']
})
export class UserdbComponent implements OnInit {

  constructor(private api:ApiService,private r:Router){

  }

  SERVER_URL:any="https://bookreview-server-2.onrender.com"
  books:any[]=[]
  searchtext:any=""

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.api.getAllBooks().subscribe((res:any)=>{
      console.log(res);
      this.books=res
    },
    (err:any)=>{
         console.log(err)
    }
    )
  }

}

