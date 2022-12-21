import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ProductDetail from './components/ProductDetail'
import ProductsList from './components/ProductsList'
import { routes } from './routes/routes'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </div>
  )
}

export default App
