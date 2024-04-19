
const Testimonial = ({ name, quote, profession, company, image }) => {
  return (
    <div className="testimonial">
      <img src={image} alt={name} className="testimonial-image" />
      <p className="testimonial-quote">{quote}</p>
      <div className="testimonial-info">
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-profession">{profession},</span>
        <span className="testimonial-company">{company}</span>
      </div>
    </div>
  );
};

export default Testimonial;
