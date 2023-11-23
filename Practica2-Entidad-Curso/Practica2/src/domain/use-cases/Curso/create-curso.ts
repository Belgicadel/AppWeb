import { CreatecursoDto } from '../../dtos';
import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/Curso.repository';


export interface CreateCursoUseCase {
  execute( dto: CreatecursoDto ): Promise<CursoEntity>
}

// ctrl+ shift + l
export class CreateCurso implements CreateCursoUseCase {
  
  constructor(
    private readonly repository: CursoRepository,
  ) {}
  
  execute( dto: CreatecursoDto ): Promise<CursoEntity> {
    return this.repository.create(dto);
  }

}

