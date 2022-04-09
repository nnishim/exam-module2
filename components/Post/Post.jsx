import React from "react";

function Post({ posts }) {
  return (
		<>
      <div className="post-wrapper">
				<div className="post" key={posts.id}>
					<div className="container">
						<div className="post__content">
							<h1 className="post__title">{posts.title}</h1>
							<div className="post__date">{posts.date}</div>
						</div>
					</div>
				</div>
      </div>
    </>
  );
}

export default Post;
