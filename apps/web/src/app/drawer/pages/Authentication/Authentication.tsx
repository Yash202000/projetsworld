import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../../common/CommonButton/commonButton';
import NotificationBell from '../../../common/NotificationBell/NotificationBell';
import BasicMenu from '../../../common/BasicMenu/BasicMenu';
import Avatar from '@mui/material/Avatar';
import Header from '../../../common/Header/Header';
import BasicCard from '../../../common/BasicCard/BasicCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from '../../../common/SearchBar/SearchBar';


const Authentication = () => {

    const getSearchBar = () => {
        const handleChange = (value: any) => {
            console.log(value);
        }

        <SearchBar
            placeholder="Search for user"
            // onChange{(event) => handleChange(event.target.value)}
        />
    }

    // const [open, setOpen] = React.useState(false);
    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event: any) => {
    //     setAnchorEl(event.currentTarget);
    //     setOpen(true);
    // }

    // const buttonStyles = {
    //         // fontSize: '0.875rem',
    //         // fontWeight: 600,
    //         // textTransform: 'capitalize',
    //         // borderRadius: 2.5,
    //         // '&.MuiButton-contained': {
    //         //     backgroundColor: '#009be5',
    //         //     '&:hover': {
    //         //         backgroundColor: '#006db3'
    //         //     },
    //         // },
    //         // '&.MuiButton-outlined': {
    //         //     color: "#fff",
    //         //     borderColor: '#fff',
    //         //     '&:hover': {
    //         //         backgroundColor: 'transparent'
    //         //     },
    //         // },
    //     };
    
    return (
        <Grid item xs={8} sx={{marginLeft: '320px'}}>
            <BasicCard header={<SearchBar/>}/>
            {/* <Header title="Authentication"/> */}
            {/* <NotificationBell 
                iconcolor="primary"
                badgeContent={0}
                anchorEl={anchorEl}
                onClick={handleClick}
            />
            <BasicMenu 
                open={open}
                anchorEl={anchorEl}
                // handleClose={handleClose}
            />
            <Avatar src="https://mui.com/static/images/avatar/1.jpg"/> */}
            {/* <CommonButton
                variant='contained'
                sx={buttonStyles}
            >
                Add User
            </CommonButton>
            <CommonButton
                variant='outlined'
                sx={buttonStyles}
            >
                Add User
            </CommonButton> */}
        </Grid>
    )
}

export default Authentication
