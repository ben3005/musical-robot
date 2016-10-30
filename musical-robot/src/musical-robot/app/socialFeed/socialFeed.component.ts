import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'social-feed',
	template: `
		<div>
			<a class="twitter-timeline"  href="https://twitter.com/hashtag/MissingPerson" data-widget-id="792689367634542592">#MissingPerson Tweets</a>            
		</div>
	`
})

export class SocialFeedComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
    }
}