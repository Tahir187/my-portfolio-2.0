"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {};

const ContactMe = ({}:Props) => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:muhammadtahirbharchoond@gmail.com?subject=${formData.subject}& body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`;
  };

  return (
    <div className="h-screen flex flex-col relative text-center max-w-5xl px-10 justify-evenly mx-auto items-center mb-10">
      <h3 className="uppercase  tracking-[16px] text-white text-2xl pt-20">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-5">
        <h4 className="text-3xl font-semibold text-center">
          I have got what you need. Lets talk.
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="w-7 h-7 animate-pulse" />
            <p className="">+92-3123722671</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="w-7 h-7 animate-pulse" />
            <p className="">muhammadtahirbharchoond@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="w-7 h-7 animate-pulse" />
            <p className="">Gulshan-e-Iqbal block 6, Karachi, Sindh</p>
          </div>
        </div>
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input 
            {...register('name')}
            className="contactInput" type="text" placeholder="Name" />

            <input 
            {...register('email')}
            className="contactInput" type="Email" placeholder="Email" />
          </div>
          <input 
          {...register('subject')}
          className="contactInput" type="text" placeholder="Subject" />

          <textarea
          {...register('message')}
          placeholder="Message" className="contactInput" />
          <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
