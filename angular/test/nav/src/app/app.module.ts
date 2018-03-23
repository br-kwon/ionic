import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostTestService } from './post-test/post-test.service';

import { IonicAngularModule } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    IonicAngularModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [PostTestService]
})
export class AppModule { }
