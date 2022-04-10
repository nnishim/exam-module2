import React from "react";
import styles from "../../styles/Contact.module.css";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaUserCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { SERVER_URL } from "../../api/urls";
import Link from "next/link";

function Post({ post, news }) {
	const removeItem = (id) => {
		news.filter(news => news.id !== id)
	};

  return (
    <>
      <div className="post-wrapper">
        <div className="post" key={post.id}>
          <div className="post__content-top">
            <div className="container">
              <div className="post__title-block">
                <h1 className="post__title">{post.title}</h1>
              </div>
              <div className="post__date">
                <BiCalendar />
                <span className="date__tea">{post.date}</span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="post__content-bottom">
              <div className="post__desc-block">
                <p className="post__desc">{post.description}</p>
              </div>
              <div className="author__item">
                <div className="post__author">
                  <div className="author">
                    <div className="author__image">
                      <FaUserCircle className={styles.author__img} />
                    </div>
                    <h2 className="author__name">{post.author}</h2>
                    <div className="author__activity">
                      <span>{post.activity}</span>
                    </div>
                    <div className="author__articles">
                      <span>{post.articles}</span>
                    </div>
                  </div>
                  <div className={styles.social__items}>
                    <div className={styles.social__item}>
                      <a href="#" className="social__info information">
                        <FiFacebook className={styles.social__icon_author} />
                      </a>
                    </div>
                    <div className={styles.social__item}>
                      <a href="#" className="social__info information">
                        <FiInstagram className={styles.social__icon_author} />
                      </a>
                    </div>
                    <div className={styles.social__item}>
                      <a href="#" className="social__info information">
                        <FiTwitter className={styles.social__icon_author} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="post__buttons">
                  <Link href="#">
                    <a className="edit-btn"><FaRegEdit/> Редактировать пост</a>
                  </Link>
                  <button className="delete-btn" onClick={removeItem}><FaRegTrashAlt/> Удалить пост</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .author__image {
            margin-bottom: 20px;
          }
          .author__activity {
            margin-bottom: 15px;
            color: #fff;
            font-size: 18px;
          }
          .author__articles {
            margin-bottom: 20px;
            color: #fff;
            font-size: 18px;
          }
          .author__name {
            font-size: 26px;
            font-weight: normal;
            color: #fff;
            margin-bottom: 20px;
          }
					.post__buttons{
						display: flex;
						align-items: flex-start;
						gap: 20px;
						flex-direction: column;
					}
					.edit-btn, .delete-btn{
						display: flex;
						align-items: center;
						cursor: pointer;
						border: none;
						background: none;
						font-size: 18px;
						font-family: Calibri;
						gap: 5px;
						transition: .3s ease-in-out;
					}
					.delete-btn:hover{
						color: red;
					}
					.edit-btn:hover{
						color: blue;
					}
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .post-wrapper {
            font-family: Calibri;
            margin-bottom: 100px;
          }
          .post__desc {
            font-size: 20px;
          }
          .post__content-top {
            background: url(${SERVER_URL + post.cardImg?.formats?.large?.url})
              no-repeat;
            background-position: center;
            background-size: cover;
            height: 350px;
            padding-top: 50px;
            margin-bottom: 30px;
          }
          .post__title-block {
            max-width: 300px;
            text-align: center;
            padding: 15px 0;
            background-color: #778ca3;
            margin-bottom: 120px;
            border-radius: 5px;
          }
          .post__title {
            color: #fff;
            font-size: 26px;
            font-weight: normal;
          }
          .post__date {
            display: flex;
            align-items: center;
            gap: 5px;
            background-color: #778ca3;
            color: #fff;
            width: 120px;
            text-align: center;
            padding: 10px;
            border-radius: 5px;
          }
          .post__content-bottom {
            display: flex;
            align-items: flex-start;
						gap: 30px;
          }
          .post__author {
            text-align: center;
            border: 1px solid #778ca3;
            width: 300px;
            border-radius: 30px;
            padding: 35px 15px;
            background-color: #778ca3;
            position: relative;
            margin-top: -150px;
						margin-bottom: 20px;
          }
          .post__desc-block {
            max-width: 800px;
          }
        `}
      </style>
    </>
  );
}

export default Post;