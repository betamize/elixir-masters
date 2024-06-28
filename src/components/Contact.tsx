"use client";
import React, { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ mode: "onTouched" });

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    console.log("process.env.SERVICE_ID", process.env.SERVICE_ID);
    console.log("process.env.TEMPLATE_ID", process.env.TEMPLATE_ID);
    console.log("process.env.PUBLIC_KEY", process.env.PUBLIC_KEY);

    await emailjs
      .send(
        process.env.SERVICE_ID as string,
        process.env.TEMPLATE_ID as string,
        data,
        {
          publicKey: process.env.PUBLIC_KEY as string,
        }
      )
      .then(
        () => {
          setIsSuccess(true);
          reset();
        },
        (error) => {
          console.log("ERROR", error);

          setIsSuccess(false);
        }
      );
  };

  return (
    <section id="contact">
      <SectionTitle
        preTitle="Get in Touch"
        title="Feel free to reach out to us. We’re here to help!"
      />

      <div className="w-full max-w-2xl mx-auto pb-8 pt-4 md:pb-12 md:pt-6">
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
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
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
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is invalid",
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
                errors.subject ? "border-red-500" : ""
              }`}
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
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
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
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

        {isSubmitSuccessful && (
          <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
            {isSuccess ? (
              <h3 className="py-5 text-xl text-green-500">
                Message sent successfully
              </h3>
            ) : (
              <h3 className="text-xl text-red-400 py-7">
                Oops, Something went wrong!
              </h3>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
