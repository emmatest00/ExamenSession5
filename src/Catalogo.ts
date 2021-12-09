import { Logger } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Articulo } from "./Articulo";


@EntityRepository(Articulo)

export class Catalogo extends Repository<Articulo>{

private logger = new Logger('');



}
 