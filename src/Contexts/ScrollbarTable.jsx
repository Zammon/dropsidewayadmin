import React, { useState } from "react";

export const ScrollbarTable = React.createContext();

export default function ScrollbarTableProvider({children}) {
    const [scrollPosts, setScrollPosts] = useState();
    const [scrollAccouts, setScrollAccouts] = useState();

    return(
        <ScrollbarTable.Provider
        value={{
             scrollPosts, setScrollPosts,
             scrollAccouts, setScrollAccouts,
        }}>
            {children}
        </ScrollbarTable.Provider>
    )
} 