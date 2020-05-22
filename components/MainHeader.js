import Link from 'next/link'

const MainHeader = () => (
    <header className="header">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/testErrors/clientErr">
            <a>Client</a>
          </Link>
        </li>
        <li>
          <Link href="/testErrors/serverErr">
            <a>Server</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .header {
          font: 20px sans-serif;
          padding: 10px;
          text-align: center;
        }
        .header ul {
          padding: 0px;
        }
        .header li {
          list-style-type: none;
          margin: 10px;
          background: #B9B2D0;
          padding: 10px;
          display: inline-block;
          width: 20%;
        }
        .header a {
          text-decoration: none;
          color: white;
          display: block;
        }
        .header li:hover{
          background: #DBD3E9;
          cursor: pointer;
        }
      `}</style>
    </header>
)

export default MainHeader