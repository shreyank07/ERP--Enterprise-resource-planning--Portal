import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'; 
@Component({
  selector: 'app-leavehistory',
  templateUrl: './leavehistory.page.html',
  styleUrls: ['./leavehistory.page.scss'],
})
export class LeavehistoryPage implements OnInit {
Email:any;
leav:any;
allleaves=[];
allleaves1=[];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.Email=localStorage.getItem("mail");
    // console.log(this.Email);
    this.http.post('http://127.0.0.1:8000/backend/leavehistory',{Email:this.Email}).subscribe((res:any)=>{
      this.leav=res.profiles;
      console.log(this.leav);
      for (var i = this.leav.length - 1; i >= 0; i--) {
        this.allleaves.push(this.leav[i]);
      }
      for (const leave of this.allleaves){
        this.http.post('http://127.0.0.1:8000/backend/fetchleaves',{eachleave1:leave}).subscribe((res:any)=>{
          this.allleaves1.push(res);
          console.log(this.allleaves1);
        })
      }

    })
  }

}
