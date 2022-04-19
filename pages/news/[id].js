import React from "react";
import Head from "next/head";
import Post from "../../components/Post/Post";
import axios from "../../api/axios-strapi";
import Footer from "../../components/Footer/Footer";

export default function PostPage({ post, user }) {
  return (
    <>
      <Head>
        <title>Новость</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post post={post} user={user} />
      <Footer />
    </>
  );
}
export async function loadPost(id) {
  const post = await axios.get(`/cards/${id}?populate=cardImg`);
  const postData = post.data.data;

  return postData;
}
export async function loadUsers(id) {
  const user = await axios.get(`/user/${id}?populate=userImg`);
  const userData = user.data.data;

  return userData;
}
export const getStaticPaths = async () => {
  const posts = await axios.get(`/cards`);
  const postsData = posts.data.data;

  const paths = postsData.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params: { id } }) {
  const post = await loadPost(id);
  const user = await loadUsers(id);
  return { props: { post, user } };
}
