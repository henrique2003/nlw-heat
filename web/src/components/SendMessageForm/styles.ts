import styled from 'styled-components'

export const Container = styled.div`
  background: #1b1b1f;
  padding: 24px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`

export const SingOutButton = styled.button`
  background: transparent;
  border: 0;
  color: #c4c4cc;
  position: absolute;
  left: 24px;
  top: 24px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UserImage = styled.div`
  padding: 3px;
  background: linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%);
  border-radius: 50%;
  line-height: 0;

  img {
    width: 94px;
    height: 94px;
    border-radius: 50%;
    border: 6px solid #121214;
  }
`

export const UserName = styled.strong`
  font-size: 24px;
  line-height: 30px;
  margin-top: 16px;
`

export const GithubUser = styled.span`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #c4c4cc;

  svg {
    margin-right: 8px;
  }
`

export const FormMessage = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 48px;
  background: #202024;
`

export const FormLabel = styled.label`
  padding: 18px 24px;
  font-size: 20px;
  font-weight: bold;
  background: #29292e;
  text-align: left;
`

export const FormTextArea = styled.textarea`
  background: transparent;
  border: 0;
  resize: none;
  padding: 24px;
  height: 160px;
  color: #e1e1e6;
  font-size: 16px;
  line-height: 24px;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #8d8d99;
  }
`

export const FormSubmitButton = styled.button`
  align-self: flex-end;
  background: #ff008e;
  border: none;
  margin: 24px;
  padding: 0 32px;
  height: 40px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`
