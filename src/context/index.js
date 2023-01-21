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

function AppContextProvider({ children }) {
  const [favorites, setFavorites] = useState(movieFromLocalStorage);
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


  const handleToggleSwitch = useCallback(()=>{
    setMovieView(!movieView);
  })

  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(favorites));
  }, [favorites]);
  
  return (
    <AppContext.Provider
      value={{
        favorites,
        handleToggleFavorite,
        movieView,
        handleToggleSwitch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
};
export const useAppContext = () => useContext(AppContext);
export default AppContextProvider