// import React from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-light mb-3">
// 			<Link to="/">
// 				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 			</Link>
// 			<div className="ml-auto">
// 				<Link to="/demo">
// 					<button className="btn btn-primary">Check the Context in action</button>
// 				</Link>
// 			</div>
// 		</nav>
// 	);
// };


import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src="/path-to-star-wars-logo.png" width="30" height="30" alt="Star Wars" />
            </a>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Favorites {store.favorites.length}
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    {store.favorites.length > 0 ? (
                        store.favorites.map((item, index) => (
                            <div key={index} className="dropdown-item">
                                {item.name}
                                <button className="btn btn-danger btn-sm ml-2" onClick={() => actions.removeFavorite(item.name)}>Remove</button>
                            </div>
                        ))
                    ) : (
                        <div className="dropdown-item">No favorites added</div>
                    )}
                </div>
            </div>
        </nav>
    );
};
