import React,{Component} from 'react';

class Product extends Component{
    render(){
        let match = this.props.match;
        let name = match.params.name;
        return(
            <div>
                  <h1>this is product {name}</h1>
            </div>
        )
    }
}

export default Product;