import React from 'react'
import Post from '../components/Post/Post';
import axios from '../api/axios-strapi'
import Footer from '../components/Footer/Footer'

export default function PostPage({post, news}) {
	return (
		<>
			<Post post={post} news={news}/>
			<Footer/>
		</>
	)
}
export async function loadPost() {
  const posts = await axios.get(`/cards/1?populate=cardImg`)
  const postData = posts.data.data;
  
  return postData
}
export async function loadNews() {
  const newsList = await axios.get('/cards?populate=cardImg');
  const newsData = newsList.data.data
	return newsData
}

export async function getStaticProps() {
  const post = await loadPost()
  const news = await loadNews()
  return {props: {post, news}}
}