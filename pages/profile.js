import React from "react";
import { SERVER_URL } from ".././api/urls";
import axios from "../api/axios-strapi";
import styles from '../styles/Profile.module.css'

export default function ProfilePage({user}) {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.profile_image}>
          <img
            className={styles.profile_img}
            src={SERVER_URL + user.userImg?.formats?.large?.url}
            alt=""
          />
        </div>
        <h2 className={styles.name}>{user.name}</h2>
        <a href="#" className={styles.email}>{user.email}</a>
        <div className={styles.activity}>
          <span>{user.activity}</span>
        </div>
        <div className="author__articles"></div>
      </div>
    </>
  );
}
export async function loadUsers() {
  const user = await axios.get(`/user/1?populate=userImg`);
  const userData = user.data.data;

  return userData;
}
export async function getStaticProps() {
  const user = await loadUsers();
  return { props: { user } };
}
