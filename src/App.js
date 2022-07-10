import SideBar from './Components/SideBar';
import './App.css';
import Header from './Components/Header';
import Contenu from './Components/Contenu';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './Components/Home';


function App() {
  return (
    <div className='App'>


      <BrowserRouter>
        <SideBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/client" element={<Contenu />} />

        </Routes>
      </BrowserRouter>


    </div>

  )
}

export default App;
