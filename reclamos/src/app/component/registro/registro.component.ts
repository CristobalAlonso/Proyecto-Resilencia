import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  private correo:string;
  private contraseña:string;
  private nombre:string;
  private apellido:string;
  private rut:string;
  private edad:number;
  private contacto:string;

  constructor(private registroService:RegistroService, private router:Router ) { }

  ngOnInit() {
  }

  public correoKeyUp(value:string){
    this.correo=value;
  }

  public contrasenaKeyUp(value:string){
    this.contraseña=value;
  }

  public nombreKeyUp(value:string){
    this.nombre=value;
  }

  public apellidoKeyUp(value:string){
    this.apellido=value;
  }
  public rutKeyUp(value:string){
    this.rut=value;
  }
  public edadKeyUp(value:number){
    this.edad=value;
  }
  public contactoKeyUp(value:string){
    this.contacto=value;
  }

  public print(){
    console.log(this.correo, this.contraseña ,this.nombre, this.apellido, this.rut, this.edad, this.contacto);
  }

  public registro(){
    let obs=this.registroService.registroService(this.correo,this.contraseña,this.nombre,this.apellido,this.rut,this.contacto,this.edad);
    obs.subscribe(validation => {
      if(null != validation){
        alert('registro exitoso');
        this.router.navigate(['/login']);
      }
    });
  }
}
