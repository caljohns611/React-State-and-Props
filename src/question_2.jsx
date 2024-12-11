import React, { useState } from 'react';

const MoviesLists = () => {
    const [movies, setMovies] = useState([
        { title: 'Shrek', description: 'An ogre named Shrek who is forced to rescue a princess from a dragon in order to save his swamp from fairytale creatures.', genre: 'Adventure' },
        { title: 'The Dark Knight', description: 'Batman faces the Joker in this action-packed thriller.', genre: 'Action'},
        { title: 'Ready PLayer One', description: 'The late James Halliday, the creator of the OASIS, leaves his fortune and control of the game to the first person to find a hidden Easter egg. Wade Watts, a shy teenager, joins the contest and becomes an unlikely hero in a dangerous treasure hunt.', genre: 'Sci-Fi' },
    ]);

    const [toggleMovieIndex, setToggleMovieIndex] = useState(null);
    cnst [filterGenre, setFilterGenre] = useState('All');

    const toggleDetails = (index) => {
        if (toggleMovieIndex === index) {
            setToggleMovieIndex(null);
        } else {
            setToggleMovieIndex(index);
        }
    };

    const removeMovie = (index) => {
        setMovies(preMovies => preMovies.filter((_, i) => i !== index));
    };

    const toggleGenre = () => {
        setFilterGenre(prevGenre => (prevGenre === 'All' ? 'Action' : 'All'));
    };

    const filteredMovies = filterGenre === 'All' ? movies : movies.filter(movie => movie.genre === 'Action');

    return (
        <div>
            <button onClick={toggleGenre}>
                {filterGenre === 'All' ? 'Show Action Movies' : ' Show All Movies'}
            </button>

            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <h3 onClick={() => toggleDetails(index)}>
                            {movie.title}
                            <button onClick={(e) => {
                                e.stopPropagation();
                                removeMovie(index);
                            }}>
                                Remove
                            </button>
                        </h3>
                        {toggleMovieIndex === index && (
                            <p>{movie.description}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesLists;