import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { nav } from "../../data/nav";
import cn from "classnames";
import styles from '../../styles/Contact.module.css'
import {FiTwitter, FiFacebook, FiInstagram, FiLinkedin} from 'react-icons/fi'

function Footer() {
	const router = useRouter({});
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__content">
					<div className="footer__content-item">
						<h1 className='footer__content-title'>Навигация по сайту</h1>
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
					</div>
					<div className={styles.contact__info_item}>
						<div>
							<h2 className='footer__content-title'>Социальные сети</h2>
						</div>
						<div className={styles.social__items}>
							<div className={styles.social__item}>
								<a href='#' className='social__info information'>
									<FiInstagram className={styles.social__icon}/>
								</a>
							</div>
							<div className={styles.social__item}>
								<a href='#' className='social__info information'>
									<FiTwitter className={styles.social__icon}/>
								</a>
							</div>
							<div className={styles.social__item}>
								<a href='#' className='social__info information'>
									<FiFacebook className={styles.social__icon}/>
								</a>
							</div>
							<div className={styles.social__item}>
								<a href='#' className='social__info information'>
									<FiLinkedin className={styles.social__icon}/>
								</a>
							</div>
						</div>
					</div>
					
					<div className='contact__info'>
						<div className="contact__title"><h1 className='footer__content-title'>Контактная информация</h1></div>
						<div className='footer-contact__item'>
							<div>
								<h2 className='footer-contact__title'>Электронная почта:</h2>
							</div>
							<div>
								<a href='#' className={styles.email__link}>news@news@gmail.com</a>
							</div>
						</div>
						<div className='footer-contact__item'>
							<div>
								<h2 className='footer-contact__title'>Телефон:</h2>
							</div>
							<div>
								<span className={styles.information}>+996 - 888 - 888 - 888</span>
							</div>
						</div>
						<div className='footer-contact__item'>
							<div>
								<h2 className='footer-contact__title'>Адрес:</h2>
							</div>
							<div>
								<span className={styles.information}>г. Бишкек, пр-т Чуй, 225</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.footer{
						border-top: 1px solid #778ca3;
						padding: 30px 0;
					}
					.footer__content{
						display: flex;
						align-items: flex-start;
						justify-content: space-between;
					}
					.footer-contact__item{
						display: flex;
						align-items: center;
						gap: 0 10px;
						margin-bottom: 30px;
					}
					.footer-contact__title{
						margin: 0;
						font-size: 20px;
						font-weight: normal;
					}
					.container {
            max-width: 1200px;
            margin: 0 auto;
          }
					.contact__info{
						display: flex;
						align-items: flex-start;
						justify-content: flex-start;
						flex-direction: column;
					}
					.footer__content-title{
						margin: 0 0 30px 0;
						font-size: 26px;
						font-weight: normal;
					}
					.nav{
						display: flex;
						align-items: flex-start;
						flex-direction: column;
						gap: 20px 0;
					}
          .nav__link {
            color: #778ca3;
            transition: 0.2s ease-in-out;
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
            background-color: rgb(0, 176, 176);
            transition: width 0.5s;
          }
          .nav__link:hover {
            color: rgb(0, 176, 176);
          }
          .nav__link:hover:after {
            content: "";
            width: 100%;
            display: block;
            position: absolute;
            left: 0;
            bottom: -3px;
            height: 2px;
            background-color: rgb(0, 176, 176);
            transition: width 0.5s;
          }
          .active {
            color: rgb(0, 176, 176);
            border-bottom: 2px solid rgb(0, 176, 176);
          }
				`}
			</style>
		</footer>
	)
}

export default Footer