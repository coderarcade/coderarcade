import React from 'react';
import logo from './logo.png';

function Navbar(props) {
	return(
	<div className="navbar-fixed">
		<nav style={{background:"transparent"}}>
			<div style={{textAlign:"center", width:"100%", height:"30px"}} className="nav-wrapper container">
				{/* refresh the page when clicked */}
				
				
				<a className='brand-logo center' href="/" ><img style={{width:"100px", opacity: "30%", backgroundColor:"#ffffff"}} className="image" src={logo} alt="logo"/></a>
			</div>
		</nav>
	</div>
	)
}
export default Navbar;