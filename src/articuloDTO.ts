import { IsOptional } from 'class-validator';

export class articuloDTO
{

    item: string;
    precio: number;
    descripcion: string;
    LugarCompra: string[];
    @IsOptional()
    fechaCompra: Date;

}


