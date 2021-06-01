import React from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import '../Header/Header.scss'


function Header() {
    return (
        <div className="HeaderContent">
            <div className="Headernav">
                <MenuBookIcon variant="Outlined" />
                <div style={{ border: "1px solid #FCFCFC", background:"#FCFCFC", width: "45%",borderRadius: "10px",display: "flex",flexDirection: "row" }}>
                    <SearchIcon variant="Outlined" style={{color: "#A03037" }} />
                    <input style={{ border: "none",width:"-webkit-fill-available",borderRadius: "10px"}} />
                </div>
                <PersonOutlineIcon variant="Outlined" />
                <ShoppingCartIcon variant="Outlined" />
            </div>
        </div>
    )
}

export default Header
