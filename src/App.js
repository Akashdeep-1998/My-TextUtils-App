import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import Alert from './components/Alert';

const App = () => {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#080808';

      showAlert("Dark mode has been enabled (ᵔ‿ᵔ)", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled (ᵔ︵ᵔ)", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/"
              element={<Textform heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert} />}>
            </Route>
            <Route path="/about" element={<About mode={mode}/>}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

