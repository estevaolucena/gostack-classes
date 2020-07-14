import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImage from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer"/>
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/23317340?s=460&u=bc5552f62cbd03ceda228bbb0a4b2f3df3485dc9&v=4"
            alt=""
          />

          <div>
            <strong>estevaolucena/ecoleta</strong>
            <p>Next Level Week 1.0: A complete application with NodeJS, ReactJS and React Native given by @Rocketseat :rocket:</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/23317340?s=460&u=bc5552f62cbd03ceda228bbb0a4b2f3df3485dc9&v=4"
            alt=""
          />

          <div>
            <strong>estevaolucena/ecoleta</strong>
            <p>Next Level Week 1.0: A complete application with NodeJS, ReactJS and React Native given by @Rocketseat :rocket:</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/23317340?s=460&u=bc5552f62cbd03ceda228bbb0a4b2f3df3485dc9&v=4"
            alt=""
          />

          <div>
            <strong>estevaolucena/ecoleta</strong>
            <p>Next Level Week 1.0: A complete application with NodeJS, ReactJS and React Native given by @Rocketseat :rocket:</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
