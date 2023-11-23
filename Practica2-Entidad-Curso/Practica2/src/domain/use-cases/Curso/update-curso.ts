import { UpdatecursoDto } from '../../dtos';
import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/Curso.repository';


export interface UpdatecursoUseCase {
  execute( dto: UpdatecursoDto ): Promise<CursoEntity>
}


export class Updatecurso implements UpdatecursoUseCase {
  
  constructor(
    private readonly repository: CursoRepository,
  ) {}
  
  execute( dto: UpdatecursoDto ): Promise<CursoEntity> {
    return this.repository.updateById(dto);
  }

}

