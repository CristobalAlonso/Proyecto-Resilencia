import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass:string;
  email:string;



  constructor(
    private router: Router,
    private loginService: LoginService   
    ) { }

  emailkeyup(value: string){
    this.email=value;
  }

  passkeyup(value: string){
    this.pass=value;
  }

  ngOnInit() {
  }
  login(){
    let doc=document.getElementById('textRed').style;
    let obs=this.loginService.loginService(this.email,this.pass);
    obs.subscribe(validation => {
      console.log(validation);
      if(validation){
      this.router.navigate(['/reclamos']);
      }else{
        doc.visibility='visible';
      }
    });
  }
  login2(){
    let datos:any;
    let obs=this.loginService.loginService2(this.email);
    obs.subscribe(validation => {
      datos=validation;
      console.log(datos.nombre+", "+datos.apellido);
    });
  }
}
