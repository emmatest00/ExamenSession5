import { Injectable } from '@nestjs/common';

//identifica service
@Injectable()
export class AppService {


  getHello1(): string {
    return 'Hello World!';
  }

  getHello(id: string): string {
    return 'Hello World!' + id;
  }
}
