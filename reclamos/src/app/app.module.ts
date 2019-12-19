import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //
import { AppComponent } from './app.component';
import { AdmiComponent } from './component/admi/admi.component';
import { HomecentralComponent } from './component/HomeCentral/homecentral.component';
import { LoginComponent } from './component/login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomecentralComponent}, //pagina inicio
  { path: 'login', component: LoginComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    AdmiComponent,
    HomecentralComponent,
    LoginComponent,
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
