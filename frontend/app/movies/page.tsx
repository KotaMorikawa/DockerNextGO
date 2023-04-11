import React from "react";

const page = async () => {
  const data = await fetch("http://localhost:4000/v1/movies").then((res) => {
    if (!res.ok) {
      return [];
    }
    return res.json();
  });
  const movies = data.movies;

  console.log(movies);

  return (
    <>
      <div className="space-y-5">
        {movies.map((movie: Movie) => (
          <div key={movie.id} className="border-l-2 border-gray-600">
            <div className="flex bg-gray-200 pl-2">
              <p className="font-bold">Title：</p>
              <p className="">{movie.title}</p>
            </div>
            <div className="flex pl-2">
              <p className="font-bold">Description：</p>
              <p>{movie.description}</p>
            </div>
            <div className="flex bg-gray-200 pl-2">
              <p className="font-bold">Rate：</p>
              <p>{movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
