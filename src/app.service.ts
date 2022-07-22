import { Injectable } from '@nestjs/common';
import { environment } from './config/configuration';

@Injectable()
export class AppService {
  getDefault(): Object{
    return{
      status: "OK",
    };
  }
}
