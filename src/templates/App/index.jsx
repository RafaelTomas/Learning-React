import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../contexts/PostsProvider';
import './style.css';

function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}
export default App;
