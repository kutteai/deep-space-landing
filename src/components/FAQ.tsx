import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Where can I buy cryptocurrency?",
    answer: "You can buy cryptocurrency on DCTAP through our secure exchange platform. Simply connect your wallet and follow the purchase process."
  },
  {
    question: "How do I use a bank card to purchase cryptocurrency?",
    answer: "Arbitrage fast Trade offers flexible payment methods, including Visa and Mastercard. Deposit fiat directly into your Master Account, expanding support for local currencies and payment option."
  },
  {
    question: "Which cryptocurrency should I buy today?",
    answer: "The best cryptocurrency to buy depends on your investment goals and risk tolerance. Research market trends and consider consulting with financial advisors."
  },
  {
    question: "Which bank card are supported by DCTAP for cryptocurrency purchases?",
    answer: "DCTAP supports most major credit and debit cards including Visa and Mastercard for cryptocurrency purchases."
  },
  {
    question: "Are there deposite limits on DCTAP?",
    answer: "Deposit limits vary based on your account verification level and payment method. Check your account settings for specific limits."
  },
  {
    question: "What are the risks?",
    answer: "Cryptocurrency trading involves market volatility, regulatory risks, and technical risks. Always invest responsibly and never invest more than you can afford to lose."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">The key to creation an affective FAQ page is to anticipate the question your customers or users may have and provide clear and concise answers.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-all"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
