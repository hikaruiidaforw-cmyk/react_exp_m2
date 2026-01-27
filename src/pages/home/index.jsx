import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";

import News from "../../components/News";
import CalendarItem from "../../components/CalendarItem";
import SideBar from "../../layout/SideBar";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <SideBar />
        <div className={styles.contents}>
          <News />
          <CalendarItem />
        </div>
      </div>
    </>
  );
};

export default Home;