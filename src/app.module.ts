import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogoService } from './catalogo/catalogo.service';
import { CatalogoController } from './catalogo/catalogo.controller';

@Module({
  imports: [],
  controllers: [AppController, CatalogoController],
  providers: [AppService, CatalogoService],
})
export class AppModule {}
