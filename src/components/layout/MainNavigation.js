import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);


    return (
    <header className={classes.header}>
        <div className={classes.logo}>Gather</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Gatherings</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Setup Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                    My Selection
                    <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header> 
    );
}

export default MainNavigation;