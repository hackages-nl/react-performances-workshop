import React, {ChangeEvent} from 'react'
import {SimpleContainer} from '../../shared/SimpleContainer'
import {Input} from '../../shared/Input'
import {Text} from '../../shared/Text'
import {Emojis} from '../../shared/Emojis'
import {range} from './utils'

function RandomEmoji () {
  const emojis = ['💩', '🎉', '🦄', '🍔', '💅', '⚡️', '🔥', '🤦‍', '🤮', '🤓', '🍆']
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  return <Emojis onClick={() => alert('Hello, world!')}>{emoji}</Emojis>
}

export function PureComponents () {
  const [state, setState] = React.useState({
    elapsed: 0,
    input: '',
  });

  const onChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) =>
    setState({
      ...state,
      input: value,
    })

  React.useEffect(() => {
    setInterval(() => {
      setState(state => ({
        ...state,
        elapsed: state.elapsed + 1,
      }));
    }, 10);
  }, []);

  return (
    <SimpleContainer>
      <Input
        label="Enter some value"
        value={state.input}
        onChange={onChange}
      />
      <Text>
        Here's your text in reverse <Emojis>😱</Emojis>
      </Text>
      <Text reversed>{state.input}</Text>
      <Text>{state.elapsed}</Text>
      {range(5000).map((_, index) => <RandomEmoji key={index} />)}
    </SimpleContainer>
  )
}
