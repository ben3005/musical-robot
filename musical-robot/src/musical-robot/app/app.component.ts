import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<navbar>Nav</navbar>\
                <h1>Main Content</h1><br />\
                <list></list><br />\
                <map></map><br /> \
				<social-feed></social-feed>'
})
export class AppComponent {
    name = "Parent Component"
} 