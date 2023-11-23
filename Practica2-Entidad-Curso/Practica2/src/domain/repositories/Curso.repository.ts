import { CreatecursoDto, UpdatecursoDto } from '../dtos';
import { CursoEntity } from '../entities/curso.entity';



export abstract class CursoRepository {

  abstract create( createCustomerDto: CreatecursoDto ): Promise<CursoEntity>;

  abstract getAll(): Promise<CursoEntity[]>;

  abstract findById( id: number ): Promise<CursoEntity>;
  abstract updateById( updatecursoeDto: UpdatecursoDto ): Promise<CursoEntity>;
  abstract deleteById( id: number ): Promise<CursoEntity>;

}