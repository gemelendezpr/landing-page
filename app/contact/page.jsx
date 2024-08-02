"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "in/gerardomelendezpr",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gerardomelendez05@gmail.com",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_name: "Recipient Name", // customize or take it as input
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Message not sent!");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto mb-20 px-4">
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-[30px]">
          <div className="w-full xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-6 sm:p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-3xl sm:text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Ready to transform innovative concepts into cutting-edge solutions. Contact me to explore new opportunities together.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select
                name="service"
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Software Development">
                      Software Development
                    </SelectItem>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" size="md" className="w-full sm:w-auto">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6 sm:gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 sm:gap-6">
                  <div className="w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[20px] sm:text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-black/60 text-sm sm:text-base">{item.title}</p>
                    <h3 className="text-base sm:text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
