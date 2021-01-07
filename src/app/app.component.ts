/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-app',
  template: `<router-outlet></router-outlet>

  
  
  <app-my-loader></app-my-loader>`,
})
export class AppComponent implements OnInit {

  constructor(public http: HttpClient, private analytics: AnalyticsService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
  makeHttpCall() {
    this.http.get('http://18.217.48.28:2000/admin/login')
      .subscribe((r) => {
        console.log(r);
      });
  }
}
