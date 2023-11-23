// DDD
import { Request, Response } from 'express';
import { CreateCursoDto, UpdateCursoDto } from '../../domain/dtos';
import { CursoRepository } from '../../domain';


export class CursoController {

  //* DI
  constructor(
    private readonly CursoRepository: CursoRepository,
  ) { }


  public getCurso = async ( req: Request, res: Response ) => {
    const curso = await this.CursoRepository.getAll();
    return res.json( curso );
  };

  public getCursoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const curso = await this.CursoRepository.findById( id );
      res.json( curso );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createCurso = async ( req: Request, res: Response ) => {
    const [ error, createCursoDto ] = CreateCursoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const curso = await this.CursoRepository.create( createCursoDto! );
    res.json( curso );

  };

  public updateCurso = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateCursoDto ] = UpdateCursoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedCurso = await this.CursoRepository.updateById( updateCursoDto! );
    return res.json( updatedCurso );

  };


  public deleteCurso = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedCurso = await this.CursoRepository.deleteById( id );
    res.json( deletedCurso );

  };



}