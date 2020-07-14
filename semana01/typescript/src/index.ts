import express from 'express'
import createUser from './services/CreateUser'

const app = express()

app.get('/', (resquest, response) => {
  const user = createUser({
    name: 'Estevao',
    email: 'estevao.llucena@gmail.com',
    password: '123456',
    techs: ['Node', 'React', 'ReactNative', {
      title: 'Vue',
      experience: 100
    }]
  })
  return response.json(user)
})

app.listen(3000)