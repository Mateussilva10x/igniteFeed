import Comment from "./Comment";
import styles from "./Post.module.css";

function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/40676870?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Mateus Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="21 de Fevereiro às 11:30h" dateTime="2024-02-21 11:30:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento{" "}
        </p>
        da Rocketseat. O nome do projeto é DoctorCare 🚀
        <p>
          <a href="#">jane.design/doctorcare </a>
        </p>
        <p>
          <a href="#">#novoprojeto </a>
          <a href="">#nlw </a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

export default Post;
