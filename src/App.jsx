import Post from "./components/Post";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Mateus Silva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quaerat atque soluta quos quam nulla laborum dolore harum officia rem vitae culpa ullam pariatur, cumque accusantium cupiditate. In, facere quod."
          />
          <Post
            author="Mateus Silva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quaerat atque soluta quos quam nulla laborum dolore harum officia rem vitae culpa ullam pariatur, cumque accusantium cupiditate. In, facere quod."
          />
        </main>
      </div>
    </>
  );
}

export default App;
