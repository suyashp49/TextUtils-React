import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
    
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div class={`mx-2 form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
         <input class="form-check-input" onClick={props.redMode} type="checkbox" role="switch" id="AAA"/>
         <label class="form-check-label" htmlFor="AAA">{props.Red}</label>
      </div>
      <div class={`mx-2 form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
         <input class="form-check-input" onClick={props.yellowMode} type="checkbox" role="switch" id="BBB"/>
         <label class="form-check-label" htmlFor="BBB">{props.Yellow}</label>
      </div>
      <div class={`mx-2 form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
         <input class="form-check-input" onClick={props.greenMode} type="checkbox" role="switch" id="CCC"/>
         <label class="form-check-label" htmlFor="CCC">{props.Green}</label>
      </div>
       <div class={`mx-2 form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
         <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label class="form-check-label" htmlFor="flexSwitchCheckDefault">{props.radioText}</label>
      </div>
    </div>
  </div>
</nav>
    )
}
