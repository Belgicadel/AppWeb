export interface Usuario {
  id_curso: number;
  id_instrumento: number;
  id_tipo_de_curso: number;
  id_profesor: number;
  nombre_curso: string;
  [key: string]: any;
}

// Definir un arreglo de objetos basados en la interfaz Usuario
export const usuarios: Usuario[] = [
  {
    id_curso: 1,
    id_instrumento: 101,
    id_tipo_de_curso: 201,
    id_profesor: 301,
    nombre_curso: "Curso de Matemáticas"
  },
  {
    id_curso: 2,
    id_instrumento: 102,
    id_tipo_de_curso: 202,
    id_profesor: 302,
    nombre_curso: "Curso de Ciencias"
  },
  {
    id_curso: 3,
    id_instrumento: 103,
    id_tipo_de_curso: 203,
    id_profesor: 303,
    nombre_curso: "Curso de Historia"
  },
  {
    id_curso: 4,
    id_instrumento: 104,
    id_tipo_de_curso: 204,
    id_profesor: 304,
    nombre_curso: "Curso de Literatura"
  },
  {
    id_curso: 5,
    id_instrumento: 105,
    id_tipo_de_curso: 205,
    id_profesor: 305,
    nombre_curso: "Curso de Arte"
  }
];

module.exports = { usuarios };
