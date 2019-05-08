import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {actAddProductRequest,actGetProductRequest,acUpdateProductRequest} from './../../actions/index';
import {connect} from 'react-redux';




class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:'',
            txtName: '',
            txtPrice: '',
            chkStatus:''
        }
    }
    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id= match.params.id;
            this.props.onEditProduct(id); 
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing ){
            var {itemEditing} = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName : itemEditing.name,
                txtPrice : itemEditing.price,
                chkStatus :itemEditing.status
            })
        }
    }
    onChange = (e) =>{
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }
    onSave = (e) =>{
        e.preventDefault();
        var {history} = this.props;
        var {id,txtName,txtPrice,chkStatus}=this.state;
        var product = {
            id : id,
            name : txtName,
            price : txtPrice,
            status : chkStatus
        }
        if(id){
            //console.log('updaeting');
            this.props.onUpdateProduct(product)
            history.goBack();
        }
        else{
            this.props.onAddProduct(product);
            history.push("/products-list");
        }
        
    }

    render(){
       var {txtName,txtPrice,chkStatus}=this.state;
        return (
            <div className="col-sm-6">
                <form className="pt-5" onSubmit={this.onSave}>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" className="form-control" 
                        name="txtName" 
                        value={txtName}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price</label>
                        <input type="text" className="form-control" 
                            name="txtPrice" 
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="mr-3">Status</label>
                         <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" 
                                name="chkStatus" 
                                value={chkStatus}
                                onChange={this.onChange}
                                checked = {chkStatus}
                                /> available
                            </label>
                        </div>
                    </div>
                    <Link to="/products-list" className="btn btn-light mt-4 mb-3 mr-2"> Back to Products List</Link>
                    <button type="submit" className="btn btn-primary mt-4 mb-3">
                        Save Product
                    </button>
                    
                </form>
            </div>
        );
    }
	
}
const mapStateToProps = state =>{
    return{
        itemEditing : state.itemEditing
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{
        onAddProduct: (product) =>{
            dispatch(actAddProductRequest(product));
        },
        onEditProduct : (id) =>{
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct:(product) =>{
            dispatch(acUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ProductActionPage);
