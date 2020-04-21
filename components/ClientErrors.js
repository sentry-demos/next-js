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
    <div>
      <h1>Client</h1>
      <ul>
        <li>
          <a href='#' onClick={notAFunction}>TypeError</a>
        </li>
        <li>
          <a href='#' onClick={rangeError}>RangeError</a>
        </li>
      </ul>
    </div>
  )
}

export default ClientErrors