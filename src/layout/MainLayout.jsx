import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'

export default function MainLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
