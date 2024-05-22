import { TestimonialCard } from '@/utils/TestimonialCard'
import testimonialData from '../assets/data/testimonial.json'
export const Testimonial = () => {
    return (
        <section>
            <h2 className="heading-primary--main white-head8">Testimonials</h2>
            <div className="testimonial-area">
                <div className="container">
                    <div className="testimonial-content owl-carousel">
                        {testimonialData.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}