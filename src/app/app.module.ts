import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentComponent } from './components/student/student.component';
import { OptionsComponent } from './components/options/options.component'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContentComponent } from './components/content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpBasicAuthIntercepterService } from './service/http-basic-auth-intercepter.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    StudentComponent,
    OptionsComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: HttpBasicAuthIntercepterService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
