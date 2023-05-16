import React, {  useState } from "react"

export const ShowImageContext = React.createContext();

export default function ShowImageContextProvider({children}) {
    const [showImage, setShowImage] = useState(true);
    const [image, setImage] = useState('');
    return(
        <ShowImageContext.Provider
        value={{
            showImage, setShowImage,
            image, setImage,
        }}
        >
            {children}
        </ShowImageContext.Provider>
    )
}