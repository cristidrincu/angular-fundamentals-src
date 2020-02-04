import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser"; //mandatory to import, app won't run without it
import { CommonModule } from "@angular/common"; //mandatory to import, app won't run without it
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent], //register the AppComponent in the module
  bootstrap: [AppComponent], //starts the app with AppComponent
  imports: [BrowserModule, CommonModule]
})
export class AppModule {}
