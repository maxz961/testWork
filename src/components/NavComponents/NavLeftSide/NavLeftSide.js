import React, {useState} from 'react'
import SearchPanel from './SearchPanel'
import InputSearch from './InputSearch'
import logoDesktop from '../../../assets/icons/logo.svg'
import logoMobile from '../../../assets/icons/logoMobile.svg'
import menuMobile from '../../../assets/icons/menuMobile.svg'

const NavLeftSide = () => {
    const [items] = useState(['Ссылки', 'Контакты', 'Теги', 'Просьбы', 'Избранное', 'Посещения'])

    return (
        <div className='nav__left'>
            <div className='nav__wrapperLogo'>
                <div className='nav__iconMenu'>
                    <img src={menuMobile} alt='menu' />
                </div>

                <div className='nav__logo'>
                    <img className='nav__logoDesktop' src={logoDesktop} alt='logo' />
                    <img className='nav__logoMobile' src={logoMobile} alt='logo' />
                </div>
            </div>

            <div className='nav__wrapper'>
                <div className='nav__list nav__desktop'>
                    {items.map(item => {
                    return <div key={item} className='nav__item'>
                                <div className='nav__text'>
                                    {item}
                                    {item !== 'Контакты' && <i className="material-icons">
                                        arrow_drop_down
                                    </i>}
                                </div>
                            </div>
                        })
                    }
                </div>
                <InputSearch />
                <SearchPanel />
            </div>
        </div>       
    )
}

export default NavLeftSide