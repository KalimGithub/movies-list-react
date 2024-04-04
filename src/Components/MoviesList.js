import React from 'react'

const MoviesList = () => {
    const movies = [ { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 }, { title: 'The Godfather', genre: 'Crime', year: 1972 }, { title: 'The Dark Knight', genre: 'Action', year: 2008 }, { title: '12 Angry Men', genre: 'Drama', year: 1957 }, { title: 'Schindler', genre: 'Drama', year: 1993 }, { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003 }, { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 }, { title: 'Forrest Gump', genre: 'Drama', year: 1994 }, { title: 'Inception', genre: 'Science Fiction', year: 2010 }, { title: 'The Matrix', genre: 'Science Fiction', year: 1999 }, { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 }, { title: 'Saving Private Ryan', genre: 'War', year: 1998 }, { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 }, { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 }, { title: 'The Lion King', genre: 'Animation', year: 1994 } ];

        return (
                <div className='movie-list'>
                    <h1>Top 15 Movies of All time</h1>
                    <div className='filter-div'>
                        <h2>Filter by Genre</h2>
                        <div className='btns'>
                            <button>Drama</button>
                            <button>crime</button>
                            <button>Action</button>
                            <button>Fanatasy</button>
                            <button>Western</button>
                            <button>Scifi</button>
                            <button>Thriller</button>
                            <button>War</button>
                            <button>Animation</button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th id='title-td'>Title</th>
                                <th id='genre-td'>Genre</th>
                                <th id='year-td'>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map( ()=> {
                                    return(
                                        <tr>
                                            <td>Godfather</td>
                                            <td>crime</td>
                                            <td>1972</td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              )
}

export default MoviesList