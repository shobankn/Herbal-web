import React, { useState } from "react";
import "./F&Q.css"; // Import external CSS file

const FaqItem = ({ question, answer, isOpen, toggleFaq, isFirst }) => {
  return (
    <div className="faqItem">
      <div className={`faqQuestion ${isFirst ? "first" : ""}`} onClick={toggleFaq}>
        {question}
        <div className="faqIcon">{isOpen ? <span>−</span> : <span>+</span>}</div>
      </div>
      {isOpen && <div className="faqAnswer">{answer}</div>}
    </div>
  );
};

const FAQComponent = () => {
  const [openFaqId, setOpenFaqId] = useState(0);

  const faqData = [
    {
      id: 0,
      question: "What kind of diseases can Homeopathy cure?",
      answer:
        "Classical Homeopaths should be able to treat all acute diseases and also chronic degenerative conditions in their beginning stages. Once chronic conditions have reached their final stage, homeopathy can do very little for such patients.",
    },
    {
      id: 1,
      question: "What are Homeopathic remedies work?",
      answer:
        "Homeopathic remedies are highly diluted substances that work by stimulating the body's natural healing mechanisms.",
    },
    {
      id: 2,
      question: "How do Homeopathic remedies work?",
      answer:
        "Homeopathic remedies work based on the principle of 'like cures like' and are prepared through dilution and succussion processes.",
    },
    {
      id: 3,
      question: "How does a Homeopathic remedy affect the organism?",
      answer:
        "Homeopathic remedies affect the organism by stimulating the body's self-healing mechanisms at energetic and physiological levels.",
    },
    {
      id: 4,
      question: "Are Homeopathic remedies dangerous?",
      answer:
        "Homeopathic remedies are generally considered safe due to their extreme dilution, though proper consultation with qualified practitioners is recommended.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="container faq-container">
      <div className="header">
        <h2 className="headerTitle">Frequently Asked Questions</h2>
        <p className="headerSubtitle">Everything you need to know about the product and billing.</p>
      </div>

      <div className="faqList">
        {faqData.map((faq, index) => (
          <FaqItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFaqId === faq.id}
            toggleFaq={() => toggleFaq(faq.id)}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
