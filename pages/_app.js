// https://nextjs.org/docs/advanced-features/custom-app

import React, {useState} from 'react'
import * as Sentry from '@sentry/node'
require('dotenv').config()

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  release: process.env.release,
  debug: true,
});

function MyApp({ Component, pageProps }) {

  const [contact, setEmail] = useState({
    email: '',
    added: false
  });
  
  const handleChange = event => {
    setEmail({...contact, email: event.target.value})
  }
  
  function handleSubmit() {
    const currentUser = contact.email;
    setEmail({...contact, added: true})
    Sentry.configureScope(scope => {
      scope.setUser({email: currentUser});
    });
  };

  return (
    <div>
      {contact.added ? <h2>Hi {contact.email}</h2>: 
        [<input key='1' type='email' placeholder='Email' onChange={handleChange}></input>, 
        <button key='2' type='submit' onClick={handleSubmit}>Submit</button>,
        <h2 key='3'>Hi Guest</h2>        
      ]}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp