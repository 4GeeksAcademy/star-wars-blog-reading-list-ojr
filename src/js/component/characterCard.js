import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const CharacterCard = ({ character }) => {
    const { store, actions } = useContext(Context);

    const isFavorite = store.favorites.some(fav => fav.name === character.name);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="character" />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                    Gender: {character.gender}<br />
                    Hair Color: {character.hair_color}<br />
                    Eye Color: {character.eye_color}
                </p>
                <a href={`/character/${character.name}`} className="btn btn-primary">Learn more!</a>
                <button className="btn btn-outline-warning ml-2" onClick={() => {
                    isFavorite ? actions.removeFavorite(character.name) : actions.addFavorite(character);
                }}>
                    {isFavorite ? "♥" : "♡"}
                </button>
            </div>
        </div>
    );
};
