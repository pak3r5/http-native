import { Devices } from './devices';
import { Deserializable } from './deserializable';

export class DeviceResponse implements Deserializable {
  errorID: number;
  errorMsg: string;
  listDevices: [Devices];

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
