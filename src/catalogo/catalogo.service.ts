import { Injectable } from '@nestjs/common';
import { Articulo } from 'src/Articulo.entity';
import { articuloDTO } from 'src/articuloDTO';
import { InjectRepository } from '@nestjs/typeorm';
import { CatalogoRepository } from 'src/CatalogoRepository';



@Injectable()
export class CatalogoService {


  constructor(
    @InjectRepository(CatalogoRepository)
    private repository: CatalogoRepository
) { }


      async obtenerTodo() {
        console.log('obtenerTodo');
        let response = this.repository.find();
        return await response;
      }
    
      async obtenerUnArticulo(id: string) {
        console.log("obtenerUnArticulo" + id);
    let response  = await this.repository.find({item:id}); //Por el item no por el ID 
          return response;
        }

      async agregarUnArticulo(data: articuloDTO) {
        const news = await this.repository.createArticulo(data);
        console.log("a" + data.item);
        return data;
        
      }

      async editarUnArticulo(id: string,data: articuloDTO) {
        let response  = await this.repository.update({item:id},data); //Por el item no por el ID 
        return response;
      }

      async eliminarUnArticulo(id: string) {
        console.log("eliminarUnArticulo" + id);
       let response  = await this.repository.findOneAndDelete({item:id}); //Por el item no por el ID 
          return response;
        }

}
