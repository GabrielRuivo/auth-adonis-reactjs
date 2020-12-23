'use strict'

const Route = use('Route')

/* quando receber um post na rota /users chamamos o UserController no método store */
Route.post('users', 'UserController.store')

Route.post('session', 'SessionController.store')
Route.get('logout', 'SessionController.logout')

Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')
