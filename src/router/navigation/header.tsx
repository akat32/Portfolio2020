import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

type Props = {
  lang: string;
  setLang: any;
};
const Menu = ["Home", "Resume", "Github", "Blog", "Portfolio"];
export const HeaderNavigation: React.FC<Props> = (props: Props) => {
  const [match, setMatch] = useState(window.location.pathname);
  function fontBold(url: String) {
    if (url === "Home" && match === "/") return { fontWeight: 700 };
    if ("/" + url === match) return { fontWeight: 700 };
    else return { fontWeight: 100 };
  }
  function backcolor() {
    return window.location.pathname === "/" ? "header back" : "header";
  }
  function paramChange(url: String) {
    if (url === "Home" || url === "Github" || url === "Blog") return "";
    else return url;
  }
  function clickLink(contact: String) {
    let url = "";
    if (contact === "Github") url = "https://github.com/akat32";
    else if (contact === "Blog") url = "https://blog.naver.com/akat32";
    else if (contact === "Resume") {
    }
    if (url !== "") {
      let win = window.open(url, "_blank");
      win!.focus();
    }
    setMatch("/" + contact);
  }
  return (
    <div className={backcolor()}>
      <div className="logo userSelect">
        <a href="/">Park Tae Wook</a>
      </div>
      <div className="flexDump" />
      <ul className="navigationMenu">
        {Menu.map((contact) => {
          return (
            <li style={fontBold(contact)} key={contact + "proto"}>
              <Link
                onClick={() => clickLink(contact)}
                to={`/${paramChange(contact)}`}
              >
                {contact}
              </Link>
            </li>
          );
        })}
        <li className="languageChangeBtn">
          <div className="innerLangBox">
            <div
              onClick={() => {
                props.setLang("KR");
              }}
            >
              KR
            </div>
            <div
              onClick={() => {
                props.setLang("EN");
              }}
            >
              EN
            </div>
          </div>
          <div className="langIcon" />
          {props.lang}
        </li>
      </ul>
    </div>
  );
};
