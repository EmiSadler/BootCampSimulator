function TestimonialCard({ review, name, role, avatar }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">★★★★★</div>
      <p className="testimonial-text">{review}</p>
      <div className="testimonial-author"> </div>
      <div className="author-avatar">{avatar}</div>
      <div className="author-info">
        <div className="author-name">{name}</div>
        <div className="author-title">{role}</div>
      </div>
    </div>
  );
}

export default TestimonialCard;
