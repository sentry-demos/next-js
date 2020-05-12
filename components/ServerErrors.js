import Link from 'next/link'

const ServerErrors = () => {

  return (
    <div className="server">
      <h1>Server</h1>
      <ul>
        <li>
          <Link href='/api/api1'>
            <a>Internal Server Error</a>
          </Link>
          <p><code>with captureException</code></p>
        </li>
        <li>
          <Link href='/testErrors/testInternalError'>
            <a>Internal Server Error</a>
          </Link>
          <p><code>with captureMessage</code></p>
        </li>
      </ul>
      <style jsx>{`
        a {
          font: 20px sans-serif;
        }
        h1 {
          text-align: center;
          font: 30px sans-serif;
        }
        .server {
          text-align: center;
          transition: 100ms ease-in background;
        }
        .server ul {
          padding: 0px;
        }
        .server li {
          list-style-type: none;
          margin: 10px auto;
          background: #6C5FC7;
          padding: 10px;
          display: block;
          width: 20%;
        }
        .server a {
          text-decoration: none;
          color: white;
          display: block;
        }
        .server p{
          color: black;
          font-size: 15px;
          display: block;
        }
        .server li:hover{
          background: #423B87;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default ServerErrors