import React, { useRef} from 'react';

import classes from './AddMovie.module.css';

export const AddMovie = (props) => {

    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('') 

    const submitHandler = (event) => {
        event.preventDefault();
    
    const movie = {
        title: titleRef.current.value,
        openingText: openingTextRef.current.value,
        releaseDate: releaseDateRef.current.value
    }
        props.onAddMovie(movie);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id="title" ref={titleRef} />
            </div>
            <div className={classes.control}>    
                <label htmlFor='opening-text'>Opening_crawl</label>
                    <textarea rows='5' type='text' id="opening_text" ref={openingTextRef}></textarea>
                
            </div>
            <div className={classes.control}>    
                <label htmlFor='date'>Release_date</label>
                    <input type='date' id="date" ref={releaseDateRef} />
                
            </div>
                <button>Add Movie</button>
        </form>
       
    )
}

export default AddMovie;
