import Logo from './home-solid.png'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Home} from './components/Home'
import {Apartment} from './components/Apartment'
import {Attractions} from './components/Attractions'
import {Pricing} from './components/Pricing'
import {Contact} from './components/Contact'
import {Booking} from './components/Booking'
import {NotFound} from './components/NotFound'
import {Header} from'./components/Header'

const NavItems = [
  {"name" : "Home", "link" : "/"},
  {"name" : "Apartment", "link" : "/apartment"},
  {"name" : "Attractions", "link" : "/attractions"},
  {"name" : "Pricing", "link" : "/pricing"},
  {"name" : "Contact", "link" : "/contact"},
  {"name" : "Booking", "link" : "/booking"},
]
function App() { 
  return (
    <div className="website">
      <Header logo={Logo} nav={NavItems} />
      <main className="content">
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
            </Route>
            <Route path="/apartment">
            <Apartment />            
          </Route>
          <Route path="/attractions">
            <Attractions />
          </Route>                
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
