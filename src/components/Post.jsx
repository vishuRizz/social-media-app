import React, { useContext } from 'react'
import { MdDelete } from 'react-icons/md'
import { PostListData } from '../store/Post-list-store'

function Post({ post }) {
  const { deletePost } = useContext(PostListData)
  console.log(post.id)
  return (
    <div>
      <div className="custom-card card">
        <div className="card-body">
          <h2 className="card-title">
            {post.title}
            <span
              className="top-0 position-absolute start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
              style={{ cursor: 'pointer' }}
            >
              <MdDelete />
            </span>
          </h2>
          <p className="card-text">{post.body}</p>
          <div className="tags-container">
            {post.tags.map((tag) => (
              <span key={tag} className=" badge text-bg-info custom-tags">
                {tag}
              </span>
            ))}
          </div>
          <div class="alert alert-success reactions" role="alert">
            People reacted: {post.reactions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
