import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHY_US } from "@/constants";

const Whyus = () => {
  return (
    <div className="container mx-auto my-20">
      <h2 className="mb-2 text-center text-3xl font-extrabold sm:text-4xl lg:text-5xl">
        Why Choose Us?
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {WHY_US.map((why, index) => (
          <AccordionItem key={index} value={why.value}>
            <AccordionTrigger className="text-2xl">
              {why.question}
            </AccordionTrigger>
            <AccordionContent className="text-xl">
              {why.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Whyus;
