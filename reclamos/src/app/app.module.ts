import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //
import { AppComponent } from './app.component';
import { AdmiComponent } from './component/admi/admi.component';
import { HomecentralComponent } from './component/HomeCentral/homecentral.component';

const appRoutes: Routes = [
  { path: '', component: HomecentralComponent}, //pagina inicio

];

@NgModule({
  declarations: [
    AppComponent,
    AdmiComponent,
    HomecentralComponent,
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
