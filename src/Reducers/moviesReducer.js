export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return action.movies.movies;
    default:
      return state;
  }
}