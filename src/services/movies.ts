export interface GetMoviesResponse {
  id: string,
  title: string
  imageUrl: string
}

export function MovieService() {
  function getMovies(): Promise<GetMoviesResponse[]> {
    return fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWZjMTY2MTVmM2UzYmQ1ODg4ZDdmNDQyZDgyNjBiYSIsInN1YiI6IjY1MjRjZjlmZmQ2MzAwMDEzOWU1MWRhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s5WThE0k2x16zJIN45RtvinFGuUxhRLxNurzyo62WQI'
        }
      }
    )
      .then((response) => response.json())
      .then((response) =>
        response.results.map(
          (item: { id: string; title: string; backdrop_path: string }) => ({
            id: item.id,
            title: item.title,
            imageUrl: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
          })
        )
      )
  }

  return {
    getMovies
  }
}
