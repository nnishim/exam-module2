import React, { useState } from "react";
import styles from "../styles/AddPost.module.css";
import axios from "../api/axios-strapi";
import Head from "next/head";
import { SERVER_URL } from "../api/urls";

export default function PostEditPage({ editpost }) {
  const [editPost, setEditPost] = useState({
    title: editpost.title,
    shortDesc: editpost.shortDesc,
    description: editpost.description,
    cardImg: editpost.cardImg,
  });

  const changeHandler = (e) => {
    setEditPost(() => {
      return {
        ...editPost,
        [e.target.name]: e.target.value,
      };
    });
  };
  async function editedPost() {
    const editInfo = {
      title: editPost.title,
      shortDesc: editPost.shortDesc,
      description: editPost.description,
    };
    const add = await axios.post(`/cards`, { data: editInfo });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    editedPost();
  };
  return (
    <>
      <div className={styles.add_post}>
        <Head>
          <title>Редактировать пост</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.container}>
          <h1 className={styles.title}>Редактировать новость</h1>
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.form__content}>
              <div>
                <div className={styles.input__block}>
                  <div className={styles.input__text}>Заголовок новости</div>
                  <input
                    onChange={changeHandler}
                    type="text"
                    name="title"
                    value={editPost.title}
                    className={styles.input__item}
                    placeholder="Введите заголовок"
                  />
                </div>
                <div className={styles.input__block}>
                  <div className={styles.input__text}>
                    Краткое описание новости
                  </div>
                  <textarea
                    name="shortDesc"
                    onChange={changeHandler}
                    value={editPost.shortDesc}
                    rows={9}
                    className={styles.input__item}
                    placeholder="Введите краткое описание"
                  />
                </div>
              </div>
              <div>
                <div className={styles.input__text}>
                  Полное описание новости
                </div>
                <textarea
                  name="description"
                  rows={15}
                  onChange={changeHandler}
                  cols={40}
                  value={editPost.description}
                  className={styles.desc}
                  placeholder="Введите полное описание"
                />
              </div>
            </div>
            <div className={styles.form__bottom}>
              <div className={styles.image_container}>
                <div className={styles.image_block}>
                  <img className={styles.img} src={ SERVER_URL + editPost.cardImg?.formats?.large?.url} alt="" />
                </div>
                <input name="cardImg" type="file" onChange={fileChange} />
              </div>
              <div>
                <button className={styles.form__btn}>Сохранить изменения</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export async function loadEditPost(id) {
  const post = await axios.get(`/cards/${id}?populate=cardImg`);
  const postData = post.data.data;

  return postData;
}
export async function getStaticPaths() {
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
}

export async function getStaticProps({ params: { id } }) {
  const editpost = await loadEditPost(id);
  return { props: { editpost } };
}
