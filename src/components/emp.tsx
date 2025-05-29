import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Our commitment to innovation and excellence drives everything we do. We don't just deliver solutions, we create lasting impact for our clients and partners",
      name: "Ravi prakash MN",
      designation: "Managing director",
      src: "/01emp.jpeg",
    },
    {
      quote:
        "Safety isn't just a protocol — it's a culture we live by. Our top priority is ensuring every team member returns home safe, every single day.",
      name: "Yaswanth kulal",
      designation: "safety Incharge",
      src: "/02emp.jpeg",
    },
    {
      quote:
        "Engineering solutions that are efficient, reliable, and innovative is what drives our success. Every project is an opportunity to push the boundaries of technology.",
      name: "Chethan BS",
      designation: "Electrical Engineer",
      src: "/03emp.jpeg",
    },
    {
      quote:
        "Precision, reliability, and innovation are at the core of every system we design. Our goal is to power progress through smart and sustainable engineering.",
      name: "Amal AS",
      designation: "Safety officer",
      src: "/04emp.jpeg",
    },
    {
      quote:
        "Successful projects don’t happen by chance — they’re built on clear vision, strong collaboration, and disciplined execution. We turn plans into results.",
      name: "Pandurangan",
      designation: "Project Manager",
      src: "/05emp.jpeg",
    },
    {
      quote:
        "With over 15 years in the field, I've learned that quality, safety, and attention to detail make all the difference. Every connection we make powers trust and reliability.",
      name: "Santhosh MN",
      designation: "Senior electricians 15 year  of experience",
      src: "/06emp.jpeg",
    },
    {
      quote:
        "Sixteen years on the job have taught me that expertise and a commitment to safety are the keys to delivering lasting electrical solutions our clients can depend on.",
      name: "Yaswantha MN",
      designation: "Senior electricians 16 year experience",
      src: "/07emp.jpeg",
    },  {
      quote:
        "Experience has shown me that meticulous workmanship and a proactive approach to safety ensure every project runs smoothly and stands the test of time.",
      name: "Dharshan M",
      designation: "Senior electricians 15 year experience in our organization",
      src: "/08emp.jpeg",
    },
    {
      quote:
       "Effective supervision is about guiding teams with clarity and support to achieve goals efficiently while maintaining high standards of quality and safety.",
      name: "Shivashankar",
      designation: "Supervisor",
      src: "/09emp.jpeg",
    },

  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
