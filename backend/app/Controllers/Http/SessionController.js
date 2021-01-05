'use strict'
const User = use('App/Models/User')
class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)
    const user = await User.findByOrFail('email', email)

    const data = {
      token,
      user: user.username
    }
    return data
  }

  async logout ({ request, response, auth }) {
    await auth
      .authenticator('jwt')
      .revokeTokens()
  }
}

module.exports = SessionController
