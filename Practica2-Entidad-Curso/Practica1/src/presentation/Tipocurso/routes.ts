import { Router } from 'express';
import { TipocursoController } from './controller';


export class TipocursoRoutes {


  static get routes(): Router {

    const router = Router();

    const tipocursoController= new TipocursoController();

    router.get('/', tipocursoController.getTipocurso );
    router.get('/:id', tipocursoController.getTipocursoById );
    
    router.post('/', tipocursoController.createTipocurso );
    router.put('/:id', tipocursoController.updatetipocurso );
    router.delete('/:id', tipocursoController.deletetipocurso);


    return router;
  }


}

