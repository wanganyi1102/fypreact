import React, { Component } from 'react';

// stateless functional component
const NavBar = ({ total_counters }) => {
        return (
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Style Drawing App 
                    </a>
                    
                </div>
            </nav>

        )
};
 //{this.props.total_counters}
export default NavBar;