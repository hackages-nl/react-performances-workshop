import React, {ChangeEvent} from 'react'
import slug from 'slug'
import {Container} from '../../shared/Container'
import {Text} from '../../shared/Text'

export function UrlCreator () {
  const [input, setInput] = React.useState('');
  const onChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => setInput(value);

  return (
    <Container>
      <input
        value={input}
        onChange={onChange}
        placeholder={"Enter a value here and we'll make it URL safe 🎉"}
      />
      <Text>{slug(input)}</Text>
    </Container>
  )
}
