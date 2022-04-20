import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { nav } from "../../data/nav";
import cn from "classnames";
import { FiLogIn } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const router = useRouter({});
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Link href="/">
                <a>
                  <img className="logo-img" src="/img/news.png" alt="" />
                </a>
              </Link>
            </div>
            <nav className="nav">
              {nav.map((link) => {
                return (
                  <Link key={link.id} href={link.href}>
                    <a
                      className={cn("nav__link", {
                        active: router.asPath === link.href
                      })}
                    >
                      {link.name}
                    </a>
                  </Link>
                );
              })}
            </nav>
            <div className="auth">
              {/* <Link href="/login">
                <a className="auth__btn">
                  <span>Войти</span>
                  <FiLogIn className={styles.auth_icon} />
                </a>
              </Link> */}
              <button className="user_btn" onClick={() => setOpen(!open)}>
                <FaRegUserCircle style={{fontSize:'35px', fill:'#fff'}}/>
                {open && 
                  <div className="dropdown">
                    <Link href='/profile'><a className="menu_item">Профиль</a></Link>
                    <Link href='/add_post'><a className="menu_item">Добавить пост</a></Link>
                    <Link href='#'><a className="menu_item">Выйти</a></Link>
                  </div>
                }
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="wrapper">{children}</div>
      <style jsx>
        {` 
          .dropdown{
            background-color: #fff;
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            right: 5px;
            top: 40px;
            width: 150px;
            overflow: hidden;
            border-radius: 7px 0 7px 7px;
            border: 1px solid #444;
          }
          .menu_item{
            width: 100%;
            padding: 15px 0;
            transition: .3s ease-in-out;
          }
          .menu_item:hover{
            background-color: #ccc;
          }
          .user_btn{
            background-color: transparent;
            border: none;
            position: relative;
            cursor: pointer;
          }
          .header {
            padding: 10px 0;
            background-color: #778ca3;
            position: sticky;
            top: 0;
            z-index: 1000;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .logo-img {
            width: 35px;
            height: 35px;
          }
          .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .nav__link {
            color: #d1d8e0;
            padding-bottom: 5px;
            margin: 0 10px;
            position: relative;
            transition: 0.3s ease-in-out;
          }
          .nav__link:after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            bottom: -2px;
            width: 0;
            height: 2px;
            background-color: #fff;
            transition: width 0.5s;
          }
          .nav__link:hover:not(.active){
            color: #fff;
          }
          .nav__link:hover:not(.active)::after{
            width: 100%;
            display: block;
            position: absolute;
            left: 0;
            background-color: #fff;
            transition: width 0.5s;
          }
          .active {
            color: #fff;
            border-bottom: 2px solid #fff;
          }
          .auth__btn {
            padding: 10px 20px;
            display: flex;
            align-items: center;
            gap: 0 5px;
            cursor: pointer;
            color: #fff;
            border-radius: 5px;
            border: none;
            background-color: #1abc9c;
            border: 1px solid #1abc9c;
            transition: 0.3s ease-in-out;
          }
          .auth__btn:hover {
            background-color: transparent;
            border: 1px solid #fff;
            color: #fff;
          }
        `}
      </style>
    </>
  );
}

export default Layout;
