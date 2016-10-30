import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<navbar>Nav</navbar>
                <div class="col-xs-9"><list></list>
                <map></map></div>
                <div class="col-xs-3">
				<social-feed></social-feed></div>
`
})
export class AppComponent {
    name = "Parent Component"
} 