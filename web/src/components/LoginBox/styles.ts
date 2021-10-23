import styled from 'styled-components'

interface IContainerProps {
  background: string
}

export const Container = styled.div<IContainerProps>`
  height: 100vh;
  width: 100%;
  background: #17171a url(${props => props.background}) no-repeat center top;
  padding: 440px 80px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const Strong = styled.strong`
  font-size: 32px;
  line-height: 36px;
`

export const Link = styled.a`
  background: #ffcd1e;
  margin-top: 32px;
  padding: 0 40px;
  height: 56px;
  color: #09090a;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    margin-right: 16px;
  }
`
