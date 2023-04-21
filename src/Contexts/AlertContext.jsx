import React, { useState } from "react";

export const AlertContext = React.createContext();

export const AlertType = Object.freeze({
    Warning: 'warning',
    Alert: 'alert',
    Confirm: 'confirm'
})

export default function AlertContextProvider({children}) {
    //Status for Alter Modal
    const [typeModal, setTypeModal] = useState(AlertType.Confirm);
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('Title Modal');
    const [detailModal, setDetailModal] = useState('Detail Modal');
    //Button in Modal
    const [keepButtonCorrect, setKeepButtonCorrect] = useState([]);

    return(
        <AlertContext.Provider 
            value={{
                typeModal, setTypeModal,
                showModal, setShowModal,
                titleModal, setTitleModal,
                detailModal, setDetailModal,
                keepButtonCorrect, setKeepButtonCorrect,
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}