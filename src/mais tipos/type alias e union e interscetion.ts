// Ex: Alias types

// ? no começo essa opção fica opcional 

type User = {
  name: string
  lastName: string
  age: number
  pets?: string[]
}

const me: User = {
  name: '',
  lastName: '',
  age: 0,
  pets: []
}

// Ex: Union types
// | ou é um ou é outro (igual o || em algum boleano)

type logLevel = 'info' | 'error' | 'debug' | 'successe'

function logMessage(message: string, level: logLevel) {
  return `${message}: tipo da message é ${level}`
}

logMessage('Você está logado!!', 'successe')

// Ex: Intersection types
// &

type About = {
  bio: string
  interests: string[]
}

type Profile = About & User

const userWithProfile: Profile  = {
  name: 'Otávio',
  lastName: 'Silva',
  age: 19,
  bio: 'My name is...',
  interests: ['developer..'],
}

