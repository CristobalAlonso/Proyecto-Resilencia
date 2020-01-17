import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { User } from '../../model/User.model';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent implements OnInit {
  private a_section:boolean;
  private nombre:String;
  private apellido:String;
  private correo:String;
  private pass:String;
  private user:Array<User>;
  

  constructor(
    private adminService:AdminService,
    private router:Router
  ) { }

  ngOnInit() {
    this.reqInfoEjecutivo();
  }

  seccionA(){
    let doc=document.getElementById('tituloBoton');
    doc.innerText="Sección A";
    this.A_section(true);
  }
  seccionB(){
    let doc=document.getElementById('tituloBoton');
    doc.innerText="Sección B";
    this.A_section(false);
  }

  public A_section(value:boolean){
    this.a_section=value;
  }
  public nombreKeyup(value:String){
    this.nombre=value;
  }
  public apellidoKeyup(value:String){
    this.apellido=value;
  }
  public correoKeyup(value:String){
    this.correo=value;
  }
  public passKeyup(value:String){
    this.pass=value;
  }

  registroEjecutivo(){
    let obs=this.adminService.loginService(this.apellido,this.correo,this.nombre,this.pass, this.a_section);
    obs.subscribe( res =>{
      if(null != res){
        alert("Error de registro");
      
      }else{

        alert('Registro exitoso');
        window.location.reload();
      }
    });
  }

  reqInfoEjecutivo(){
    this.adminService.InfoEjecutivo().subscribe(res =>{
      this.user=res;
    });
  }
}
