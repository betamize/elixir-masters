import React from 'react';
import { SectionTitle } from './SectionTitle';
import {
  ChatBubbleBottomCenterTextIcon,
  CodeBracketSquareIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Elixir Development',
    description:
      'Tailored Elixir, Phoenix, LiveView, and Erlang solutions to meet your specific business needs.',
    icon: <CodeBracketSquareIcon />,
  },
  {
    title: 'Elixir Consulting',
    description:
      'Our expert consulting services help you navigate the complexities of Elixir development.',
    icon: <ChatBubbleBottomCenterTextIcon />,
  },
  {
    title: 'Hire Elixir Developers',
    description:
      'Our flexible hiring options allow you to bring on experienced Elixir developers as part of your team.',
    icon: <UserGroupIcon />,
  },
  {
    title: 'Maintenance & Support',
    description:
      'We provide comprehensive support to address any issues, perform updates, and keep your systems optimized.',
    icon: <WrenchScrewdriverIcon />,
  },
];

export const Services = () => {
  return (
    <section id="services">
      <SectionTitle
        preTitle="Our Services"
        title="Empower Your Business with Cutting-Edge Solutions"
      >
        <div className="max-w-4xl mx-auto px-5 text-left">
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {services.map((item, index) => (
              <div className="flex gap-4 items-start">
                <Service key={index} title={item.title} icon={item.icon}>
                  {item.description}
                </Service>
              </div>
            ))}
          </div>
        </div>
      </SectionTitle>
    </section>
  );
};

function Service(props: any) {
  return (
    <div className="flex items-start mt-8 space-x-12">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-50 rounded-full w-20 h-20 ">
        {React.cloneElement(props.icon, {
          className: 'w-8 h-8 text-indigo-500',
        })}
      </div>
      <div>
        <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}
