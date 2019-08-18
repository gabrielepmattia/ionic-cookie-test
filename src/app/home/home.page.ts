import { Component } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';

const BASE_URL = 'https://flyfantastic.pythonanywhere.com/';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private mHttp: HTTP;
  loading = false;
  result = '';
  resultTitle = 'Results';

  constructor() {
    this.mHttp = new HTTP();
  }

  downloadCookie() {
    this.loading = true;
    this.resultTitle = 'Download Cookie';
    this.mHttp.get(`${BASE_URL}/set-cookie`, null, null).then(res => {
      this.result = res.data;
      this.loading = false;
    }).catch(err => {
      this.result = JSON.stringify(err);
      this.loading = false;
    });
  }

  printCookie() {
    this.resultTitle = 'Print Cookie';
    this.result = this.mHttp.getCookieString(`${BASE_URL}`);
  }

  clearCookies() {
    this.resultTitle = 'Clear Cookies';
    this.mHttp.clearCookies();
    this.result = 'Cleared!';
  }

  checkCookie() {
    this.loading = true;
    this.resultTitle = 'Check Cookie';
    this.mHttp.get(`${BASE_URL}`, null, null).then(res => {
      this.result = res.data;
      this.loading = false;
    }).catch(err => {
      this.result = JSON.stringify(err);
      this.loading = false;
    });
  }

}


