import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindb',
  templateUrl: './admindb.component.html',
  styleUrls: ['./admindb.component.css']
})
export class AdmindbComponent {

  constructor(private router:Router){

  }

 
   
logout(){
  sessionStorage.clear()
  
  this.router.navigateByUrl('/log')

}

}
