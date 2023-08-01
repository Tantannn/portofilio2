import "./Contents.css";

export default function Projects(props: any) {
  return (
    <div className="projects-contents">
      <img src={props.image} alt="Picture of the author" className="h-full" />
      <div>
        <span className="code">&lt;</span>
        {props.children}
        <span className="code">&#47;&gt;</span>
      </div>
    </div>
  );
}
