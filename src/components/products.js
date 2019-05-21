import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Product from './product';

class Products extends Component {
    render() {
        let { match } = this.props;
        let products = [
            {
                id: 1,
                name: 'iphone tau',
                slug: 'iphone',
                price: 1000
            },
            {
                id: 2,
                name: 'hawait',
                slug: 'hawait',
                price: 1000
            },
            {
                id: 3,
                name: 'sam sung galaxy s1',
                slug: 'galaxy',
                price: 1000
            }
        ]
        let url = match.url;
        console.log(this.props.location);
        let result = products.map((product, index) => {
            let slug = product.slug;
            return (
                <Link to={`${url}/${slug}`} key={index} >
                    <li className="list-group-item" >
                        {product.id} - {product.name} - {product.price}
                    </li>
                </Link>
            )
        });
        return (
            <div className="container">
                <h1>List products</h1>
                <ul className="list-group" >
                    {result}
                </ul>
                <div className="row">
                <Route path='/products/:name' component={Product} />
                </div>
            </div>

        )
    }
}

export default Products;