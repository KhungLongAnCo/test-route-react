import React from 'react';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import NotFound from './components/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;