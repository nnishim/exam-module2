import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { nav } from "../../data/nav";
import cn from "classnames";
import { FiLogIn } from "react-icons/fi";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const router = useRouter({});
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
                        active: router.asPath === link.href,
                      })}
                    >
                      {link.name}
                    </a>
                  </Link>
                );
              })}
            </nav>
            <div className="auth">
              <Link href="#">
                <a className="auth__btn">
                  <span>Войти</span> 
                  <FiLogIn className={styles.auth_icon} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="wrapper">{children}</div>
      <style jsx>
        {`
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
          .nav {
            margin-right: -60px;
          }
          .nav__link {
            color: #d1d8e0;
            transition: 0.2s ease-in-out;
            margin: 0 15px;
            position: relative;
          }
          .nav__link:after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            bottom: -3px;
            width: 0;
            height: 2px;
            background-color: #fff;
            transition: width 0.5s;
          }
          .nav__link:hover {
            color: #fff;
          }
          .nav__link:hover:after {
            content: "";
            width: 100%;
            display: block;
            position: absolute;
            left: 0;
            bottom: -3px;
            height: 2px;
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
