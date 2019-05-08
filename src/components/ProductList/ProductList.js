import React,{Component} from 'react';
//import ProductItem from './../ProductItem/ProductItem'

class ProductList extends Component {
    render(){
        return (
            <div className="card">
                <div className="card-header">Product List</div>
                <div className="card-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>ID Product</th>
                                <th>Name </th>
                                <th>Price </th>
                                <th>Status </th>
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>			
        );
    }
	
}

export default ProductList;
