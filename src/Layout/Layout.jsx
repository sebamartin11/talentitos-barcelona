import React from 'react'
import Spinner from '../Components/Spinner/Spinner'

const Layout = ({children}) => {

    return (
        <>
            <Spinner/>
            {children}
        </>
    )
}

export default Layout