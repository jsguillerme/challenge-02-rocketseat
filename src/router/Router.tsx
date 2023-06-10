import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { SucessPage } from '../pages/SuccessPage'
import { HeaderComponent } from '../components/Header'

export function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderComponent />}>
          <Route path="/" element={<Navigate to={'/home'} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<SucessPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
