import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {

    const [favoritesMealIds, setFavoritesMealIds] = useState([]);

    function addFavorite(id) {
        setFavoritesMealIds((currentFavoriteIds) => {
            return [...currentFavoriteIds, id];
        });
    }

    function removeFavorite(id) {
        setFavoritesMealIds((currentFavoriteIds) => {
            return currentFavoriteIds.filter(mealId => mealId !== id);
        });
    }

    const value = {
        ids: favoritesMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;