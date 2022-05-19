import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

const Post = ({ post }) => {
  console.log('ola');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('foi renderizado!!');

  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((res) => setPosts(res));
    }, 3000);
  }, []);

  return (
    <div className="App">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} />)
        );
      }, [posts])}
    </div>
  );
}

export default App;
