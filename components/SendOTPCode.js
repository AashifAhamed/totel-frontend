import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { Store } from '../utils/StoreUtils/Store.js';
import WrapHeader from './WrapHeader';
import WrapFooter from './WrapFooter';
import styles from '../styles/LoginRegister.module.css';
import { PhoneNumberAuthenticator } from '../components/FireBase'

const SendOTPCode = ({whichPage}) => {

	const router = useRouter();
	const {state, dispatch} = useContext(Store);
	const {userInfo} = state;

	useEffect(() => {
		if (userInfo) {
			router.push('/?message=You-are-logged-in');
		}
	}, []);

	return (
		<>
			<WrapHeader />

			<main className={styles.logreg}>
				{/* logreg is abbreviation of login-register */}
				<aside>
					<div className={styles.logregsidelogo}>
						<Link href="/">Metoospace</Link>
					</div>
					<h1>LOREM IPSUM</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</aside>
				<section>
					<div className={styles.logregtoplinks}>
						<p>
							{'Already have an account?'}
						</p>
						<Link
							href={
								whichPage === 'login'
									? '/register'
									: '/login'
							}>
							<Button
								variant="outlined"
								sx={{
									height: '48px',
									color: '#292D32',
									border: '1px solid #D9D9D9',
									fontSize: '16px',
								}}>
								{'SIGN IN'}
							</Button>
						</Link>
					</div>
					<h2>Welcome</h2>
					<p className={styles.logregunderh2}>
						{'Enter your phone number'}
					</p>

                    <PhoneNumberAuthenticator />

					<div className={styles.sociallogin}>
						<p className={styles.socialp}>
							{'Create account with'}
						</p>
						<div className={styles.socialface}>
							<IconButton sx={{border: '1px solid #CECFD1'}}></IconButton>
						</div>
						<div className={styles.sociallinkedin}>
							<IconButton sx={{border: '1px solid #CECFD1'}}></IconButton>
						</div>
						<div className={styles.socialgoogle}>
							<IconButton sx={{border: '1px solid #CECFD1'}}></IconButton>
						</div>
					</div>

					<div className={styles.curveline1}></div>
				</section>
			</main>

			<WrapFooter />
		</>
	);
};

export default SendOTPCode;
