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
@ApiOperation({ summary: 'Devuelve todo los productos' })
@ApiResponse({ status: 200, type: Array })
obtenerTodo() {
  this.appService.obtenerTodo();
}


//http://localhost:3000/catalogo/1
@Get('/:id')
@ApiParam({ name: 'id',description:'Es el id del articulo' })
@ApiOperation({ summary: 'Devuelve un producto especifico' })
@ApiNotFoundResponse({ description: 'No se encuentra el articulo' })
obtenerUnArticulo(@Param('id') id: string) {
  return this.appService.obtenerUnArticulo(id);
}

@Post()
@UsePipes(ValidationPipe)
@ApiOperation({ summary: 'Agregar nuevo producto' })
@ApiBody({ required: true, type: articuloDTO})
agregarUnArticulo(@Body()data: articuloDTO)  {
  console.log(data);
  return this.appService.agregarUnArticulo(data);
}

@Patch('/:id')
@ApiOperation({ summary: 'Actualizar producto' })
@UsePipes(ValidationPipe)
editarUnArticulo(@Param('id') id:string, @Body() data: articuloDTO ) {
  return this.appService.editarUnArticulo(id, data);
}

@Delete('/:id')
@ApiOperation({ summary: 'Eliminar producto' })
eliminarUnArticulo(@Param('id') id:string) {
  return this.appService.eliminarUnArticulo(id);
}

}
