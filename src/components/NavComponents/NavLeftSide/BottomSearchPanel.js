import React, { Component } from 'react'

class BottomSearchPanel extends Component {
    state = {
        isCheckedMy: false,
        isCheckedMember: false,
        isCheckedHeader: false,
        isCheckedInContact: false,
        isCheckedSimplySearch: false
    }

    handleCheckedBox = (Name) => {
        this.setState({
            [Name]: !this.state[Name]
        })
    }

    render() {
        const {isCheckedMy, isCheckedMember, isCheckedHeader, isCheckedSimplySearch, isCheckedInContact} = this.state
        return (
            <div className='bottomSearch is-panel'>
                <div className='bottomSearch__header is-panel'>
                    <label className="bottomSearch__container is-panel">
                        <input className="is-panel" type="checkbox" checked={isCheckedMy} onChange={() => this.handleCheckedBox('isCheckedMy')} />
                        <div className='bottomSearch__text  is-panel'>мои</div>
                        <div className="bottomSearch__checkmark is-panel" />
                    </label>
                    <input className='bottomSearch__input is-panel' placeholder='Автор' />
                </div>

                <div className='bottomSearch__middle is-panel'>
                    <div className='is-panel'>Сортировать по:</div>
                    <select className='is-panel bottomSearch__select'>
                        <option className='is-panel'>дате</option>
                        <option className='is-panel'>релевантности</option>
                    </select>
                </div>

                <div className='bottomSearch__footer is-panel'>
                    <label className="bottomSearch__container is-panel">
                        <input className="is-panel" type="checkbox"  checked={isCheckedMember} onChange={() => this.handleCheckedBox('isCheckedMember')} />
                        <div className='bottomSearch__text--footer is-panel'>я участник</div>
                        <div className="bottomSearch__checkmark is-panel" />
                    </label>

                    <label className="bottomSearch__container is-panel">
                        <input className="is-panel" type="checkbox" checked={isCheckedHeader} onChange={() => this.handleCheckedBox('isCheckedHeader')} />
                        <div className='bottomSearch__text--footer is-panel'>в заголовке</div>
                        <div className="bottomSearch__checkmark is-panel" />
                    </label>

                    <label className="bottomSearch__container bottomSearch__container--mobile is-panel">
                        <input className="is-panel" type="checkbox" checked={isCheckedInContact} onChange={() => this.handleCheckedBox('isCheckedInContact')} />
                        <div className='bottomSearch__text--footer is-panel'>в контактах</div>
                        <div className="bottomSearch__checkmark is-panel" />
                    </label>

                    <label className="bottomSearch__container is-panel">
                        <input className="is-panel" type="checkbox" checked={isCheckedSimplySearch} onChange={() => this.handleCheckedBox('isCheckedSimplySearch')} />
                        <div className='bottomSearch__text--footer is-panel'>строгий поиск</div>
                        <div className="bottomSearch__checkmark is-panel" />
                    </label>
                </div>
            </div>
        )
    }
}

export default BottomSearchPanel