import Navbar from "./Navbar"
import Reviews from "./pages/reviews"
import Home from "./pages/home"
import Menu from "./pages/menu"

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/reviews":
      component = <Reviews />
      break
    case "/menu":
      component = <Menu />
      break
  }
  return (<>
    <Navbar />
    <div className="container">
      {component}
    </div>
    </>
  )
}

export default App
