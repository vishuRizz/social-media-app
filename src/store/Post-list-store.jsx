import { createContext, useReducer } from "react";

 export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
    return currentPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

 const addPost=()=>{ 

 }
 const deletePost=()=>{

 }

  return <PostListData.Provider value={{
    postList: postList,
    addPost: addPost,
    deletePost: deletePost
  }}>{children}</PostListData.Provider>;
};
const DEFAULT_POST_LIST =[ {
    id: 1,
    title: 'going to mumbain',
    body: 'i am vishu and going to mumbai for vacations', 
    reactions: 2,
    userId: 'user-9',
    tags:["vacations", "trip"],
},
{
    id: 2,
    title: 'going to college',
    body: 'learnign react and advance concepts of react like contex api and useReducer', 
    reactions: 15,
    userId: 'user-12',
    tags:["college", "react"],
}
]

export default PostListProvider;
