import './Header.scss';

export const Header = () => {
    return (
        <header className='app-header'>
            <h1 className='app-header__name'>Justas Dovydaitis</h1>
            <div className='app-header__titles'>
                <small className='app-header__title'>Developer</small>
                <span className='app-header__title-spacer'></span>
                <small className='app-header__title'>
                    Motorcycle enthusiast
                </small>
                <span className='app-header__title-spacer'></span>
                <small className='app-header__title'>Music lover</small>
            </div>
        </header>
    );
};
