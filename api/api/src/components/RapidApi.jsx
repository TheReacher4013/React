import React, { useEffect, useState } from "react";
import axios from "axios";
const RapidApi = () => {
    //   loading, error, filters, movies
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        limit: "20",
        page: "1",
        quality: "all",
        genre: "all",
        minimum_rating: "8",
        query_term: "0",
        sort_by: "date_added",
        order_by: "asc",
        with_rt_ratings: "false",
    });

    const apiConfig = {
        method: "GET",
        url: "https://movie-database-api1.p.rapidapi.com/list_movies.json",
        params: filters,
        headers: {
            "x-rapidapi-key": import.meta.env.VITE_API_KEY,
            "x-rapidapi-host": import.meta.env.VITE_API_HOST,
        },
    };

    const fetchMovies = async () => {
        try {
            const response = await axios.request(apiConfig);
            // check if reponse data or error
            if (response.data) {
                console.log(response.data);
                console.log(response.data.data.movies);
                setMovies(response.data.data.movies);
            } else {
                throw new Error("invalid reponse structure");
            }
        } catch (error) {
            console.log("API Error: ", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    //  user change filter and recall out api with new data
    const handleFilterChange = (key, value) => {
        // console.log(e);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    //  updating stage
    // useEffect(() => {
    //   fetchMovies();
    // }, [filters]);

    if (loading) return <h2>LOADING.......</h2>;

    if (error) return <h2>error check console</h2>;
    console.log("filters ", filters);
    return (
        <>
            <div className="my-14 px-20">
                <select
                    value={filters.genre}
                    onChange={(event) => handleFilterChange(event)}>
                    <option value="all">ALL</option>
                    <option value="action">Action</option>
                </select>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 min-h-screen">
                {movies &&
                    movies.map((movie) => (
                        <div
                            key={movie.id}
                            className=" shadow-lg p-4 rounded-2xl">
                            <h2>{movie.title}</h2>
                        </div>
                    ))}
            </section>
        </>
    );
};

export default RapidApi;