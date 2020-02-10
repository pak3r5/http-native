import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService implements DeviceService{
  baseUrl: string =
    '';
  optionsJson = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  constructor(private httpClient: HTTP) {}

  getDevices(type: number): Observable<any> {
    this.httpClient.setDataSerializer('json');
    // tslint:disable-next-line: object-literal-shorthand
    return from(
      this.httpClient.post(this.baseUrl, { type }, this.optionsJson).then(
        res => JSON.parse(res.data),
        res => console.log(res.data)
      )
    );
  }
}
