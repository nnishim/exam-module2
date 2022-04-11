import React from 'react'
import Post from '../../components/Post/Post';
import axios from '../../api/axios-strapi'
import Footer from '../../components/Footer/Footer'

export default function PostPage({post}) {
	return (
		<>
			<Post post={post}/>
			<Footer/>
		</>
	)
}
export async function loadPost(id) {
  const post = await axios.get(`/cards/${id}?populate=cardImg`)
  const postData = post.data.data;
  
  return postData
}
export const getStaticPaths = async () => {
  const posts = await axios.get(`/cards`)
  const postsData = posts.data.data;

  const paths = postsData.map(post => {
    return {
      params: {id: post.id.toString()}
    }
  })

  return {
    paths,
    fallback:false
  }
}

export async function getStaticProps({params: {id}}) {
  const post = await loadPost(id)
  return {props: {post}}
}