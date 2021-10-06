

import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const classBtn = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button"
                    className={`btn ${classBtn}`}
                    key={name}>
                    
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button 
            className="btn btn-light" 
            type="button">
                Все сотрудники
            </button>
            <button 
            className="btn btn-outline-light" 
            type="button">
                На повышение
            </button>
            <button 
            className="btn btn-outline-light" 
            type="button">
                ЗП больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;