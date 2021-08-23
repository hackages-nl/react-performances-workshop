import React from 'react'
import {BrowserRouter as Routes, NavLink, Route} from 'react-router-dom'
import {Title} from '../../shared/Title'
import {HeaderNav} from './Header'
import {Hero} from './Hero'
import {Stats} from './Stats'
import {Home} from './Home'
import {Contact} from './Contact'
import {Provider} from 'react-redux'
import {store} from './store'
import {Emojis} from '../../shared/Emojis'
import {UrlCreator} from './UrlCreator'
import {PureComponents} from './PureComponents'
import {capitalizeTitle} from './utils'

export const App = () => (
  <Provider store={store}>
    <Routes>
      <div>
        <Hero>
          <Title>
            <Emojis>💩</Emojis>
            {capitalizeTitle('wEb aPP')}
          </Title>
        </Hero>
        <HeaderNav>
          <NavLink exact to="/">
            🏡 Home
          </NavLink>
          <NavLink to="/stats">💅🏻 Cool graphs</NavLink>
          <NavLink to="/contact">📇 Contact form</NavLink>
          <NavLink to="/url-creator">⚡️ Url Safe Links Generator</NavLink>
          <NavLink to="/pure-components">🙏🏻 Pure components</NavLink>
        </HeaderNav>
        <Route exact path="/"><Home/></Route>
        <Route path="/stats"><Stats/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/url-creator"><UrlCreator/></Route>
        <Route path="/pure-components"><PureComponents/></Route>
      </div>
    </Routes>
  </Provider>
);
