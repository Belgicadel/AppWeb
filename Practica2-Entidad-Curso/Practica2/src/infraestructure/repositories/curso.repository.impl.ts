import { CreatecursoDto, CursoDatasource, CursoEntity, CursoRepository, UpdatecursoDto } from '../../domain';


export class CursoRepositoryImpl implements CursoRepository {

  constructor(
    private readonly datasource: CursoDatasource,
  ) { }


  create( createcursoDto: CreatecursoDto ): Promise<CursoEntity> {
    return this.datasource.create( createcursoDto );
  }

  getAll(): Promise<CursoEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<CursoEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateCursoDto: UpdatecursoDto ): Promise<CursoEntity> {
    return this.datasource.updateById( updateCursoDto );
  }

  deleteById( id: number ): Promise<CursoEntity> {
    return this.datasource.deleteById( id );
  }

}


