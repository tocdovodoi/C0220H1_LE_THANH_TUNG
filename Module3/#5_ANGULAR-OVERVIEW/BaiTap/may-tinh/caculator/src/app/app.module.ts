import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaytinhComponent } from './maytinh/maytinh.component';
import { CaculatorComponent } from './caculator/caculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MaytinhComponent,
    CaculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
