'use strict'

const User = use('App/Models/User')
const Mail = use('Mail')
const crypto = require('crypto')
const moment = require('moment')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(['emails.forgot_password'],
        {
          email,
          token: user.token,
          link: `http://localhost:3000/change-password/${user.token}`
        },
        message => {
          message
            .to(user.email)
            .from('gabriel-ruivo@hotmail.com', 'Dev Front-end | Gabriel')
            .subject('Recuperação de senha')
        })

      return user.token
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo deu errado, esse email não existe.' } })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()

      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'Token expirado' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo deu errado, esse email existe?' } })
    }
  }
}

module.exports = ForgotPasswordController
