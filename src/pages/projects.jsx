import classes from "./projects.module.css";
import ButtHead from "../Components/content/buttHeader";
import ProjectTest from "./ProjectTest";

export default function ProjectPage() {
  // const handleChange = (projectId) => {
  //   setIsChanged(projectId);
  // };

  // function onLeave() {
  //   setIsChanged(false);
  // }
  const users = [
    {
      name: "hookah",
    },
    {
      name: "BlackJack",
    },
    {
      name: "Drums",
    },
    {
      name: "Tracks",
    },
  ];

  return (
    <>
      <ButtHead />
      <h1 className={classes.header}>
        A preview of some projects I have worked on
      </h1>
      <div className={classes.an}>
        <ul className={classes.container}>
          {users.map((user, index) => {
            return (
              <>
                <ProjectTest key={index} title={user.name} />
              </>
            );
          })}
          {/* ---- */}
          {/* <li
            className={classes.hookah}
            style={{
              opacity: !isChange ? 1 : 0.8,
            }}
            onMouseOver={() => handleChange(true)}
            onMouseLeave={onLeave}
          >
            <Hookah flag={isChange} />
          </li>
          <li
            className={classes.drums}
            style={{
              opacity: !isChange ? 1 : 0.8,
            }}
            onMouseOver={handleChange}
            onMouseLeave={onLeave}
          >
            <Drums flag={isChange} />
          </li>
          <li
            className={classes.blackjack}
            style={{
              opacity: !isChange ? 1 : 0.8,
            }}
            onMouseOver={handleChange}
            onMouseLeave={onLeave}
          >
            <BlackJack flag={isChange} />
          </li>
          <li
            className={classes.blackjack}
            style={{
              opacity: !isChange ? 1 : 0.8,
            }}
            onMouseOver={handleChange}
            onMouseLeave={onLeave}
          >
            <BlackJack flag={isChange} />
          </li> */}
        </ul>
      </div>
    </>
  );
}
