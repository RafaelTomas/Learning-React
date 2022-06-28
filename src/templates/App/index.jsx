import React, { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(() => {
    setState({
      result: null,
      error: null,
      status: 'pending',
    });
    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((error) => {
        setState({
          result: null,
          error: error,
          status: 'error',
        });
      });
  }, [asyncFunction]);
  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};

export const App = () => {
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  useEffect(() => {
    setTimeout(() => {
      reFetchData();
    }, 10000);
  }, [reFetchData]);

  function handleClick() {
    reFetchData();
  }

  if (status === 'idle') {
    return <pre>Nada executando</pre>;
  }
  if (status === 'pending') {
    return <pre>Loading</pre>;
  }
  if (status === 'error') {
    return <pre> {JSON.stringify(error, null, 2)}</pre>;
  }
  if (status === 'settled') {
    return <pre onClick={handleClick}> {JSON.stringify(result, null, 2)}</pre>;
  }

  return '';
};
