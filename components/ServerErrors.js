import Link from 'next/link'

const ServerErrors = () => {

  return (
    <div>
      <h1>Server</h1>
      <ul>
        <li>
          <Link href='/api/api1'>
            <a>Internal Server Error (with captureException)</a>
          </Link>
        </li>
        <li>
          <Link href='/testErrors/testInternalError'>
            <a>Internal Server Error (with captureMessage)</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ServerErrors