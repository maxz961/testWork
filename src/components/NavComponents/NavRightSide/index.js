import React from 'react'
import { connect } from 'react-redux'
import userIcon from '../../../assets/icons/userIcon.png'

const NavRightSide = ({isSearchBool}) => {
    return (
        <React.Fragment>
            <div className='nav__right nav__desktop'>
                <div className='nav__rightElements'>
                    <div className='nav__icon'>
                        <i className="material-icons">
                            email
                        </i>
                    </div>
                    <div className='nav__icon'>
                        <div className='nav__natification' >
                            18
                        </div>
                        <i className="material-icons">
                            notification_important
                        </i>
                    </div>
                    <div className='nav__icon'>
                        <div className='nav__wrapperImg'>
                            <img className='nav__img' src='https://i.pinimg.com/originals/79/75/86/797586ded43341c9e663d7780e600c30.png' alt='img' />
                        </div>
                    </div>
                </div> 
            </div>

           {!isSearchBool && <div className='nav__right nav__mobile'>
                <div className='nav__rightElements'>
                    <div className='nav__icon'>
                        <i className="material-icons">
                            email
                        </i>
                    </div>
                    <div className='nav__icon'>
                        <div className='nav__natification' >
                            18
                        </div>
                        <i className="material-icons">
                            notification_important
                        </i>
                    </div>
                    <div className='nav__icon'>
                        <div className='nav__wrapperImg'>
                            <img className='nav__img' src={userIcon} alt='img' />
                        </div>
                    </div>
                </div> 
            </div>}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        isSearchBool: state.isSearchBool
    }
}

export default connect(mapStateToProps)(NavRightSide)