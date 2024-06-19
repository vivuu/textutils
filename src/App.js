import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/about" element={
            <>
            <Navbar title="Vsams"></Navbar>
            <About/>
            </>} />
          <Route exact path="/" element={<>
            <Navbar title="Vsams"></Navbar>
            <div className="container">
              <TextForm heading="TextArea"></TextForm>
            </div>
            </>} />
          {/* <Route path="/about">
            <Navbar title="Vsams"></Navbar>
          </Route>
          <Route path="/">
            <Navbar title="Vsams"></Navbar>
            <TextForm heading="TextArea"></TextForm>
          </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
