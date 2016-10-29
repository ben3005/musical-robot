import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<navbar>Nav</navbar>\
                <h1> Main Content</h1><br>\
                <list>List</list><Br>\
                <map>Map</map><Br> '
})
export class AppComponent {
    name = "Parent Component"
} 