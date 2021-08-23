import React from 'react'
import {SimpleContainer} from '../../shared/SimpleContainer'
import {Title} from '../../shared/Title'
import {Button} from '../../shared/Button'
import { Form, Field } from 'react-final-form'

const requiredField = (value: string) => (value ? undefined : 'This Field is Required')

function Input(){
  return (
    <input type="text" />
  )
}


export function Contact (){

  const onSubmit = () => {
    alert('We should ask an intern to implement this..')
  }

  return (
    <Form onSubmit={onSubmit} render={({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
       <SimpleContainer>
        <Title>Contact page</Title>
        <Field
          name="fullName"
          label="Full name"
          placeholder="Full name"
          validate={requiredField}
          component={Input}
        />
        <Field
          name="email"
          label="Email"
          placeholder="Email"
          component={Input}
          validate={requiredField}
        />
        <Field
          validate={requiredField}
          name="message"
          label="Your message"
          placeholder="We don't really care BTW..."
          component={Input}
        />
        <Button type="submit">Send</Button>
      </SimpleContainer>
      </form>
    )}></Form>
  )
}
