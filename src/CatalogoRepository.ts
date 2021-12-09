import { Logger } from "@nestjs/common";
import { EntityRepository ,Repository ,MongoRepository} from "typeorm";
import { Articulo } from "./Articulo.entity";
import { articuloDTO } from "./articuloDTO";


@EntityRepository(Articulo)

export class CatalogoRepository extends MongoRepository<Articulo>{

    async createArticulo(data: articuloDTO){
        // declaracion
        const { item,precio,descripcion,LugarCompra,fechaCompra} = data;
        //instancia
        const articulo = new Articulo();
        //updates
        articulo.item = item;
        articulo.precio = precio;
        articulo.descripcion = descripcion;
        articulo.LugarCompra = LugarCompra;
        articulo.fechaCompra = fechaCompra;
        return await articulo.save();
    }

    

}
 