import { createContext, useState, useContext } from "react";

export const FavoritesContext = createContext();

FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({children}) {
    const [favorite, setFavorite] = useState([]);

    return <FavoritesContext.Provider value={{favorite, setFavorite}} >
        {children}
    </FavoritesContext.Provider>
};

export function useFavoritesContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {

        const repeateds = favorite.some(
            item => item.id === newFavorite.id
        );
        let newList = [...favorite];

        if ( !repeateds ) {
            newList.push(newFavorite);
            return setFavorite(newList);
        };

        newList = favorite.filter(item => item.id !== newFavorite.id);
        return setFavorite(newList);
    };

    return { favorite, addFavorite };
};