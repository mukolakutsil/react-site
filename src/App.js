import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contacts from './Pages/Contacts';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>

      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/blog" component={Blog} />
      </Switch>

    </BrowserRouter>

  );
}

export default App;
