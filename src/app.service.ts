import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(param: any): string {
    console.log('_', param);
    return 'Hello World!';
  }
}
