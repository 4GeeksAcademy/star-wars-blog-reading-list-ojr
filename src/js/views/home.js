// import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

// export const Home = () => (
// 	<div className="text-center mt-5">
// 		<h1>Hello Rigo!</h1>
// 		<p>
// 			<img src={rigoImage} />
// 		</p>
// 		<a href="#" className="btn btn-success">
// 			If you see this green button, bootstrap is working
// 		</a>
// 	</div>
// );
import React, { useEffect, useState } from 'react';
import { CharacterCard } from '../component/characterCard';
import '../../styles/home.css';  // Ensure the styles are applied

export const Home = () => {
    const [characters, setCharacters] = useState([]);

    // useEffect(() => {
    //     fetch('https://swapi.dev/api/people/')
    //         .then(res => res.json())
    //         .then(data => setCharacters(data.results))
    //         .catch(err => console.error(err));
    // }, []);

	useEffect(() => {
		const sampleData = [
			{ name: 'Luke Skywalker', gender: 'male', hair_color: 'blond', eye_color: 'blue' },
			{ name: 'C-3PO', gender: 'n/a', hair_color: 'n/a', eye_color: 'yellow' },
			// Add more sample characters
		];
		setCharacters(sampleData);
	}, []);
	

    return (
        <div className="container">
            <h1 className="text-danger">Characters</h1>
            <div className="row">
                {characters.map((character, index) => (
                    <div key={index} className="col-md-4">
                        <CharacterCard character={character} />
                    </div>
                ))}
            </div>
        </div>
    );
};
