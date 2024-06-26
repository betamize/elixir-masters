'use client';
import React from 'react';
import { Container } from '@/components/Container';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a wide range of services including Elixir Development, Consulting and Training, Hiring Elixir Developers on an hourly or monthly basis, and Maintenance & Support. Our expertise extends to Phoenix Framework, LiveView, Erlang, as well as other technologies like Node, React, Java, Python, and Ruby on Rails etc.',
  },
  {
    question: 'Why should I choose Elixir for my project?',
    answer:
      'Elixir is known for its scalability, reliability, and high performance, especially for applications that require handling numerous simultaneous connections. Built on the Erlang VM, Elixir provides fault-tolerant systems that ensure high availability and robust performance.',
  },
  {
    question: 'Can you help us hire Elixir developers?',
    answer:
      'Yes, we offer flexible hiring options for Elixir developers. You can hire our experienced developers on an hourly basis for specific tasks or on a monthly basis for long-term projects. This allows you to scale your team according to your project needs.',
  },
  {
    question: 'What kind of support do you provide after development?',
    answer:
      'Our Maintenance & Support services include regular updates, 24/7 support, performance monitoring, and bug fixing. We ensure your applications run smoothly and efficiently, minimizing downtime and maintaining peak performance.',
  },
  {
    question: 'How do you ensure the quality of your solutions?',
    answer:
      'Quality is at the core of everything we do. We adhere to the highest standards of development practices from the initial consultation to the final delivery. Our rigorous testing and quality assurance processes ensure that you receive a top-notch product that meets your expectations.',
  },
];
