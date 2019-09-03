import React from 'react'
import NavLeftSide from './NavLeftSide/NavLeftSide'
import NavRightSide from './NavRightSide'
import './Nav.scss'

export const Nav = () => {
    return (
        <div className='nav'>
                <NavLeftSide />
                <NavRightSide />
        </div>
    )
}