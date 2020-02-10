import { Deserializable } from './Deserializable';

export class Devices implements Deserializable {
  idDevice: number;
  title: string;
  readQueue: string;
  writeQueue: string;
  subKitchen: number;
  type: number;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
