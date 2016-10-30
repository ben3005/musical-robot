import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    template: `<nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data- target="#bs-example-navbar-collapse-1" aria- expanded="false">
    <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="#"> Brand </a>
    </div>
        <div class="collapse navbar-collapse" id= "bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <li routerLink="/people" routerLinkActive="active"><a href="#">Missing Persons</a></li>
                <li routerLink="/map" routerLinkActive="active"><a href="#">Map</a></li>
                    </ul>
                    </div>
                    </div>
                    </nav>`
})
export class NavbarComponent {
    name = "Navbar"
} 