import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private api:ApiService,private r:Router){

  }

  SERVER_URL:any="https://bookreview-server-2.onrender.com"
  books:any[]=[]

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
