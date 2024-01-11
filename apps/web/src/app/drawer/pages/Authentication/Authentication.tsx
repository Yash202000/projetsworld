import React ,{ useState }from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../../common/CommonButton/commonButton';
import NotificationBell from '../../../common/NotificationBell/NotificationBell';
import BasicMenu from '../../../common/BasicMenu/BasicMenu';
import Avatar from '@mui/material/Avatar';
import Header from '../../../common/Header/Header';
import BasicCard from '../../../common/BasicCard/BasicCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from '../../../common/SearchBar/SearchBar';
import { Box, IconButton, Typography } from '@mui/material';
import { get } from 'http';
import GridWrapper from '../../../common/GridWrapper/GridWrapper';
import UserModal from './UserModal'; 


const Authentication = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddUserClick = () => {
        console.log('click');
        setIsModalOpen(true);
      };

    const handleCloseModal = () => {
    setIsModalOpen(false);
    };
    
    


    const getHeader = () => {
        const handleChange = (value: any) => {
            console.log(value);
        };

        const addUser = () => {
            console.log('click')
        };

        const headerStyles = {
            wrapper: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: '20px',
                paddingRight: '20px',
                height: '65px',
                backgroundColor: '#f5f5f5',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            },
            addUserButton: {
                fontSize: '1.05rem',
            },
        }

        return (
            <Box sx={headerStyles.wrapper}>
                <SearchBar
                    placeholder="Search for user"
                    onChange={(event: any) => handleChange(event.target.value)}
                    searchBarWidth="720px"
                />
                <Box>
                    <CommonButton
                        variant='contained'
                        onClick={handleAddUserClick}
                        size="large"
                        sx={headerStyles.addUserButton}
                    >
                        Add User
                    </CommonButton>
                    <UserModal open={isModalOpen} onClose={handleCloseModal} />
                    <IconButton>
                        <RefreshIcon/>
                    </IconButton>
                </Box>
            </Box>
        )

        
    }

    const getContent = () => {
        <Typography
            align="center"
            sx={{margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
        >
            No users for this project yet
        </Typography>
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
        <GridWrapper>
            <BasicCard 
                header={getHeader()}
                content={getContent()}
            />
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
        </GridWrapper>
    )
}

export default Authentication
