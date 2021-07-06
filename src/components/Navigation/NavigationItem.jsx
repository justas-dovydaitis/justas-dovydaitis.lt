import { Link } from 'react-router-dom';
import './Navigation.scss';

export const NavigationItem = (props) => {
    return (
        <li className='navigation__item'>
            <Link className='navigation__link' to={props.to}>
                {props.children}
            </Link>
        </li>
    );
};
