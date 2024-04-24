import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  constructor(private api:ApiService,private toastr:ToastrService){

  }

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
