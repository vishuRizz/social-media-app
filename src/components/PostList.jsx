import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import EmptyMessage from "./EmptyMessage";

const PostList = ({addApiPosts}) => {
  const {postList}  = useContext(PostListData);


function handleApiButton(){
  fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then((obj)=> addApiPosts(obj.posts));

}

  
  return (
    <> {postList.length === 0 && <EmptyMessage handleApiButton={handleApiButton} /> }
     <div>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      </div>   
    </>
  );
};

export default PostList;
