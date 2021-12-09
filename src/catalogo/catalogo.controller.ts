import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiNotFoundResponse, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { articuloDTO } from 'src/articuloDTO';
import { CatalogoService } from './catalogo.service';

@Controller('catalogo')
export class CatalogoController {

//constructor llamar service
constructor(private readonly appService: CatalogoService) {}
 
//http://localhost:3000/catalogo/obtenerTodo
@Get('obtenerTodo')
@ApiOperation({ summary: 'Devuelve solamente el nombre y el id del postulante' })
@ApiResponse({ status: 200, type: Array })
obtenerTodo(): object {
  return [];
}


//http://localhost:3000/catalogo/1
@Get('/:id')
@ApiParam({ name: 'id',description:'Es el id del articulo' })
@ApiNotFoundResponse({ description: 'No se encuentra el articulo' })
obtenerUnArticulo(@Param('id') id: string): articuloDTO {
  return this.appService.obtenerUnArticulo(id);
}

@Post()
@UsePipes(ValidationPipe)
@ApiBody({ required: true, type: articuloDTO})
agregarUnArticulo(@Body()data: articuloDTO)  {
  console.log(data);
  return this.appService.agregarUnArticulo(data);
}

@Patch('/:id')
@UsePipes(ValidationPipe)
editarUnArticulo(@Param('id') id:string, @Body() data: articuloDTO ) {
  return this.appService.editarUnArticulo(id, data);
}

@Delete('/:id')
eliminarUnArticulo(@Param('id') id:string) {
  return this.appService.eliminarUnArticulo(id);
}

}
