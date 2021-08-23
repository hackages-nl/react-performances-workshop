import React, {ReactChild} from 'react'
import styled from 'styled-components'

const Container = styled.span`
  font-size: 2rem;
`

export const Emojis = ({children, onClick}: {children: ReactChild, onClick?: () => void}) => (
  <Container role="img" aria-label="emoji">
    {children}
  </Container>
)

