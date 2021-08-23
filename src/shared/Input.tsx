import styled from 'styled-components'
import React, { ChangeEvent } from 'react'

export const InputArea = styled.input`
  height: 40px;
  width: 50%;
  border: 1px solid #b7bbba;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #717776;
  padding: 0.5625rem 0.75rem;

  //Fix box-shadow on iphone
  -webkit-appearance: none;
  &:focus {
    outline: none;
    border: 1px solid dodgerblue;
  }
  &::placeholder {
    color: #999e9d;
  }
`

export const Label = styled.label<{danger?: boolean}>`
  font-size: 0.875rem;
  font-family: Helvetica;
  color: ${props => (props.danger ? 'tomato' : '#4b4f4e')};
`

interface IInput {
  wrong?: {meta: {valid: boolean}};
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  input?: Record<string, any>
  meta?: Record<string, any>
}

export function Input ({
  label,
  placeholder,
  meta = {},
  input = {},
  ...rest
}: IInput) {
  
  return (
    <>
      {label && <Label>{label}</Label>}
      <InputArea
        type="text"
        placeholder={placeholder}
        {...input}
        {...rest}
      />
      {(meta.dirty || meta.touched) &&
        meta.error && <Label danger>{meta.error}</Label>}
    </>
  )
}
