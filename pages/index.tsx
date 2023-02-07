import type { NextPage } from 'next'
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Container>
      <Title>
        Welcome to{' '}
        <TitleHighlight href="https://nextjs.org">
          Next.js!
        </TitleHighlight>
      </Title>
    </Container>
  )
}

const Container = styled.div.attrs({
  className: "flex min-h-screen flex-col items-center justify-center py-2"
})``;

const Title = styled.h1.attrs({
  className: "text-6xl font-bold"
})``;

const TitleHighlight = styled.a.attrs({
  className: "text-red-600"
})``;

export default Home
