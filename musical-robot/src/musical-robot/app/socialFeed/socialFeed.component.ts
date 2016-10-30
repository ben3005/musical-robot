import { Component, OnInit } from '@angular/core';
import { FacebookService, FacebookLoginResponse, FacebookInitParams } from 'ng2-facebook-sdk/dist';

@Component({
    selector: 'social-feed',
	template: `<div>
					<h2>The latest from our facebook page</h2>
					<div *ngFor="let post of wallFeed">
						<p>{{post.message}}</p>
					</div>S
				</div>`,
	providers: [FacebookService]
})

export class SocialFeedComponent implements OnInit {

	public wallFeed: Array<any>;

	constructor(private fb: FacebookService) {
		let fbParams: FacebookInitParams = {
			appId: '262201460849386',
			xfbml: true,
			version: 'v2.8'
		};
		this.fb.init(fbParams);
    }

    ngOnInit() {
		this.fb.login().then(
			(response: FacebookLoginResponse) => {
				this.fb.api('musicalrobot/feed', "get").then(
					(response: any) => { this.wallFeed = response.data; },
					(error: any) => console.error(error)
				)
			},
			(error: any) => console.error(error)
		);
	}
}