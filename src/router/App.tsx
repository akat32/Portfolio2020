import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { HeaderNavigation } from "./navigation/header";
import { Home, Portfolio, Resume } from "../component";
import { DeviceProvider } from "../context/DeviceContext";
import { ProjectProvider } from "../context/ProjectContext";
import { isMobile } from "react-device-detect";
import { EN } from "../TextPackage/EN.json";
import { KR } from "../TextPackage/KR.json";
const App: React.FC = () => {
  const [lang, setLang] = useState<string>("KR"); // KR, EN
  useEffect(() => {
    if (isMobile) {
      alert(
        "모바일 환경으로 진입하셨습니다.\n더 나은 경험을 위해서는 데스크탑 환경으로 진입해주세요.\n모바일 버전은 현재 개발/디자인중에 있습니다 죄송합니다."
      );
    }
  }, []);
  return (
    <Router>
      <DeviceProvider>
        <ProjectProvider>
          <HeaderNavigation lang={lang} setLang={setLang} />
          <Switch>
            <Route exact path="/">
              <Home language={lang === "EN" ? EN.Home : KR.Home} lang={lang} />
            </Route>
            <Route exact path="/Portfolio">
              <Portfolio
                language={lang === "EN" ? EN.Portfolio : KR.Portfolio}
                lang={lang}
              />
            </Route>
            <Route exact path="/Resume">
              <Resume lang={lang} />
            </Route>
          </Switch>
        </ProjectProvider>
      </DeviceProvider>
    </Router>
  );
};

export default App;
