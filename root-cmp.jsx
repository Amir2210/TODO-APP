const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { Todoindex } from './views/TodoIndex.jsx'
import { HomePage } from './views/HomePage.jsx'
import { store } from './store/store.js'
import { AppHeader } from './cmps/Appheader.jsx'

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <section className='main-layout app'>
            <AppHeader />
            <main>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/todos' element={<Todoindex />} />
              </Routes>
            </main>
          </section>
        </Router>
      </Provider>
    )
  }
}
