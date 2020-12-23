'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    /* request only faz a requisição apenas dos métodos username, email e password */
    const data = request.only(['username', 'email', 'password'])

    /* User.create(data), criar o usuario com os dados do data */
    const user = await User.create(data)

    /* retorna o user criado sem precisar do response, porque quando criamos com a
       flag --api-only ele automaticamente entende que todo return dentro do controller
       é pra retornar um json.
    */
    return user
  }
}

module.exports = UserController
