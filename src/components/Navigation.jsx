import { Link } from "react-router-dom";
import "./Navigation.css";
export default function Navigation(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{marginTop:"0px"}}>
<div className="container-fluid">
    <Link  className="nav-link active" aria-current="page" to="/" style={{fontWeight:"bolder",fontSize:"30px"}}>JUMIA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link active" aria-current="page" to="/products">Products</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/products">Products</Link></li>
            <li></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
       
      </ul>

    </div>
    
     <div className="buttons">
     <ul className="wrapper">
		<li className="icon facebook">
		  <span className="tooltip">Facebook</span>
		  <i className="fab fa-facebook-f"></i>
		</li>
		<li className="icon twitter">
		  <span className="tooltip">Twitter</span>
		  <i className ="fab fa-twitter"></i>
		</li>
		<li className="icon instagram">
		  <span className="tooltip">Instagram</span>
		  <i className="fab fa-instagram"></i>
		</li>
	  </ul>	  
  </div>

  </div>
</nav>
{/* <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{alignContent:"center"}}/>
      <button type="button" className="btn btn-outline-primary">Search</button>

    </form>
  </div>
</nav> */}
  
        
        </>
    );
}