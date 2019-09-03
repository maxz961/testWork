import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

import BottomSearchPanel from './BottomSearchPanel'

const InputSearch = ({isSearchBool, handleSearchInputBool, startAnimation, handleSearchBottomBool, bottomSearchPanel}) => {
    const [message, setMessage] = useState('')
    useEffect(() => {
            window.addEventListener('click', handleCloseInputSearch)
            return () => {
                window.removeEventListener('click', handleCloseInputSearch)
            }
        })

    const handleCloseInputSearch = e => {
        if(!e.target.className.includes('is-panel')) {
            handleSearchInputBool(false)
            handleSearchBottomBool(false)
        }
    }


    return (
        <React.Fragment>
                <div className={`inputsearch is-panel NavMobile__input ${isSearchBool ? 'visible' : 'hide'} ${startAnimation && 'start'}`}>
                    <div className={`inputsearch__wrapper`}>
                        <div className='inputsearch__icon is-panel'>
                            <i className="material-icons is-panel">
                                search
                            </i>
                        </div>

                        <div className='inputsearch__clear is-panel' onClick={() => setMessage('')}>
                            <i className="material-icons is-panel">
                                close
                            </i>
                        </div>
                        <input className='inputsearch__input is-panel'
                         value={message} 
                         onChange={e => setMessage(e.target.value)}
                         onClick={() => handleSearchBottomBool(true)}
                          />
                        <button className='inputsearch__btn is-panel' >НАЙТИ</button>
                    </div>
                </div>
                {bottomSearchPanel && <BottomSearchPanel /> }
        </React.Fragment>
    )
}


const mapStateToProps = (state) => {
    return {
        isSearchBool: state.isSearchBool,
        startAnimation: state.startAnimation,
        bottomSearchPanel: state.bottomSearchPanel
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchInputBool: (boolean) => {
            dispatch({
                type: 'INPUTSEARCH_CHANGE',
                boolean
            })
        },
        handleSearchBottomBool: (boolean) => {
            dispatch({
                type: 'SEARCHBOTTOM_CHANGE',
                boolean
            })
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputSearch)