
export class CursoEntity {

    constructor(
      public nombre_curso  : string,
      public id_instrumento  : number,
      public id_Profesor  : number,
      public id_tipo_curso  : number,
      public id_duracur  : number
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): CursoEntity {
      const { nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur } = object;
      if ( !nombre_curso ) throw 'nombre_curso is required';
      if ( !id_instrumento ) throw 'id_instrumento is required';
      if ( !id_Profesor) throw 'id_Profesor is required';
      if ( !id_duracur ) throw 'id_duracur ID is required';
  
        return new CursoEntity(nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur)
    }
  
  }
  
  
  