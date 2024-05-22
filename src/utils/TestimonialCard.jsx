export const TestimonialCard = ({ testimonial }) => (
    <div className="single-testimonial">
        <p>{testimonial.description}</p>
        <div className="test-info">
            <div className="test-image">
                <a href={testimonial.linkedin}><img src={testimonial.photo} alt="" className="size" /></a>
            </div>
            <div className="test-details">
                <h6>{testimonial.name}</h6>
                <span>Alumni from <b>{testimonial.company}</b></span>
            </div>
        </div>
    </div>
);
