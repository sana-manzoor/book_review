import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {


  books:any=[]
  SERVER_URL:any="https://bookreview-server.onrender.com"

  constructor(private api:ApiService,private toastr:ToastrService){

  }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.api.getWishListApi().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.books=res
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  deleteWish(id:any){
    this.api.deleteWish(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        
        this.toastr.success("Favourite Item Removed!!")
        this.getData()
      },
      error:(err:any)=>{
        console.log(err)
        this.toastr.error("Deletion failed!!")
      }
    })
  }

}
