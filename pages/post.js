import React from 'react'
import Post from '../components/Post/Post';
import axios from '../api/axios-strapi'

export default function PostPage({post}) {
	return (
		<>
			<Post posts={post}/>
		</>
	)
}
export async function loadPost() {
  const posts = await axios.get(`/cards/1?populate=cardImg`)
  const postData = posts.data.data;
  
  return postData
}

export async function getStaticProps() {
  const post = await loadPost()
  return {props: {post}}
}