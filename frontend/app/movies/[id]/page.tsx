import React from "react";

type Params = {
  id: string;
};

const getMovie = async (id: string) => {
  const movie = await fetch(`http://localhost:4000/v1/movie/${id}`).then(
    (res) => {
      if (!res.ok) {
        return "";
      }
      return res.json();
    }
  );
  return movie;
};

const page = async ({ params }: { params: Params }) => {
  const data = await getMovie(params.id);
  const movie: Movie = data.movie;

  console.log(movie.genres);

  return (
    <>
      <div>
        <div className="flex text-2xl font-bold">
          <p>Movie：</p>
          <p>{movie.title}</p>
        </div>
        <div>
          <div className="flex">
            <p>Rating：</p>
            <p>{movie.rating}</p>
          </div>
          <div>{}</div>
        </div>
      </div>
      <div className="border-l-2 border-gray-600">
        <div className="flex bg-gray-200 pl-2">
          <p className="font-bold">Title：</p>
          <p className="">{movie.title}</p>
        </div>
        <div className="flex pl-2">
          <p className="font-bold">Description：</p>
          <p>{movie.description}</p>
        </div>
        <div className="flex bg-gray-200 pl-2">
          <p className="font-bold">Run Time：</p>
          <p>{movie.runtime}</p>
        </div>
      </div>
    </>
  );
};

export default page;
