import './Navigation.scss';

export const Navigation = (props) => {
    return (
        <nav className='navigation'>
            <ul className='navigation__items'>{props.children}</ul>
        </nav>
    );
};
