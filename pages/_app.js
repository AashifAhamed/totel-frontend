import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

import { StoreProvider } from '../utils/StoreUtils/Store.js';
import { createFirebaseApp } from '../components/FireBase'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let { message } = router.query // For Example: login?redirect=/hotels&message=You-are-logged-in
  if (message) {
    message = String(message);
    message = message.replace(/-/g,' ');
    Swal.fire(message, '', 'info');
  }
  
  createFirebaseApp();

  return (
    <StoreProvider>
      <Component {...pageProps} />
      <div id="modal-root"></div>
    </StoreProvider>
  )
}

export default MyApp
