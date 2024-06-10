import React, { useRef, createContext } from "react";
import { PostListData } from "../store/Post-list-store";


function CreatePost() {
const {addPost} = createContext(PostListData)
  
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();

  function handleSubmit(event) {
    event.preventDefault();
   const userId = userIdElement.current.value;
   const title = titleElement.current.value;
   const body = bodyElement.current.value;
   const tags = tagsElement.current.value.split(/(\s+)/);
   addPost(userId, title, body, tags);
  }

  return (
    <div>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id
          </label>
          <input
            placeholder="User Id"
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tittle" className="form-label">
            Post Tittle
          </label>
          <input
            ref={titleElement}
            placeholder="Enter Your Post Tittle"
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Body
          </label>
          <textarea
            ref={bodyElement}
            placeholder="Tell us about your post....."
            type="text"
            rows="4"
            className="form-control"
            id="body"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            #HashTags
          </label>
          <input
            ref={tagsElement}
            placeholder="Enter Tags"
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
