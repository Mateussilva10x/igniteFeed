import PropTypes from "prop-types";

function Post({ author, content }) {
  return (
    <>
      <strong>{author}</strong>
      <p>{content}</p>
    </>
  );
}

export default Post;

Post.PropTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
