import './App.css'
import Banner from './components/Banner'
import Categories from './components/Categories'
import CreateSell from './components/create&sell'
import Hero from './components/Hero'
import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <Categories />
      <CreateSell />
    </div>
  )
}
