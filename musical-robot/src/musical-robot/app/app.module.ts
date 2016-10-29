import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { NavbarComponent } from './navbar.component';
import { MapComponent } from './map/map.component';
import { ListComponent } from './list.component';
import { SocialFeedComponent } from './SocialFeed/socialFeed.component';

@NgModule({
    imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDW2Hk3NQWnZii9te8BraCWbFmW3vXsRqo'
		})
	],
    declarations: [AppComponent, NavbarComponent, MapComponent, ListComponent, SocialFeedComponent],
    bootstrap: [AppComponent, NavbarComponent, MapComponent, ListComponent, SocialFeedComponent]

})
export class AppModule { }