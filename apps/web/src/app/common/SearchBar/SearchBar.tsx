import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";

const SearchBar = ({placeholder, onChange}: any) => {
    return (
        <div>
            <SearchIcon/>
            <Input 
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default SearchBar;