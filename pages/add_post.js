import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "../api/axios-strapi";
import styles from "../styles/AddPost.module.css";

export default function AddPostPage() {
  const initialState = {
    title: "",
    shortDesc: "",
    description: "",
    cardImg: null,
  };
  const [post, setPost] = useState(initialState);
  const [image, setImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const changeHandler = (e) => {
    setPost((post) => {
      return {
        ...post,
        [e.target.name]: e.target.value,
      };
    });
  };

  // useEffect(() => {
  //   setIsLoaded(true);
  // }, []);

  // useEffect(() => {
  //   if (isLoaded) {
  //     true
  //   }
  // }, [isLoaded]);

  const fileChange = async (e) => {
    const formData = new FormData();

    formData.append("files", e.target.files[0]);
    const addFile = await axios.post(
      `http://localhost:1337/api/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setImage(addFile);
  };

  async function addPost() {
    const newsInfo = {
      title: post.title,
      shortDesc: post.shortDesc,
      description: post.description,
      cardImg: image,
    };
    const add = await axios.post(`/cards?populate=cardImg`, { data: newsInfo });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    addPost();
  };
  return (
    <>
      <div className={styles.add_post}>
        <Head>
          <title>Добавить новость</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.container}>
          <h1 className={styles.title}>Добавить новость</h1>
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.form__content}>
              <div>
                <div className={styles.input__block}>
                  <div className={styles.input__text}>Заголовок новости</div>
                  <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
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
                  onChange={changeHandler}
                  rows={15}
                  cols={40}
                  className={styles.desc}
                  placeholder="Введите полное описание"
                />
              </div>
            </div>
            <div className={styles.form__bottom}>
              <div>
                <input name="file" onChange={fileChange} type="file" />
              </div>
              <div>
                <button className={styles.form__btn}>Добавить новость</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
