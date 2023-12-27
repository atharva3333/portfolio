import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { toast, Toaster } from "react-hot-toast";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ynltt7j",
        "template_njpp76i",
        form.current,
        "H1qDLd54s8bADFeox"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = () => {
    toast.success("We have recieved your message", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="container">
      <Toaster
        toastOptions={{ duration: 4000 }}
        position="top-center"
        reverseOrder={false}
      />
      <div className="border-b-8 border-y-[#5EEAD4] w-24 my-12"></div>
      <h1 className="text-7xl font-bold my-5">📧Contact me</h1>
      <div className="my-auto mx-auto px-5 py-8 rounded-3xl">
        <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
          <label
            className="font-bold text-slate-300 text-xl"
            placeholder="your name"
          >
            Name
          </label>
          <input
            required
            className=" text-black border-2 rounded-md h-[35px] p-6"
            type="text"
            name="user_name"
          />
          <label
            className="font-bold text-slate-300 text-xl"
            placeholder="your email"
          >
            Email
          </label>
          <input
            required
            className=" text-black  border-2 rounded-md h-[35px] p-6"
            type="email"
            name="user_email"
          />
          <label
            className="font-bold text-slate-300 text-xl"
            placeholder="Your message"
          >
            Message
          </label>
          <textarea
            required
            className=" text-black border-2 rounded-md p-4 h-32"
            name="message"
          />
          <input
            className="bg-[#5EEAD4] bg-opacity-10 text-[#5EEAD4] px-12 py-8 inline-block text-xl mt-4 rounded-md  font-bold hover:opacity-80"
            type="submit"
            value="Send ✈️"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
