import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-a',
  templateUrl: './navbar-a.component.html',
  styleUrls: ['./navbar-a.component.scss'],
})
export class NavbarAComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  logout(){
    var r= confirm('confirm logout')
    if ( r==true){
      this.router.navigate(['/homepage']);
    }else{
      
     }
  
  }

}
