import { Router } from 'express';

import { TipocursoRoutes } from './Tipocurso/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/tipocurso', TipocursoRoutes.routes );
    
    return router;
  }


}

