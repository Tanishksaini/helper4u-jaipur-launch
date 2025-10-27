import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When will Helper4U launch in Jaipur?",
    answer: "We're launching in December 2025! Join the waitlist now to be among the first 100 users and get lifetime free Pro access with zero platform fees.",
  },
  {
    question: "How does the verification process work?",
    answer: "Every helper undergoes a comprehensive 3-step verification: (1) ID and address proof verification, (2) Police background check, (3) Reference and skill assessment. Only verified helpers can join our platform.",
  },
  {
    question: "Can I hire helpers for just a few hours?",
    answer: "Absolutely! Helper4U offers complete flexibility. You can book help for as little as 2 hours or for daily, weekly arrangements - whatever suits your needs.",
  },
  {
    question: "What types of helpers are available?",
    answer: "We connect you with maids, cooks, drivers, salesmen, caretakers, and other household/shop helpers. Each helper's skills are verified and rated by previous clients.",
  },
  {
    question: "Is there a platform fee for early users?",
    answer: "The first 100 users who join our waitlist will get lifetime free Pro access with ZERO platform fees forever! After that, we'll have affordable pricing for both employers and helpers.",
  },
  {
    question: "How do I know helpers are trustworthy?",
    answer: "All helpers are background-verified with police checks, ID verification, and reference checks. Plus, you can see ratings, reviews, and work history before booking anyone.",
  },
  {
    question: "Can helpers create profiles too?",
    answer: "Yes! If you're looking for work as a helper, you can join our waitlist and create your professional profile. Get matched with jobs near you and build your rating to earn more.",
  },
  {
    question: "Will Helper4U expand to other cities?",
    answer: "Yes! We're starting with Jaipur in December 2025, and based on the success, we plan to expand to other tier-2 cities across Rajasthan and India.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
