import React, { useState } from 'react'

import Home from './Home'
import Login from './Login'
import LoadingPage from './LoadingPage'
import Header from '../components/Header'
import SavedDatabase from './SavedDatabase'
import SettingsPage from './SettingsPage'
import Upload from './Upload'
import NotificationPage from './NotificationPage'


export default function Main() {
    const [page, currentPage] = useState(-1)


    function navigatePage(num) {
        currentPage(num)
    }

    if (page === -2) {
        return (
            <LoadingPage navigatePage={(num) => navigatePage(num)} />
        )
    }

    if (page === -1) {
        return (
            <Login navigatePage={(num) => navigatePage(num)} />
        )
    }

    if (page === 0) {
        return (<>
            <Header navigatePage={(num) => navigatePage(num)} />
            <Home navigatePage={(num) => navigatePage(num)} />
           
        </>
        )
    } else if (page == 1){
        return(
            <>
            <Header navigatePage={(num) => navigatePage(num)} />
            <SavedDatabase navigatePage={(num) => navigatePage(num)} />
            </>
        )
    } else if (page == 2){
        return(
            <>
            <Header navigatePage={(num) => navigatePage(num)} />
            <Upload navigatePage={(num) => navigatePage(num)} />
            </>
        )
    }
    else if (page == 3){
        return(
            <>
            <Header navigatePage={(num) => navigatePage(num)} />
            <SettingsPage navigatePage={(num) => navigatePage(num)} />
            </>
        )
    }
    else if (page == 4){
        return(
            <>
            <Header navigatePage={(num) => navigatePage(num)} />
            <NotificationPage navigatePage={(num) => navigatePage(num)} />
            </>
        )
    }
    
}

