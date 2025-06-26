import { useState } from "react";
import Collapsible from "react-collapsible";
import { IoChevronDownSharp } from "react-icons/io5";

const faqs = [
  {
    trigger: "What services do you offer?",
    content:
      "We provide product design, web development, UX consulting, and tailored digital solutions to help bring your ideas to life.",
  },
  {
    trigger: "How does your design process work?",
    content:
      "Our process includes understanding goals, conducting user research, creating wireframes and prototypes, and iterating based on feedback.",
  },
  {
    trigger: "What are your project timelines?",
    content:
      "We establish clear timelines with milestones and regular check-ins to ensure projects stay on track and are delivered on schedule.",
  },
  {
    trigger: "Can you collaborate with existing teams?",
    content:
      "Yes! We integrate seamlessly with your current team to enhance design and development workflow without disruption.",
  },

  {
    trigger: "What is your pricing structure?",
    content:
      "We offer both fixed-price and hourly rate contracts, based on project complexity and client budget it's depend as well.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="p-4">
      <h1 className="text-4xl text-center py-4 lg:text-[48px] xl:text-[58px] xl:text-start xl:leading-tight" data-aos="fade-down">
        Frequently Asked <span className="text-[#8C49E9]">Questions</span>
      </h1>
      <div className="flex flex-col items-center gap-2" data-aos="fade-down">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <Collapsible
              key={i}
              open={isOpen}
              handleTriggerClick={() => toggle(i)}
              trigger={
                <div className="flex items-center justify-between px-2">
                  <span className="mr-2">{faq.trigger}</span>
                  <span
                    className="text-purple-500 transform transition-transform duration-200"
                    style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
                  >
                    <IoChevronDownSharp />
                  </span>
                </div>
              }
              triggerStyle={{ backgroundColor: "#2A2B2C", padding: "0.1rem" }}
              containerElementProps={{
                style: {
                  backgroundColor: "#2A2B2C",
                  padding: "0.1rem",
                  borderRadius: "0.5rem",
                  width:'100%'
                },
              }}
              className="lg:w-full"
            >
              <p className="p-2 pt-0 text-gray-300">{faq.content}</p>
            </Collapsible>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
