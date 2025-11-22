const testimonials = [
  {
    quote: "I did a withdrawal request and it was very fast, it got me excited that Arbitrage is trusted and reliable platform. Very fast and reliable especially when withdrawing and buying of coin",
    name: "Martin Krauss",
    role: "Trader"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">What our customers are saying?</h2>
          <p className="text-muted-foreground">The key to creation an affective FAQ page is to anticipate the question your customers or users may have and provide clear and concise answers.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-card border-2 border-primary/30 rounded-3xl p-8 shadow-glow">
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">{testimonials[0].quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary"></div>
              <div>
                <h4 className="font-semibold text-lg">{testimonials[0].name}</h4>
                <p className="text-muted-foreground">{testimonials[0].role}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-primary' : 'bg-muted'}`}></div>
              ))}
            </div>
          </div>

          <div className="relative h-96 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 shadow-glow flex items-center justify-center">
            {/* Space for testimonial image */}
            <div className="text-center text-muted-foreground">
              <p className="text-sm">Customer Photo Space</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
