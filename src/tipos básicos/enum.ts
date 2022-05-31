
// Ex: 1
enum Permissoes {
  comun,
  editor,
  admin
}

// Ex: 2
enum Cores {
  red = '#ff0000',
  black = '#000'
}

// Em uso
const usuario = {
  perfil: Cores.red,
  nivel: Permissoes.admin
}
