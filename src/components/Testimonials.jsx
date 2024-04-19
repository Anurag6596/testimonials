import Testimonial from '../components/Testimonial.jsx';


const testimonials = [
  {
    name: 'Darrell Steward',
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    profession: 'Web Developer',
    company: '@darrels',
    image: 'path/to/image1.jpg',
  },
  {
    name: 'Darrell Steward',
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    profession: 'Web Developer',
    company: '@darrels',
    image: 'path/to/image1.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What our customers say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.name}
            name={testimonial.name}
            quote={testimonial.quote}
            profession={testimonial.profession}
            company={testimonial.company}
            image={testimonial.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
