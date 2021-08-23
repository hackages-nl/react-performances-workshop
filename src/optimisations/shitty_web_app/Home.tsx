import React from 'react'
import styled from 'styled-components'
import {Title} from '../../shared/Title'
import LargePicture from '../../assets/circlebig.png'

export const Section = styled.div<{gradient?: string}>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.gradient};
`
export function Home (){
  return (
    <>
      <Section gradient="linear-gradient(#00d1b2, #FFFFFF)">
        <Title color="white">Scroll down...</Title>
      </Section>
      <Section gradient="linear-gradient(#FFFFFF, #F7BB97)">
        <Title color="white">Deeper...</Title>
      </Section>
      <Section gradient="linear-gradient(#F7BB97, #ff7eb3)">
        <Title color="white">Are you ready for it?</Title>
      </Section>
      <Section gradient="linear-gradient(#ff7eb3, #8E0E00)">
        <img src={LargePicture} width="500px" />
      </Section>
    </>
  )
}
