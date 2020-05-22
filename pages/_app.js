// https://nextjs.org/docs/advanced-features/custom-app

import React, {useState} from 'react'
import * as Sentry from '@sentry/node'

Sentry.init({
  dsn: process.env.dsn,
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
    <div className="app">
      {contact.added ? <h2>Hi {contact.email}</h2>: 
        [<input key='1' type='email' placeholder='Email' onChange={handleChange}></input>, 
        <button key='2' type='submit' onClick={handleSubmit}>Submit</button>,
        <h2 key='3'>Hi Guest</h2>        
      ]}
      <Component {...pageProps} />
      <style jsx>{`
        .app {
          background-image: url('/sentry-pattern.png');
          min-height: 100%;
          min-width: 1024px;
          width: 100%;
          height: auto;
          position: fixed;
          top: 0;
          left: 0;
        }
        input {
          width: 20%;
          height: 10px;
          padding: 10px;
          text-align: center;
          display: block;
          margin: 30px auto 0px auto;
        }
        button {
          width: 15%;
          padding: 10px;
          text-align: center;
          display: block;
          margin: 10px auto;
          background: #B9B2D0
        }
        button:hover {
          background: #DBD3E9;
        }
        h2 {
          text-align: center;
          font: 25px sans-serif;
        }
      `}</style>
    </div>
  )
}

export default MyApp