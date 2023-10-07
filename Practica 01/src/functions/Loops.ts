import { usuarios } from "../interfaces/Arrays";

// Recorrer con ForEach

const LoopForEach = () => {
  usuarios.forEach((usuario, index) => {
    console.log("Usuario " + (index + 1));
    for (const propiedad in usuario) {
      console.log(propiedad + ": " + usuario[propiedad]);
    }
    console.log("\n");
  });

}
  
  const LoopForIn = () => {
  for (let i = 0; i < usuarios.length; i++) {
     console.log("Usuario " + (i + 1));
     for (const propiedad in usuarios[i]) {
       console.log(propiedad + ": " + usuarios[i][propiedad]);
     }
     console.log("\n");
   }
  }
   
  
   // Recorrer con for of
  const LoopForOf = () => {
  for (const usuario of usuarios) {
     console.log("Usuario ID: " + usuario.id_curso);
     console.log("Nombre del curso: " + usuario.nombre_curso);
     console.log("\n");
   }
  }
   
export { LoopForEach, LoopForIn, LoopForOf };