import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //
import { AppComponent } from './app.component';
import { AdmiComponent } from './component/admi/admi.component';
import { HomecentralComponent } from './component/HomeCentral/homecentral.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent} from './component/registro/registro.component';
import { AgregarReclamosComponent } from './component/agregar-reclamos/agregar-reclamos.component';

const appRoutes: Routes = [
  { path: '', component: HomecentralComponent}, //pagina inicio
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'admin', component: AdmiComponent},
  { path: 'reclamos', component: AgregarReclamosComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    AdmiComponent,
    HomecentralComponent,
    LoginComponent,
    RegistroComponent,
    AgregarReclamosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(//
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
