import logo from './logo.svg';

import Navbar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <body className="app">
        <img src={logo} className="App-logo" alt="logo" />
          <ItemListContainer greeting={"Welcome!!"}></ItemListContainer>
      </body>

    </div>
  );
}

export default App;
