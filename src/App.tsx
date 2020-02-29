import { Provider, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import store, { TriviaDispatch } from './redux/store'

import GlobalStyle from './components/GlobalStyle'
import Home from './routes/Home'
import NotFound from './routes/NotFound'
import Quiz from './routes/Quiz'
import Results from './routes/Results'

const Routes = () => {
  const dispatch = useDispatch<TriviaDispatch>()
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  useEffect(() => {
    dispatch.app.fetchQuestions()
  }, [dispatch])

  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </>
  )
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  </Provider>
)

export default App
