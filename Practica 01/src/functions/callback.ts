import { Usuario, usuarios } from '../interfaces/Arrays';

export function buscarUsuarioPorID(id: number, callback: (usuario: Usuario | null) => void) {
  const usuarioEncontrado = usuarios.find((usuario) => usuario.id_curso === id);
  callback(usuarioEncontrado || null);
}