import { useReducer } from 'react';
import { PostsContext } from './context';
import { data } from './data';
import { reducer } from './reducer';
import { propTypes } from './types';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = propTypes;
