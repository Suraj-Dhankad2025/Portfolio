import img1 from '../assets/450.jpg'
import img2 from '../assets/github-mark.png'
import React from "react";
const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Deepanshu Attri"}
          feedback={"Nice Bro! Awesome css animation using SASS styling."}
          img={img1}
          github = "https://github.com/iamattri0001"
        />
        <TestimonialCard
          name={"Ganpati Mishra"}
          feedback={
            "Awesome, Great work in building Mobile and Web Apps"
          }
          img="https://img.freepik.com/free-vector/cute-cool-cat-wearing-eyeglasses-hoodie-cartoon-vector-icon-illustration-animal-fashion-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4234.jpg?size=338&ext=jpg&ga=GA1.1.678558253.1676296857&semt=sph"
          github = "https://github.com/iamattri0001"
        />
        <TestimonialCard
          name={"Sudhanshu Jha"}
          feedback={"I have given my mobile projects and he did amazing work"}
          img="https://avatars.githubusercontent.com/u/116909414?v=4"
          github = "https://github.com/SudhanshuDTU"
        />
      </section>
    </div>
  );
};
const TestimonialCard = ({ name, feedback ,img, github}) => (
  <article>
    <img
      src={img}
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
    <a href={github}><img src={img2} alt="Github" /></a>
  </article>
);
export default Testimonial;