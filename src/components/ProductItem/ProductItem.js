import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    onDelete = (id) =>{
        //console.log(id);
        if(confirm('do you want to delete ?')){  //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render(){
        var {product,index} = this.props;
        var statusName = product.status ? 'Available' : 'Sold out';
        var statusClass = product.status ? 'warning' : 'secondary';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                <Link to={`/products/${product.id}/edit`} className="btn btn-success mr-2 btn-sm" >Edit</Link>
                <button type="button" className="btn btn-danger btn-sm" onClick={()=> this.onDelete(product.id)}>Delete</button>
                </td>
            </tr>
            
        );
    }
	
}

export default ProductItem;
