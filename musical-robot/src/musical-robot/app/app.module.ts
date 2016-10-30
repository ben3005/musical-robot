import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent }   from './app.component';
import { NavbarComponent } from './navbar.component';
import { SocialFeedComponent } from './SocialFeed/socialFeed.component';
import { MapComponent } from './map/map.component';
import { MissingPersonListComponent } from './list.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDW2Hk3NQWnZii9te8BraCWbFmW3vXsRqo'
		}),
		ChartsModule
	],
	declarations: [AppComponent, NavbarComponent, MapComponent, MissingPersonListComponent, SocialFeedComponent],
	bootstrap: [AppComponent, NavbarComponent, MapComponent, MissingPersonListComponent, SocialFeedComponent]

})
export class AppModule { }