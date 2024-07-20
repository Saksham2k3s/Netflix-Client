import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoAdd } from "react-icons/io5";
function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation()
  const faqs = [
    {
      Question: t('faqs.Question1'),
      Answer: t('faqs.Answer1')
    },
    {
      Question: t('faqs.Question2'),
      Answer: t('faqs.Answer2')
    },
    {
      Question: t('faqs.Question3'),
      Answer: t('faqs.Answer3')
    },
    {
      Question: t('faqs.Question4'),
      Answer: t('faqs.Answer4')
    },
    {
      Question: t('faqs.Question5'),
      Answer: t('faqs.Answer5')
    },
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full bg-black text-white items-center text-center">
      <div className="flex flex-col items-center align-middle justify-center">
        {faqs.map((faq, idx) => {
          return (
            <div key={idx} className="w-2/3 bg-[#2d2d2d] mt-2 md:mt-5 ">
              <div className="flex justify-between items-center h-20">
                <h1 className="text-white text-xl md:text-2xl ml-5">{faq.Question}</h1>
                <IoAdd
                  className={`mr-5 text-3xl md:text-5xl cursor-pointer transform transition-transform duration-300 ${
                    openIndex === idx ? "rotate-45" : ""
                  }`}
                  onClick={() => handleToggle(idx)}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? "max-h-screen" : "max-h-0"
                }`}
              >
                {openIndex === idx && (
                  <>
                    <div className="w-full h-1 bg-black"></div>
                    <div className="text-white text-xl md:text-2xl text-start w-full bg-[#2d2d2d] my-5 px-5">
                      {faq.Answer}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn mb-5 " >{t('btn.Finish Sign Up')}</button>
    </div>
  );
}

export default FAQs;
