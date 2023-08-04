import "./Contents.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Projects(props: any) {
  useEffect(() => {
    AOS.init({
      offset: 150, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 300, // values from 0 to 3000, with step 50ms
    });
  });
  return (
    <div className="projects-contents" data-aos="fade-up">
      <img src={props.image} alt="Picture of the author" className="h-full" />
      <div>
        <p>{props.children}</p>
      </div>
    </div>
  );
}
