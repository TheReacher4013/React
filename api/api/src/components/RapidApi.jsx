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

        // page: '1',
        // size: '10',
        // search: 'Fullmetal',
        // genres: 'Fantasy,Drama',
        // sortBy: 'ranking',
        // sortOrder: 'asc'
    });

    const apiConfig = {
        method: "GET",
        url: "https://movie-database-api1.p.rapidapi.com/list_movies.json",
        params: filters,
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_API_KEY,
            'x-rapidapi-host': import.meta.env.VITE_API_HOST,
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
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    //  updating stage
    useEffect(() => {
        fetchMovies();
    }, [filters]);

    if (loading) return <h2>LOADING.......</h2>;

    if (error) return <h2>error check console</h2>;
    console.log("filters ", filters);
    return (
        <>
            <div className="my-14 px-20">
                <select
                    value={filters.genre}
                    onChange={(event) => handleFilterChange("genres", event.target.value)}>
                    <option value="all">ALL</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                </select>

                {/* //for quality check */}

                <select
                    value={filters.quality}
                    onChange={(event) =>
                        handleFilterChange("quality", event.target.value)
                    }>
                    <option value="all">All Quality</option>
                    <option value="720">720</option>
                    <option value="1080p">1080p</option>
                    <option value="2160p">2160p</option>
                    <option value="3D">3D</option>
                </select>


                {/* //Rating select  */}
                <select
                    value={filters.minimum_rating}
                    onChange={(event) =>
                        handleFilterChange("minimum_rating", event.target.value)
                    }>
                    <option value="0">All Rating</option>
                    <option value="5">5+</option>
                    <option value="7">7+</option>
                    <option value="8">8+</option>
                    <option value="9">9+</option>
                </select>

                {/* <input onChange={}/> */}
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



