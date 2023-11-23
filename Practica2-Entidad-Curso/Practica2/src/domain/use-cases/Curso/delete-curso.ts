import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/Curso.repository';


export interface DeleteCursoUseCase {
  execute( id: number ): Promise<CursoEntity>
}

export class DeleteVehicle implements DeleteCursoUseCase {
  
  constructor(
    private readonly repository: CursoRepository,
  ) {}
  
  execute( id: number ): Promise<CursoEntity> {
    return this.repository.deleteById(id);
  }

}

