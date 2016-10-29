import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NavbarComponent } from './navbar.component';
import { MapComponent } from './map.component';
import { ListComponent } from './list.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,NavbarComponent,MapComponent,ListComponent],
    bootstrap: [AppComponent,NavbarComponent,MapComponent,ListComponent]
    
})
export class AppModule { }