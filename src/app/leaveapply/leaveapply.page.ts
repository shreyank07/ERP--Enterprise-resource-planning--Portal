import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-leaveapply',
  templateUrl: './leaveapply.page.html',
  styleUrls: ['./leaveapply.page.scss'],
})
export class LeaveapplyPage implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  fullname:any;
  Email:any;
  department:any;
  dol:any;
  dor:any;
  reason:any;
  breifreason:any;
  Rtime:any;
  Ltime:any;

  submit(){
    if (this.fullname==null ||this.Email==null ||this.dol==null ||this.dor==null ||this.department==null ||this.Rtime==null ||this.reason==null ||this.Ltime==null ||this.breifreason==null)
     {
       alert("fill in required fields");
     
     }
     else{
    this.http.post('http://127.0.0.1:8000/backend/viewleaves',{name:this.fullname,Email:this.Email,dol:this.dol,dor:this.dor,department:this.department,Rtimedob:this.Rtime,reason:this.reason,Ltime:this.Ltime,breifreason:this.breifreason}).subscribe((res:any)=>{
      
        alert(res.message);
        location.reload();
        // this.router.navigate(['/homepage'])
      }
    );
    }
    
  
     return true;
  }
}
