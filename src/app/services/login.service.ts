import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, from } from 'rxjs';
import { LoginRepository } from '../repository/login.repository';
import { LoginRequest } from '../models/request/login.request';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements LoginRepository {

  baseUrlLogin: string =
    '';


  optionsLogin = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic QzFuM1AwbCE1TXg6MjAxOSFEZXYwcDVATXhDIW4zcDBsaTU='
  };

  constructor(private httpClient: HTTP) {}

  tryLogin(
    login: LoginRequest): Observable<any> {
    this.httpClient.setDataSerializer('urlencoded');
    console.log(this.baseUrlLogin);
    const data = JSON.stringify(login);
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: object-literal-shorthand
    return from(
      this.httpClient
        .post(
          this.baseUrlLogin,
          {data},
          this.optionsLogin
        )
        .then(
          res => JSON.parse(res.data),
          error => console.log('error', error)
        )
    );
  }
}
