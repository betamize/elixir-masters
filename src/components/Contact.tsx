'use client';
import React from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
import { SectionTitle } from './SectionTitle';
import { useForm, useWatch } from 'react-hook-form';

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface PopupWidgetProps {
  preTitle?: string;
  title?: string;
  align?: 'left' | 'center';
  children?: React.ReactNode;
}

// export function Contact(props: PopupWidgetProps) {
export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (data: any, e: any) => {
    console.log(data);
    reset();
  };

  // const onSubmit = (data: any) => {
  //   console.log(data);
  //   reset();
  // };

  return (
    <section id="contact">
      <SectionTitle
        preTitle="Get in Touch"
        title="Feel free to reach out to us. We’re here to help!"
      />

      <div className="w-full max-w-2xl mx-auto pb-8 pt-4 md:pb-12 md:pt-6">
        {/* <form action="#" method="POST">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                errors.name ? 'border-red-500' : ''
              }`}
              placeholder="Your Name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message as string}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="Your Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Email is invalid',
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message as string}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                errors.subject ? 'border-red-500' : ''
              }`}
              placeholder="Subject"
              {...register('subject', { required: 'Subject is required' })}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">
                {errors.subject.message as string}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                errors.message ? 'border-red-500' : ''
              }`}
              placeholder="Your Message"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">
                {errors.message.message as string}
              </p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
