import { Router } from 'express';

import { CursoRoutes } from './Curso/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/customers', CursoRoutes.routes );
    
    return router;
  }


}

