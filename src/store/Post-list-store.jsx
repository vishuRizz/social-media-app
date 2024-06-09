import { createContext, useReducer } from "react";

 export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
//  console.log(action.payload.postId)
  if (action.type === 'DELETE_ITEM') {
    console.log(action.payload.postId)
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }

    return currPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

 const addPost=()=>{ 

 }
 const deletePost=(postId)=>{
 
  dispatchPostList({
    type: 'DELETE_ITEM',
    payload:{
    postId,
  }})
 }

  return <PostListData.Provider value={{
    postList: postList,
    addPost: addPost,
    deletePost: deletePost
  }}>{children}</PostListData.Provider>;
};
const DEFAULT_POST_LIST =[ {
    id: 1,
    title: 'Going to mumbain',
    body: 'i am vishu and going to mumbai for vacations, ill be going to many more places like goa and other places in maharashtra and also will try to go to hydrabad which is in telengana.', 
    reactions: 2,
    userId: 'user-9',
    tags:["vacations", "trip"],
},
{
    id: 2,
    title: 'Going to college',
    body: 'learnign react and advance concepts of react like contex api and useReducer', 
    reactions: 15,
    userId: 'user-12',
    tags:["college", "react","learning"],
}
]

export default PostListProvider;
