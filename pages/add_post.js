import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "../api/axios-strapi";
import styles from "../styles/AddPost.module.css";
import {BsImage} from 'react-icons/bs'
import Loading from "../components/Loading/Loading";

export default function AddPostPage() {
  const initialState = {
    title: "",
    shortDesc: "",
    description: "",
    cardImg: null,
  };
  const [post, setPost] = useState(initialState);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(``);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setPost((post) => {
      return {
        ...post,
        [e.target.name]: e.target.value,
      };
    });
  };

  const fileChange = async (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
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
    setImage(addFile.data);
  };
  
  async function addPost() {
    setLoading(true)
    const newsInfo = {
      title: post.title,
      shortDesc: post.shortDesc,
      description: post.description,
      cardImg: image
    }; 
    const add = await axios.post(`/cards`, { data: newsInfo });
    setLoading(false)
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    addPost();
  };
  
  return (
    <>
      {!loading ? (
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
                <div className={styles.desc_date}>
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
                  {/* <div className={styles.date}>
                    <input type="date" onChange={changeHandler} />
                  </div> */}
                </div>
              </div>
              <div className={styles.form__bottom}>
                <div className={styles.image_container}>
                  <div className={styles.image_block}>
                    {preview ? <img src={preview} alt="" className={styles.img} /> : <BsImage className={styles.img}/> }
                  </div>
                  <input name="file" onChange={fileChange} type="file" />
                </div>
                <div>
                  <button className={styles.form__btn}>Добавить новость</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : <Loading/>}
    </>
  );
}
