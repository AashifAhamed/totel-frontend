import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Swal from 'sweetalert2';
import {useForm, Controller} from 'react-hook-form';
import Cookies from 'js-cookie';
import { getAuth } from "firebase/auth";

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

import { Store } from '../utils/StoreUtils/Store.js';
import { login } from '../utils/APIs'
import WrapHeader from './WrapHeader';
import WrapFooter from './WrapFooter';
import styles from '../styles/LoginRegister.module.css';
import iconEmail from '../public/img/icon/icon-email.svg';
import iconFullname from '../public/img/icon/icon-fullname.svg';
import iconPassword from '../public/img/icon/icon-password.svg';
import iconVisibility from '../public/img/icon/icon-visibility.svg';
import iconVisibilityOff from '../public/img/icon/icon-visibility-off.svg';

const LoginRegister = ({whichPage}) => {
	// whichPage can be 'login' OR 'register'

	const auth = getAuth();

	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const {
		handleSubmit,
		control,
		formState: {errors},
	} = useForm();
	const router = useRouter();
	const {redirect} = router.query; // For Example: login?redirect=/hotels&message=You-are-logged-in
	const {state, dispatch} = useContext(Store);
	const {userInfo} = state;

	useEffect(() => {
		if (userInfo) {
			router.push('/?message=You-are-logged-in');
		}
	}, []);

	const submitHandler = async (props) => {
		const phone_number = auth.currentUser?.phoneNumber;

		if (!phone_number && whichPage === 'register'){
			alert('please verify your number')
			router.push('/send-otp-code')
		}
		setLoading(true);

		if (whichPage === 'register') {
			if (props.password !== props.confirmPassword) {
				setLoading(false);
				Swal.fire('Error', "Passwords don't match", 'error');
				return;
			}
		}

		let fetchUrl = '';
		let fetchBody = {};
		if (whichPage === 'login') {
			fetchUrl = 'https://metoospace.herokuapp.com/api/v1/auth/login';
			fetchBody = {email: props.email, password: props.password};
		} else if (whichPage === 'register') {
			fetchUrl = 'https://metoospace.herokuapp.com/api/v1/auth/signup';
			fetchBody = {
				name: props.fullname,
				email: props.email,
				password: props.password,
				phone_number,
			};
		}
		await login(fetchBody, dispatch);
		// try {
		// 	const res = await fetch(fetchUrl, {
		// 		method: 'POST',
		// 		headers: {'Content-Type': 'application/json'},
		// 		body: JSON.stringify(fetchBody),
		// 	});
		// 	if (res.ok) {
		// 		if ( whichPage === 'login'){
		// 			const data = await res.json();
		// 			dispatch({type: 'USER_LOGIN', payload: data});
		// 			Cookies.set('userInfo', JSON.stringify(data));
		// 			router.push(redirect || `/user/${data._id}`);
		// 		}
		// 		else {
		// 			router.push(redirect || `/login`);
		// 		}
		// 	} else {
		// 		setLoading(false);
		// 		Swal.fire(
		// 			'Error',
		// 			'There is an error. Please try again later.',
		// 			'error'
		// 		);
		// 	}
		// } catch (err) {
		// 	console.log(err);
		// }
		setLoading(false);
	};

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
							{whichPage === 'login' && "Don't have an account?"}
							{whichPage === 'register' && 'Already have an account?'}
						</p>
						<Link
							href={
								whichPage === 'login'
									? '/send-otp-code'
									: whichPage === 'register' && '/login'
							}>
							<Button
								variant="outlined"
								sx={{
									height: '48px',
									color: '#292D32',
									border: '1px solid #D9D9D9',
									fontSize: '16px',
								}}>
								{whichPage === 'login' && 'SIGN UP'}
								{whichPage === 'register' && 'SIGN IN'}
							</Button>
						</Link>
					</div>

					<h2>Welcome{whichPage === 'login' && ' Back'}</h2>
					<p className={styles.logregunderh2}>
						{whichPage === 'login' && 'Sign in to continue'}
						{whichPage === 'register' && 'Register your account'}
					</p>

					<form onSubmit={handleSubmit(submitHandler)} noValidate>
						{whichPage === 'register' && (
							<div className={styles.logregtextfield}>
								<Controller
									name="fullname"
									control={control}
									defaultValue=""
									rules={{
										required: true,
										minLength: 2,
									}}
									render={({field}) => (
										<TextField
											fullWidth
											id="fullname"
											error={Boolean(errors.fullname)}
											helperText={
												errors.fullname
													? errors.fullname.type === 'minLength'
														? 'Full Name length is more than 1'
														: 'Full Name is required'
													: ''
											}
											label={
												<span>
													<span style={{padding: '0 9px 0 0'}}>
														<Image src={iconFullname} alt="Fullname icon" />
													</span>
													<span
														style={{
															position: 'relative',
															top: '-5px',
															color: '#292D32',
														}}>
														Enter Your Full Name
													</span>
												</span>
											}
											{...field}
										/>
									)}
								/>
							</div>
						)}

						<div className={styles.logregtextfield}>
							<Controller
								name="email"
								control={control}
								defaultValue=""
								rules={{
									required: true,
									pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
								}}
								render={({field}) => (
									<TextField
										fullWidth
										id="email"
										type="email"
										error={Boolean(errors.email)}
										helperText={
											errors.email
												? errors.email.type === 'pattern'
													? 'Email is not valid'
													: 'Email is required'
												: ''
										}
										label={
											<span>
												<span style={{padding: '0 9px 0 0'}}>
													<Image src={iconEmail} alt="Email icon" />
												</span>
												<span
													style={{
														position: 'relative',
														top: '-5px',
														color: '#292D32',
													}}>
													Enter Email Address
												</span>
											</span>
										}
										{...field}
									/>
								)}
							/>
						</div>
						<div className={styles.logregtextfield}>
							<Controller
								name="password"
								control={control}
								defaultValue=""
								rules={{
									required: true,
									minLength: 6,
								}}
								render={({field}) => (
									<TextField
										fullWidth
										id="password"
										type={showPassword ? 'text' : 'password'}
										error={Boolean(errors.password)}
										helperText={
											errors.password
												? errors.password.type === 'minLength'
													? 'Password length is more than 5'
													: 'Password is required'
												: ''
										}
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={() => setShowPassword(!showPassword)}
														onMouseDown={(e) => e.preventDefault()}
														edge="end">
														{showPassword ? <Image src={iconVisibilityOff} alt="Visibility Off icon" /> : <Image src={iconVisibility} alt="Visibility icon" />}
													</IconButton>
												</InputAdornment>
											),
										}}
										label={
											<span>
												<span style={{padding: '0 9px 0 0'}}>
													<Image src={iconPassword} alt="Password icon" />
												</span>
												<span
													style={{
														position: 'relative',
														top: '-5px',
														color: '#292D32',
													}}>
													Enter Password
												</span>
											</span>
										}
										{...field}
									/>
								)}
							/>
						</div>
						{whichPage === 'register' && (
							<>
								<div className={styles.logregtextfield}>
									<Controller
										name="confirmPassword"
										control={control}
										defaultValue=""
										rules={{
											required: true,
											minLength: 6,
										}}
										render={({field}) => (
											<TextField
												fullWidth
												id="confirmpassword"
												type={showPassword ? 'text' : 'password'}
												error={Boolean(errors.confirmPassword)}
												helperText={
													errors.confirmPassword
														? errors.confirmPassword.type === 'minLength'
															? 'Confirm Password length is more than 5'
															: 'Confirm Password is required'
														: ''
												}
												InputProps={{
													endAdornment: (
														<InputAdornment position="end">
															<IconButton
																aria-label="toggle password visibility"
																onClick={() => setShowPassword(!showPassword)}
																onMouseDown={(e) => e.preventDefault()}
																edge="end">
																{showPassword ? <Image src={iconVisibilityOff} alt="Visibility Off icon" /> : <Image src={iconVisibility} alt="Visibility icon" />}
															</IconButton>
														</InputAdornment>
													),
												}}
												label={
													<span>
														<span style={{padding: '0 9px 0 0'}}>
															<Image src={iconPassword} alt="Password icon" />
														</span>
														<span
															style={{
																position: 'relative',
																top: '-5px',
																color: '#292D32',
															}}>
															Confirm Password
														</span>
													</span>
												}
												{...field}
											/>
										)}
									/>
								</div>

							</>
						)}
						{/* END: {whichPage === 'register' && ( <div className={styles.logregtextfield}> */}

						<p className={styles.formagreement}>
							By signing in
							{whichPage === 'register' && ' or creating an account'}, you agree
							with our <Link href="/terms-use">Terms &amp; Conditions</Link> and
							<Link href="/privacy-policy">Privacy Statement</Link>
						</p>
						<div className={styles.logregformbuttons}>
							<Button
								type="submit"
								variant="contained"
								color="warning"
								sx={{height: '55px', fontSize: '16px'}}>
								{whichPage === 'login' && 'SIGN IN NOW'}
								{whichPage === 'register' && 'CONTINUE'}
								{loading && (
									<>
										&nbsp; <CircularProgress color="inherit" size={18} />
									</>
								)}
							</Button>

							{whichPage === 'login' && (
								<Link href="/forget">Forgot password?</Link>
							)}
						</div>
					</form>

					<div className={styles.sociallogin}>
						<p className={styles.socialp}>
							{whichPage === 'login' && 'or continue with'}
							{whichPage === 'register' && 'Create account with'}
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

export default LoginRegister;
