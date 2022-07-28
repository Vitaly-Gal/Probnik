import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import HomePage from './pages/home-page/home-page'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
