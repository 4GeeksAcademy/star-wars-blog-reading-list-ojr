// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const Single = props => {
// 	const { store, actions } = useContext(Context);
// 	const params = useParams();
// 	return (
// 		<div className="jumbotron">
// 			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

// 			<hr className="my-4" />

// 			<Link to="/">
// 				<span className="btn btn-primary btn-lg" href="#" role="button">
// 					Back home
// 				</span>
// 			</Link>
// 		</div>
// 	);
// };

// Single.propTypes = {
// 	match: PropTypes.object
// };


import React, { useEffect, useState } from 'react';
import '../../styles/demo.css';

export const Single = ({ match }) => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/?search=${match.params.name}`)
            .then(res => res.json())
            .then(data => setCharacter(data.results[0]))
            .catch(err => console.error(err));
    }, [match.params.name]);

    return character ? (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://via.placeholder.com/800x600" alt={character.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{character.name}</h1>
                    <p>Gender: {character.gender}</p>
                    <p>Birth Year: {character.birth_year}</p>
                    <p>Height: {character.height}</p>
                    <p>Skin Color: {character.skin_color}</p>
                    <p>Eye Color: {character.eye_color}</p>
                </div>
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
};
