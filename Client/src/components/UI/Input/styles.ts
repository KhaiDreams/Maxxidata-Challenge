import styled from 'styled-components'

interface InputProps {
  borderColor?: string;
  bgColor?: string;
  placeholderColor?: string;
  textColor?: string;
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  flex: 1;
  .icon {
    position: absolute;
    top: 0;
    right: 0;
  }
`

export const Input = styled.input<InputProps>`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0.2rem;
  padding: 0.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  padding-left: 1rem;
  color: ${({ textColor }) => textColor ?? `var(--color-1)`};
  background: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
  border: ${({ borderColor }) => borderColor && borderColor};
  ::placeholder {
    color: ${({ placeholderColor }) =>
      placeholderColor ? placeholderColor : 'var(--color-1)'};
  }
`