import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component'; // Ensure this import is correct

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent // SectionComponent must be declared here
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
