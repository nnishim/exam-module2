import React from "react";

function Email() {
  return (
    <div className="email-subscribe">
      <div className="email-subscribe__content">
        <form className="email-subscribe__form">
          <div className="email-subscribe__field">
            <input
              className="email-subscribe__input"
              type="email"
              placeholder="Введите свой email"
            />
          </div>
          <div className="email-subscribe__button">
            <button className="email-subscribe__btn">
              Подписаться на новости
            </button>
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .email-subscribe {
            background-color: #ccc;
            padding: 70px 0;
						margin-bottom: 50px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .email-subscribe__form {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0 10px;
          }
          .email-subscribe__input {
            padding: 10px;
            width: 250px;
            border: 1px solid #444;
            border-radius: 5px;
          }
					.email-subscribe__btn{
						padding: 11px 35px;
						border-radius: 5px;
						border: none;
						cursor: pointer;
						background-color: #1abc9c;
						color: #fff;
						transition: .3s ease-in-out;
					}
					.email-subscribe__btn:hover{
						background-color: #19997f;
					}
        `}
      </style>
    </div>
  );
}

export default Email;
