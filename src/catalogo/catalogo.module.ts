import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogoRepository } from 'src/CatalogoRepository';
import { CatalogoController } from './catalogo.controller';
import { CatalogoService } from './catalogo.service';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([CatalogoRepository])
  ],
  controllers: [CatalogoController],
  providers: [CatalogoService]
})
export class CatalogoModule {}