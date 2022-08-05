import React, { useContext, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';

import styles from '../styles/WrapHeader.module.css';
import { Store } from '../utils/StoreUtils/Store.js';
import HomeLocation from './HomeLocation';

const WrapHeaderTopLinks = dynamic(
	() => import('./WrapHeaderTopLinks'),
	{ ssr: false }
)
const VerifyWarning = dynamic(
	() => import('./VerifyWarning'),
	{ ssr: false }
)

const WrapHeader = () => {
	const router = useRouter();
	const [searchValue, setSearchValue] = useState('');

	const { state, dispatch } = useContext(Store);
	const { userInfo } = state;

	// BEGIN: Nav menu
	const navMenuData = [
		'/',
		'/destination',
		'/tours',
		'/rooms',
		'/hostels',
		'/blogs',
	];
	let navMenuValue = navMenuData.indexOf(router.pathname);
	if (navMenuValue === -1) {
		navMenuValue = false;
	}
	// END: Nav Menu

	return (
		<div className={styles.wrapheader}>
			<VerifyWarning />
			<div className={styles.topheader}>
				<div className={styles.topleft}>
					<h1 className={styles.sitelogo}>
						<img src="/img/logo.png" alt="logo" />
					</h1>
					<div className={styles.location}>
						<HomeLocation whichComponent="WrapHeader" />
					</div>

					{/* <div className={styles.searchbox}>
						<form className={styles.searchform}>
							<TextField
								fullWidth
								label="Where are you going?"
								name="searchValue"
								onChange={(e) => setSearchValue(e.target.value)}
								style={{ height: 15 }}
								value={searchValue}
							/>
							<button className={styles.searchbutton} type="submit" />
						</form>
					</div> */}


				</div>
				{/* END: <div className={styles.topleft}> */}

				<div className={styles.toprightlinks}>
					<WrapHeaderTopLinks />
				</div>
				{/* END div.toprightlinks */}
			</div>

			{/* BEGIN: Nav Menu */}
			{/* <nav className={styles.navmenu}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs
						value={navMenuValue}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="scrollable auto tabs">
						<Link href="/">
							<Tab label="Home" value="0" />
						</Link>
						<Link href="/destination">
							<Tab label="Destination" value="1" />
						</Link>
						<Link href="/tour">
							<Tab label="Tours" value="2" />
						</Link>
						<Link href="/room">
							<Tab label="Rooms" value="3" />
						</Link>
						<Link href="/hotel">
							<Tab label="Hostels" value="4" />
						</Link>
						<Link href="/blog">
							<Tab label="Blog" value="5" />
						</Link>
					</Tabs>
				</Box>
			</nav> */}
			{/* END: Nav Menu */}
		</div>
	);
};

export default WrapHeader;
