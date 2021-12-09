import { Injectable } from '@nestjs/common';
import { Articulo } from 'src/Articulo';
import { articuloDTO } from 'src/articuloDTO';

@Injectable()
export class CatalogoService {

      obtenerTodo(): object {
        console.log('obtenerTodo');
        return  [];
      }
    
      obtenerUnArticulo(id: string): articuloDTO {
        return null;
      }

      agregarUnArticulo(data: articuloDTO) {
        console.log("a" + data.item);
        return data;
        
      }

      editarUnArticulo(id: string,data: articuloDTO) {
        return data;
      }

      eliminarUnArticulo(id: string) {
        return id;
      }

}
