import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import {CommonService} from './service/common.service';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';






import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { TdfvaliComponent } from './tdfvali/tdfvali.component';
import { Tdf2Component } from './tdf2/tdf2.component';
import { PipesComponent } from './pipes/pipes.component';
// import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    TdfvaliComponent,
    Tdf2Component,
    PipesComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path:"reg",component:RegisterComponent},
      {path:"tdf",component:TdfvaliComponent},
      {path:"tdf2",component:Tdf2Component},
      {path:"pipe",component:PipesComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
