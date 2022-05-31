// Ex: interface

interface GameWithinDescrib {
  name: string
  describ: string
}

// Ex: public 

class User2 {
  public name
  public age
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class Player extends User2 {
  public jogo

  constructor(name: string, age: number, jogo: string) {
    super(name, age)
    this.jogo = jogo
  }
}

const pessoa2 = new User2('Otávio', 19)
const pessoaPlayer = new Player('Otávio', 19, 'cs')

// Ex: private

class Game {
  protected name
  // private name // private significa que ela só pode ser acessada dentro do game.name 

  constructor(name: string, ) {
    this.name = name
  }

  sayName() {
    return `${this.name}`
  }
}

class GameWithinDescrib extends Game implements GameWithinDescrib {
  public describ
  constructor(name: string, describ: string) {
    super(name)

    this.describ = describ
  }

  sayName() {
    return `${this.name}`
  }
}

const game2 = new Game('csgo')

// game2.name = 'lol'
// console.log(game2.name)  
