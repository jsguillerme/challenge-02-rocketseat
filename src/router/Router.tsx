import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { SucessPage } from '../pages/SuccessPage'

export function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<SucessPage />} />
      </Routes>
    </Router>
  )
}
