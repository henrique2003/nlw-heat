import styled, { css } from 'styled-components'

interface IContainerProps {
  logged: boolean
  src: string
}

export const Container = styled.div<IContainerProps>`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  position: relative;

  ${props => props.logged && css`
    &::before {
      content: '';
      height: 100vh;
      width: 320px;
      background: url(${props.src}), no-repeat;
      background-size: cover;
      position: absolute;
      right: -99px;
      top: 0;
    }
  `}
`
