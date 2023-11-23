import { Router } from 'express';
import { CursoController } from './controller';
import { CursoDatasourceImpl } from '../../infrastructure/datasource/vehicle.datasource.impl';
import { CursoRepositoryImpl } from '../../infrastructure/repositories/vehicle.repository.impl';


export class CursoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new CursoDatasourceImpl();
    const cursoRepository = new CursoRepositoryImpl( datasource );
    const cursoController = new CursoController(cursoRepository);

    router.get('/', cursoController.getCurso );
    router.get('/:id', cursoController.getCursoById );
    
    router.post('/', CursoController.createCurso );
    router.put('/:id', CursoController.updateCurso );
    router.delete('/:id', CursoController.deleteCurso );


    return router;
  }


}

