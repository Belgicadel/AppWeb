import { prisma } from '../../data/postgres';
import { CreatecursoDto, CursoDatasource, CursoEntity, UpdatecursoDto } from '../../domain';




export class CursoDatasourceImpl implements CursoDatasource {

  async create( createcursoDto: CreatecursoDto ): Promise<CursoEntity> {
    const cursos = await prisma.curso.create({
      data: createcursoDto!
    });

    return CursoEntity.fromObject( cursos );
  }

  async getAll(): Promise<CursoEntity[]> {
    const cursos = await prisma.curso.findMany();
    return cursos.map( curso => CursoEntity.fromObject(curso) );
  }

  async findById( id: number ): Promise<CursoEntity> {
    const curso = await prisma.curso.findFirst({
      where: { id }
    });

    if ( !curso ) throw `Curso with id ${ id } not found`;
    return CursoEntity.fromObject(curso);
  }

  async updateById( updatecursoDto: UpdatecursoDto ): Promise<CursoEntity> {
    await this.findById( updatecursoDto.id );
    
    const updatedCurso = await prisma.curso.update({
      where: { id: updatecursoDto.id },
      data: updatecursoDto!.values
    });

    return CursoEntity.fromObject(updatedCurso);
  }

  async deleteById( id: number ): Promise<CursoEntity> {
    await this.findById( id );
    const deleted = await prisma.curso.delete({
      where: { id }
    });

    return CursoEntity.fromObject( deleted );
  }

}