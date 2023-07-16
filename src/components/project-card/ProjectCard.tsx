import "./project-card.scss";

function ProjectCard(props: PropsType) {
  const [image, setImage] = props.imageState;
  const [display, setDisplay] = props.display;
  const mouseEnterHandler = () => {
    setImage(props.imgUrl);
    setDisplay(true);
  };
  return (
    <div
      className="project-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={() => {
        setDisplay(false);
      }}
    >
      <div
        className="project-image"
        style={{
          backgroundImage: props.imgUrl,
        }}
      >
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="content-container">
        <h2>{props.content.title}</h2>
        <h4>{props.content.describtion}</h4>
        <div className="links">
          {props.content.live && (
            <a
              className="main-button"
              href={props.content.live}
              target="__blank"
            >
              Explore
            </a>
          )}
          {props.content.github && (
            <a
              className="main-button"
              href={props.content.github}
              target="__blank"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

type PropsType = {
  imgUrl: string;
  imageState: [string, React.Dispatch<React.SetStateAction<string>>];
  display: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  content: {
    title: string;
    describtion?: string;
    github: string;
    live?: string;
  };
};

export default ProjectCard;
