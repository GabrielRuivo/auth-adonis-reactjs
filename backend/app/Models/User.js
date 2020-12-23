'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  /* contructor que é executado toda vez que o model for chamado */
  static boot () {
    super.boot()

    /* funcionalidade que ira criptografar a senha cadastrada pelo usuario */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
