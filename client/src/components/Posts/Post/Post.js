import useStyles from "./styles";
import { useSelector } from "react-redux";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return <div>Post</div>;
};

export default Post;
