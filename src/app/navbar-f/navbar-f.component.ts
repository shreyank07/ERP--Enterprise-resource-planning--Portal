import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-f',
  templateUrl: './navbar-f.component.html',
  styleUrls: ['./navbar-f.component.scss'],
})
export class NavbarFComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
logout(){
  var r= confirm('Confirm Logout')
  if ( r==true){
    this.router.navigate(['/homepage']);
  }else{
    
   }

}
}
