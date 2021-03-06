import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '../../model/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass:string;
  email:string;
  code:String;
  private user:Array<User>;


  constructor(
    private router: Router,
    private loginService: LoginService,
    ) { }
    
  emailkeyup(value: string){
    this.email=value;
  }

  passkeyup(value: string){
    this.pass=value;
  }

  passAdminKeyup(value:String){
    this.code=value;
  }

  ngOnInit() {
  }

  botonAdmin(){
    let doc=document.getElementById("visible").style;
    doc.visibility='visible';
  }

  botonSalirAdmin(){
    console.log("ola");
    let doc=document.getElementById("visible").style;
    doc.visibility="hidden";
  }

  login2(){
    let datos:any;
    let obs=this.loginService.loginService2(this.email);
    obs.subscribe(validation => {
      datos=validation;
      console.log(datos.nombre+", "+datos.apellido);
    });
  }

  login3() {
    let doc=document.getElementById('textRed').style;
    let obs=this.loginService.LoginAdmin(this.email,this.pass);
    let obs2=this.loginService.loginService(this.email,this.pass);
    obs.subscribe(res =>{
      if(res){
        this.router.navigate(['/admin']);
      }else{
        obs2.subscribe(res2 =>{
          if(res2){
            this.router.navigate(['/reclamos']);
          }else{
             doc.visibility='visible';
           }
        });
      }
    });
  }

  ingresar(){
    if(this.code=="5K2WV77288"){
      this.router.navigate(['/code/CKS9333ASD/registroAdmin']);
      }
    }
}
