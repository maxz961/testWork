import React from 'react'
import {connect} from 'react-redux'

const SearchPanel = ({handleSearchInputBool, handleSearchStartAnimation, isSearchBool}) => {

    const handleSearchFunc = (boolean) => {
        handleSearchInputBool(boolean)
        handleSearchStartAnimation(true)
    }

    return (
        <div className='search NavMobile__search'>
            <div className='search__elements is-panel'>
                <div 
                className={`search__icon is-panel ${isSearchBool && 'search__opacity'}`}  
                title='поиск' 
                onClick={() => handleSearchFunc(true)}>
                    <i className="material-icons is-panel">
                        search
                    </i>
                </div>

                <div className='search__icon search__desktop'>
                    <i className="material-icons">
                        add_circle
                    </i>
                </div>
                
            </div>   
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isSearchBool: state.isSearchBool
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

        handleSearchStartAnimation: (boolean) => {
            dispatch({
                type: 'STARTANIMATION_CHANGE',
                boolean
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPanel)