import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import customer1 from "@/assets/customer-1.png";

const testimonials = [
  {
    quote: "I did a withdrawal request and it was very fast, it got me excited that Arbitrage is trusted and reliable platform. Very fast and reliable especially when withdrawing and buying of coin",
    name: "Martin Krauss",
    role: "Trader",
    image: customer1
  },
  {
    quote: "The automated trading bots have completely changed how I invest in crypto. I'm earning passive income while I sleep. This platform is a game-changer!",
    name: "Sarah Chen",
    role: "Crypto Investor",
    image: customer1
  },
  {
    quote: "Security and transparency are paramount for me. Being able to verify every transaction on-chain gives me complete peace of mind. Highly recommended!",
    name: "James Rodriguez",
    role: "Day Trader",
    image: customer1
  },
  {
    quote: "The copy trading feature is incredible. I follow top performers and my portfolio has grown 45% in just 3 months. Best decision I've made!",
    name: "Emily Watson",
    role: "New Trader",
    image: customer1
  }
];

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">What our customers are saying?</h2>
          <p className="text-muted-foreground">The key to creation an affective FAQ page is to anticipate the question your customers or users may have and provide clear and concise answers.</p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="grid md:grid-cols-2 gap-12 items-center p-4">
                  <Card className="bg-card border-2 border-primary/30 rounded-3xl p-8 shadow-glow h-full flex flex-col justify-between">
                    <p className="text-lg mb-8 text-muted-foreground leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary"></div>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full transition-all ${
                              i === index ? 'bg-primary w-8' : 'bg-muted'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <div className="relative h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 shadow-glow overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} - ${testimonial.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
