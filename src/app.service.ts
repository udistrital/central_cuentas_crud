import { Injectable } from '@nestjs/common';
import { Configuration } from './config/configuration';

@Injectable()
export class AppService {
  getHello(): string {
    return `mongodb://${Configuration.environment.USER_DB}:${Configuration.environment.PASS_DB}@`+
    `${Configuration.environment.HOST_DB}:${Configuration.environment.PORT_DB}/${Configuration.environment.NAME_DB}?authSource=${Configuration.environment.AUTH_DB}`;
  }
}
