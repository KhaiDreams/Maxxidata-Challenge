import { InputHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

interface InputProps {
  name?: string
  placeholder?: string
  placeholderColor?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  icon?: ReactNode
  value?: string | number | any;
  defaultValue?: string | number | any;
  borderColor?: string
  bgColor?: string
  type?: string
  textColor?: string
  className?: string
  disabled?: boolean
}

export function Input(props: InputProps) {
  return (
    <S.Container>
      <S.Input
        {...props}
        name={props.name}
        bgColor={props.bgColor}
        value={props.value}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        placeholderColor={props.placeholderColor}
        borderColor={props.borderColor}
        textColor={props.textColor}
        type={props.type}
        className={props.className}
        disabled={props.disabled}
      />
      <i className="icon">{props.icon}</i>
    </S.Container>
  )
}