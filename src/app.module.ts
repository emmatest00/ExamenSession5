import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogoModule } from './catalogo/catalogo.module';
import { CatalogoController } from './catalogo/catalogo.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CatalogoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
