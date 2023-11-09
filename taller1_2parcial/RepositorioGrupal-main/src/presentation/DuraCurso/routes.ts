import { Router } from 'express';
import { DuraCurController} from './controller';


export class DuracurRoutes {


  static get routes(): Router {

    const router = Router();

    const duraCurControllers= new DuraCurController();

    router.get('/', duraCurControllers.getDuracurso );
    router.get('/:id', duraCurControllers.getDuracursobyId);
    
    router.post('/id', duraCurControllers.createduracur );
    router.put('/:id', duraCurControllers.updateduracur );
    router.delete('/:id', duraCurControllers.deleteduracur);


    return router;
  }


}

