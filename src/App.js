import Counter from "./features/counter/Counter";
import PostsList from "./features/post/PostsList";
import AddPostForm from "./features/post/AddPostForm";
import TestReact from "./testingFeature/test";

function App() {
  return (
    <main className="App">
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
      <TestReact />
    </main>
  );
}

export default App;
