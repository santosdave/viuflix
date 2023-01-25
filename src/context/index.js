import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
}
  from 'react'

const AppContext = createContext(null);

const movieFromLocalStorage = JSON.parse(localStorage.getItem('movie') || '[]');
const tvFromLocalStorage = JSON.parse(localStorage.getItem('tv') || '[]');

function AppContextProvider({ children }) {
  const [favorites, setFavorites] = useState(movieFromLocalStorage);
  const [tvFavorites, setTvFavorites] = useState(tvFromLocalStorage);
  const [search, setSearch] = useState(false);
  const [movieView, setMovieView] = useState(false);

  const handleToggleFavorite = useCallback(
    (movie) => {
      const exist = favorites.find((favMovie) => favMovie.id === movie.id);

      if (!exist) {
        setFavorites([...favorites, movie]);
      } else {
        const newItems = favorites.filter(
          (favMovie) => favMovie.id !== movie.id
        );
        setFavorites(newItems);
      }
    },
    [favorites]
  );

  const handleToggleTvFavorite = useCallback(
    (tv) => {
      const exist = tvFavorites.find((favTv) => favTv.id === tv.id);
      if (!exist) {
        setTvFavorites([...tvFavorites, tv]);
      } else {
        const newItems = tvFavorites.filter(
          (favTv) => favTv.id !== tv.id
        );
        setTvFavorites(newItems);
      }
    },
    [tvFavorites]
  );

  const handleClearFavorites =  useCallback(() => {
    localStorage.removeItem('movie');
    setFavorites([]);
    console.log('Clear favorites')
  });

  const handleClearTvFavorites =  useCallback(() => {
    localStorage.removeItem('tv');
    setTvFavorites([]);
    console.log('Clear tv favorites')
  });


  const handleToggleSwitch = useCallback(() => {
    setMovieView(!movieView);
  })

  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(favorites));
    localStorage.setItem("tv", JSON.stringify(tvFavorites));
  }, [favorites]);

  return (
    <AppContext.Provider
      value={{
        favorites,
        tvFavorites,
        handleToggleFavorite,
        movieView,
        handleToggleSwitch,
        handleToggleTvFavorite,
        handleClearFavorites,
        handleClearTvFavorites
      }}
    >
      {children}
    </AppContext.Provider>
  )
};
export const useAppContext = () => useContext(AppContext);
export default AppContextProvider