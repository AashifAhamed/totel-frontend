import React, {useContext, useState} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import Cookies from 'js-cookie';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Store } from '../utils/StoreUtils/Store.js';
import styles from '../styles/WrapHeader.module.css';
import iconLogout from '../public/img/icon/icon-logout.svg';
import iconArrowDown from '../public/img/icon/icon-arrow-down.svg';

const WrapHeaderTopLinks = () => {
	const {state, dispatch} = useContext(Store);
	const {userInfo} = state;
	const router = useRouter();

	// BEGIN CODE: user menu in top right: open/close effect
	const [anchorElTopRightUser, setAnchorElTopRightUser] = useState(null);
	const openTopRightUser = Boolean(anchorElTopRightUser);
	const handleClickTopRightUser = (e) => {
		setAnchorElTopRightUser(e.currentTarget);
	};
	const handleCloseTopRightUser = () => {
		setAnchorElTopRightUser(null);
	};
	// END CODE: user menu in top right: open/close effect

	const logoutClickHandler = () => {
		dispatch({type: 'USER_LOGOUT'});
		Cookies.remove('userInfo');
		router.push('/');
	};

	return (
		<>
			{/* <div className={styles.toprightsupport}>
				<Link href="/support">Support</Link>
			</div> */}

			{/* <div className={styles.topcurrencylang}>
				<HomeLocation whichComponent="WrapHeader" />
			</div> */}

			{/* BEGIN CODE: user menu in top right: open/close effect */}
			<div className={styles.toprightuser}>
				{userInfo ? (
					<>
						<Box
							sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
							<Tooltip title="Account settings">
								<Button
									onClick={handleClickTopRightUser}
									aria-controls={openTopRightUser ? 'account-menu' : undefined}
									aria-haspopup="true"
									aria-expanded={openTopRightUser ? 'true' : undefined}
									endIcon={<Image src={iconArrowDown} alt="Arrow Down icon" />}
									style={{color: '#000'}}>
									<Avatar alt={userInfo.name} src={userInfo.imgUrl} />
								</Button>
							</Tooltip>
						</Box>
						<Menu
							anchorEl={anchorElTopRightUser}
							id="account-menu"
							open={openTopRightUser}
							onClose={handleCloseTopRightUser}
							onClick={handleCloseTopRightUser}
							PaperProps={{
								elevation: 0,
								sx: {
									overflow: 'visible',
									filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
									mt: 1.5,
									'& .MuiAvatar-root': {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
									'&:before': {
										content: '""',
										display: 'block',
										position: 'absolute',
										top: 0,
										right: 47,
										width: 10,
										height: 10,
										bgcolor: 'background.paper',
										transform: 'translateY(-50%) rotate(45deg)',
										zIndex: 0,
									},
								},
							}}
							transformOrigin={{horizontal: 'right', vertical: 'top'}}
							anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
							<MenuItem>
								<Avatar /> <Link href={`/user/${userInfo._id}`}>Profile</Link>
							</MenuItem>
							{/* <MenuItem>
								<Avatar /> My account
							</MenuItem> */}
							<MenuItem onClick={logoutClickHandler}>
								<ListItemIcon>
								<Image src={iconLogout} alt="Logout icon" />
								</ListItemIcon>
								Logout
							</MenuItem>
						</Menu>
					</>
				) : (
					<div className={styles.toprightlogin}>
						<Link href="/post/new">Create Post</Link>&nbsp;&nbsp;&nbsp;&nbsp;
						{/*  Button */}
						<Button
							style={{textTransform: 'none'}}
							onClick={() => {
								router.push('/login');
							}}>
							Sign In
						</Button>

						{/* <Link href="/send-otp-code">Sign Up</Link> */}
					</div>
				)}
			</div>
			{/* END CODE: user menu in top right: open/close effect */}
		</>
	);
};
export default WrapHeaderTopLinks;
