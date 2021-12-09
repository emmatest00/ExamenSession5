import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()

export class Articulo extends BaseEntity{

        @ObjectIdColumn()
        id:number;
    
        @Column()
        item: string;
        
        @Column()
        precio: number;
        
        @Column()
        descripcion: string;
       
        @Column()
        LugarCompra: string[];
   
        @Column()
        fechaCompra: Date;
    
}
    