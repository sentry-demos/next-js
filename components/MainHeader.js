import Link from 'next/link'

const MainHeader = () => (
    <header>
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
    </header>
)

export default MainHeader