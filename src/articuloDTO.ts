import { IsOptional } from 'class-validator';

export class articuloDTO
{

    id:number;
    item: string;
    precio: number;
    descripcion: string;
    LugarCompra: string[];
    @IsOptional()
    fechaCompra: Date;

}


