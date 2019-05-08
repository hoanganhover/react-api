import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';

const menus = [
    {
        name :'Home',
        to:'/',
        exact: true
    },
    {
        name :'Products Manager',
        to:'/products-list',
        exact: false
    }
];
const MenuLink = ({label, to, activeOnlyWhenExact}) =>{
    return(
        <Route
            path ={to}
            exact = {activeOnlyWhenExact}
            children ={({match}) =>{
                var active = match ? 'active' : '';
                return (
                    <li className={`nav-item ${active}`}>
                        <Link to={to} className="nav-link">{label}</Link>
                    </li>
                );
            }}
        >

        </Route>
    )
}

class Menu extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="!#">API</a>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav">
                            {this.showMenus(menus)}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    showMenus = (menus) =>{
        var result = null;
            if(menus.length > 0){
                result= menus.map((menu,index)=>{
                    return(
                        <MenuLink 
                        key={index} 
                        label={menu.name} 
                        to={menu.to} 
                        activeOnlyWhenExact={menu.exact}>
                        </MenuLink>
                    )
                })
            }
        return result;
    }
}

export default Menu;
