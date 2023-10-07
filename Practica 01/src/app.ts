import {LoopForEach, LoopForIn, LoopForOf} from "./functions/Loops" 
import {} from "./functions/callback"
import { buscarUsuarioPorID } from './functions/callback';

buscarUsuarioPorID(4, (usuarioEncontrado) => {
    if (usuarioEncontrado) {
      console.log('Usuario encontrado:');
      console.log(usuarioEncontrado);
    } else {
      console.log('Usuario no encontrado');
    }
  });




LoopForEach();
LoopForIn();
LoopForOf();