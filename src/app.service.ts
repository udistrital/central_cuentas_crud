import { Injectable } from '@nestjs/common';
import { environment } from './config/configuration';

@Injectable()
export class AppService {
  getHello(): string {
    return `mongodb://${environment.USER_DB}:${environment.PASS_DB}@`+
    `${environment.HOST_DB}:${environment.PORT_DB}/${environment.NAME_DB}?authSource=${environment.AUTH_DB}`;
  }
}
