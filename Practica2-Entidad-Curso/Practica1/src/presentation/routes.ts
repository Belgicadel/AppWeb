import { Router } from 'express';
import { CursoRoutes } from './Curso/routes';


export class AppRoutes {

  static get routes(): Router {

    const router = Router();
    router.use('/api/cursos', CursoRoutes.routes );
        return router;
  }


}

