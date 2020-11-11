import React from "react";
import "bulma/css/bulma.css";

const messageColors = {
  isDark: "is-dark",
  isPrimary: "is-primary",
  isLink: "is-link",
  isInfo: "is-info",
  isSuccess: "is-success",
  isWarning: "is-warning",
  isDanger: "is-danger",
};

function renderClassNames(props) {
  let classNames = "";

  // Para cada chave do objeto props, verifique se essa chave existe no objeto buttonClasses. Se existir, concatene o valor da chave do objeto buttonClasses em uma string.
  Object.keys(props).map((key) => {
    if (messageColors[key]) {
      classNames += `${messageColors[key]} `;
    }
  });

  return classNames;
}

function Message(props) {
  return (
    <article className={`message ${renderClassNames(props)}`}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}</div>
    </article>
  );
}

export default Message;
