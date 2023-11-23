import { CreatecursoDto, UpdatecursoDto } from '../dtos';
import { CursoEntity } from '../entities/curso.entity';



export abstract class CursoDatasource {

  abstract create( CreatecursoDto: CreatecursoDto ): Promise<CursoEntity>;

  abstract getAll(): Promise<CursoEntity[]>;

  abstract findById( id: number ): Promise<CursoEntity>;
  abstract updateById( updatecursoDto: UpdatecursoDto ): Promise<CursoEntity>;
  abstract deleteById( id: number ): Promise<CursoEntity>;

}