import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menuItems = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    },
    {
        name: 'Products',
        to: '/products',
        exact: false
    },
    {
        name: 'Login',
        to: '/login',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }} />
    )
}
class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenu(menuItems)}
                </ul>
            </nav>

        )
    }
    showMenu = (menuItems) => {
        let result = null
        if (menuItems.length > 0) {
            result = menuItems.map((product, index) => {
                return (
                    <MenuLink label={product.name}
                        to={product.to}
                        key={index}
                        activeOnlyWhenExact={product.exact} />
                )
            })
        }
        return result;
    }
}

export default Menu;