import classes from "./ProjectTest.module.css";
import { useState } from "react";
import html from "../Components/langIcons/html.png";
import css from "../Components/langIcons/css.png";
import js from "../Components/langIcons/Js.png";
import py from "../Components/langIcons/py.jpeg";
import react from "./logo512.png";

export default function ProjectTest({ title }) {
  const getClassName = (title) => {
    switch (title) {
      case "hookah":
        return classes.hookah;
      case "BlackJack":
        return classes.BlackJack;
      case "Drums":
        return classes.Drums;
      case "Tracks":
        return classes.Tracks;
      default:
        return classes.default;
    }
  };

  //   const getName = (title) => {
  //     switch (title) {
  //       case "hookah":
  //         return hookah;
  //     }
  //   };

  const [isChanged, setIsChanged] = useState(false);

  const handleChange = (projectId) => {
    setIsChanged(projectId);
  };
  function onLeave() {
    setIsChanged(false);
  }
  return (
    <>
      <li
        className={`${getClassName(title)}`}
        style={{
          opacity: !isChanged ? 1 : 0.8,
        }}
      >
        <h2
          onMouseOver={() => handleChange(true)}
          onMouseLeave={onLeave}
          className={classes.header}
        >
          {title === "hookah" && isChanged ? (
            <>
              <a
                className={classes.an}
                href="https://rafael12ma.github.io/html-hookah-project/"
                target="_blank"
                rel="noreferrer"
              >
                View
                <div className={classes.container1}>
                  <div className={classes.container}>
                    <div className={classes.images}>
                      <img src={html} alt="Html" />
                      <img src={css} alt="Css" />
                      <img src={js} alt="Javascript" />
                    </div>
                  </div>
                </div>
              </a>
            </>
          ) : null}

          {title === "BlackJack" && isChanged ? (
            <>
              <a
                className={classes.an}
                href="https://github.com/Rafael12Ma/Black-Jack"
                target="_blank"
                rel="noreferrer"
              >
                View
                <div className={classes.container1}>
                  <div className={classes.container}>
                    <div className={classes.images}>
                      <img src={py} alt="Python" />
                    </div>
                  </div>
                </div>
              </a>
            </>
          ) : null}

          {title === "Drums" && isChanged ? (
            <>
              <a
                className={classes.an}
                href="https://rafael12ma.github.io/Drums-1/"
                target="_blank"
                rel="noreferrer"
              >
                View
                <div className={classes.container1}>
                  <div className={classes.container}>
                    <div className={classes.images}>
                      <img src={html} alt="Html" />
                      <img src={css} alt="Css" />
                      <img src={js} alt="Javascript" />{" "}
                    </div>
                  </div>
                </div>
              </a>
            </>
          ) : null}
          {title === "Tracks" && isChanged ? (
            <>
              <a
                className={classes.an}
                href="https://github.com/Rafael12Ma/Tracks_React_native"
                target="_blank"
                rel="noreferrer"
              >
                View
                <div className={classes.container1}>
                  <div className={classes.container}>
                    <div className={classes.images}>
                      {/* <img src={html} alt="Html" /> */}
                      {/* <img src={css} alt="Css" /> */}
                      <img src={react} alt="React Native" />
                      {/* <img src={js} alt="Javascript" />{" "} */}
                    </div>
                  </div>
                </div>
              </a>
            </>
          ) : null}
        </h2>
      </li>
    </>
  );
}

// AN THELW NA PROSTHESW NEO PROJECT PREPEI NA PARW
// TO KATW TMHMA KAI NA PROSTHESW TIS KATALLILES
// LEPTOMEREIES GIA NA DOYLEPSEI.( na valw to name sto users,
// na prosthesw css .XXXXX kai na valw to ternary) EPISHS PREPEI NA
// DHMIOURGISW KAI STO MODULE.CSS ONOMA ME TO PROJECT
// XRISIMOPOIWNTAS TA IDIA STYLE

// {title == "Drums" && isChanged ? (
//     <>
//       <a
//         className={classes.an}
//         href="https://rafael12ma.github.io/Drums-1/"
//         target="_blank"
//         rel="noreferrer"
//       >
//         View
//         <div className={classes.container1}>
//           <div className={classes.container}>
//             <div className={classes.images}>
//               <img src={html} alt="Html" />
//               <img src={css} alt="Css" />
//               <img src={js} alt="Javascript" />{" "}
//             </div>
//           </div>
//         </div>
//       </a>
//     </>
//   ) : null}
