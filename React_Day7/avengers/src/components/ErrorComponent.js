import {useRouteError} from 'react-router-dom';

const ErrorComponent = () => {

    const err = useRouteError();

  return (
    <>
        <h2>Sorry mate</h2>
        <h2>What you're looking for isn't here.</h2>
        <h4>Why? { err.message || err.statusText} </h4>
        <a href='/'>Home</a>
    </>
  )
}

export default ErrorComponent