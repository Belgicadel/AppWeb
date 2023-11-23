import { Request, Response } from 'express';
import { CreateCursoDto, UpdateCursoDto } from '../../domain/dtos';
import { CreateCurso, DeleteCurso, GetCurso, GetCursoById, CursoRepository, UpdateCurso } from '../../domain';


export class CursoController {

  //* DI
  constructor(
    private readonly CursoRepository: CursoRepository,
  ) { }


  public getCurso = ( req: Request, res: Response ) => {

    new GetCurso( this.CursoRepository )
      .execute()
      .then( curso => res.json( curso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getCursoById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetCurso( this.CursoRepository )
      .execute( id )
      .then( curso => res.json( curso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createCurso = ( req: Request, res: Response ) => {
    const [ error, createCursoDto ] = CreateCursoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateCurso( this.CursoRepository )
      .execute( createCursoDto! )
      .then( curso => res.json( curso ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateCurso = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateCursoDto ] = UpdateCursoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateCurso( this.CursoRepository )
      .execute( updateCursoDto! )
      .then( curso => res.json( curso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteCurso = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteCurso( this.CursoRepository )
      .execute( id )
      .then( curso => res.json( curso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 