'use strict'

class SessionController {
  async store ({ request, response, auth }) {
    const { username, email, password } = request.all()

    const token = await auth.attempt(email, password)

    const data = {
      token,
      username
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
