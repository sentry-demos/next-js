const ClientErrors = () => {

  function notAFunction() {
    let num = 3;
    num.toUpperCase();
    return <h1>TypeError</h1>
  }

  function rangeError() {
    let bar;

    rangeError(() => {
      console.log('bar', bar)
    })

    bar = 1;
    return <h1>RangeError</h1>
  }

  return (
    <div className="client">
      <h1>Client</h1>
      <ul>
        <li>
          <a href='#' onClick={notAFunction}>TypeError</a>
          <p><code>3.toUpperCase is not a function</code></p>
        </li>
        <li>
          <a href='#' onClick={rangeError}>RangeError</a>
          <p><code>Maximum call stack size exceeded
          </code></p>
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
        .client {
          text-align: center;
          transition: 100ms ease-in background;
        }
        .client ul {
          padding: 0px;
        }
        .client li {
          list-style-type: none;
          margin: 10px auto;
          background: #6C5FC7;
          padding: 10px;
          display: block;
          width: 20%;
        }
        .client a {
          text-decoration: none;
          color: white;
          display: block;
        }
        .client li:hover{
          background: #423B87;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default ClientErrors