import Head from 'next/head'
import * as S from '../styles/index'

const Home = ({ title = 'Boilerplate com NextJS, ReactJS, Typescript e StyledComponents' }) => (
  <S.Main>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <S.Title>
      Boilerplate com NextJS, ReactJS, Typescript e StyledComponents
    </S.Title>
    <S.Description>
      Sem stress, configurado e pronto para uso. Experimente !
    </S.Description>
    <S.Info>
      Para começar é so editar o arquivo <code className='code'>pages/index.tsx</code>
    </S.Info>
  </S.Main>
)

export default Home
