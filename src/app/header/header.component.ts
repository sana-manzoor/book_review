import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  username:any=""
  constructor(private router:Router){

  }

  
  ngOnInit() {
    if(sessionStorage.getItem("excistingUser")){
      const user:any=sessionStorage.getItem("excistingUser")
      this.username=JSON.parse(user).username
     
      }
    }
  


logout(){
  sessionStorage.clear()
  
  this.router.navigateByUrl('/log')

}

}
