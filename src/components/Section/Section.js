import { Box, CircularProgress } from "@mui/material";
import React from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { useState } from "react";

function Section({ data, type, title }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {toggle ? "show All" : "collapse All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <Box sx={{ display: "flex" }} justifyContent={"center"}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardsWrapper}>
          {!toggle ? (
            <div className={styles.wrapper}>
              {data.map((item, i) => {
                return <Card data={item} key={i} type={type} />;
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default Section;