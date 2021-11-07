// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



function App() {

   
  const [mode, setMode] = useState('light');
  const [radioText,setRadioText] = useState('Enable DarkMode');
  const [Red,setRed] = useState('Enable Red Mode');
  const [Yellow,setYellow] = useState('Enable Yellow Mode');
  const [Green,setGreen] = useState('Enable Green Mode');

  const [alert,setAlert] = useState(null);


  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  
  const toggleMode = ()=>{
    if(mode ==='light')
    {
      setMode('dark');
      setRadioText('Disable DarkMode');
      document.body.style.backgroundColor = '#3b5274';
      showAlert("Dark mode Enabled","success");
    }
    else{
      setMode('light');
      setRadioText('Enable DarkMode');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode Diabled","success");

    }
  }
  
  const redMode = ()=>{
    if(mode ==='light')
    {
      setMode('dark');
      setRed('Disable Red Mode');
      document.body.style.backgroundColor = 'red';
      showAlert("Red mode Enabled","success");
    }
    else{
      setMode('light');
      setRed('Enable Red Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Red mode Diabled","success");

    }

  }

  const yellowMode = ()=>{
    if(mode ==='light')
    {
      setMode('dark');
      setYellow('Disable Yellow Mode');
      document.body.style.backgroundColor = 'yellow';
      showAlert("Yellow mode Enabled","success");
    }
    else{
      setMode('light');
      setYellow('Enable Yellow Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Yellow mode Diabled","success");

    }

  }

  const greenMode = ()=>{
    if(mode ==='light')
    {
      setMode('dark');
      setGreen('Disable Green Mode');
      document.body.style.backgroundColor = 'green';
      showAlert("Green mode Enabled","success");
    }
    else{
      setMode('light');
      setGreen('Enable Green Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Green mode Diabled","success");

    }

  }


  return (
    <>
    {/* <Router> */}
       <Navbar title="TextUtils" about="about by js" mode={mode} toggleMode={toggleMode} redMode={redMode} yellowMode={yellowMode} greenMode={greenMode} Red={Red} Yellow={Yellow} Green={Green} radioText={radioText} />
       <Alert alert={alert}/>
       {/* <Switch>
          <Route path="/about">
              <div className="container my-3">
               <About/>
             </div>        
          </Route>
          <Route path="/"> */}
             <TextForm heading="Enter text here" mode={mode} showAlert={showAlert}/>  
          {/* </Route>
        </Switch>
    </Router> */}
    </>
  );
}

export default App;
