import { Logger } from "@nestjs/common";
import { EntityRepository ,Repository } from "typeorm";
import { Articulo } from "./Articulo.entity";
import { articuloDTO } from "./articuloDTO";


@EntityRepository(Articulo)

export class Catalogo extends Repository<Articulo>{

    async createArticulo(data: articuloDTO){
        // declaracion
        const {id, item,precio,descripcion,LugarCompra,fechaCompra} = data;
        //instancia
        const articulo = new Articulo();
        //updates
        articulo.id = id;
        articulo.item = item;
        articulo.precio = precio;
        articulo.descripcion = descripcion;
        articulo.LugarCompra = LugarCompra;
        articulo.fechaCompra = fechaCompra;
        return await articulo.save();
    }

    

}
 