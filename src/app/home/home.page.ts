import { Component } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { DeviceResponse } from '../models/deviceResponse';
import { Devices } from '../models/devices';
import { LoginService } from '../services/login.service';
import { LoginRequest } from '../models/request/login.request';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  username: string;
  password: string;

  constructor(private deviceService: DeviceService, private loginService: LoginService) {}

  tryLogin() {
    console.log('username', this.username, ',password:', this.password);
    // tslint:disable-next-line: max-line-length
    let login = this.createLogin(this.username, this.password, 'password');
    this.loginService
      .tryLogin(login)
      .subscribe(
        // tslint:disable-next-line: only-arrow-functions
        function(response) {
          console.log('result try login', response);
        },
        // tslint:disable-next-line: only-arrow-functions
        function(error) {
          console.log('error try login', error);
        }
      ).add(() => {
        console.log('resultado del login');
      });
  }

  getDevices() {
    let listDevices: [Devices];
    // tslint:disable-next-line: max-line-length
    this.deviceService
      .getDevices(1)
      .subscribe(
        // tslint:disable-next-line: only-arrow-functions
        function(response) {
          console.log('result', response);
          listDevices = response.listDevices;
        },
        // tslint:disable-next-line: only-arrow-functions
        function(error) {
          console.log('error', error);
        }
      ).add(() => {
        console.log('lista de dispositivos', listDevices);
      });
  }

  createLogin(username: string, password: string, grant_type: string): LoginRequest {
    let login: LoginRequest = new LoginRequest();
    login.username = username;
    login.password = password;
    login.grant_type = grant_type;
    return login;
  }
}
