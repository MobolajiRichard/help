
import { useState } from "react";
import Image from "next/image";
import { contact } from "@/assets/Images";
import { Call, Chat, Profile, Message } from "@/assets/icons";
import { AlternateEmail } from "@mui/icons-material";

const Contact = () => {
  //state to hold message's data
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  //state to keep track of the message sending status
  const [isSending, setIsSending] = useState<boolean>(false);

  //state to hold form error
  const [formError, setFormError] = useState<boolean>(false);

  //function to submit form data
  const onSubmit = () => {
    setIsSending(true)

   //set form error to false
    setFormError(false);

    //only executes the function if all fields are filled
    if (name && subject && message) {
     //turn form data to send to an api
      const data = {
        name,
        subject,
        message,
      };

      //take an action with the data, api link will be here
      setTimeout(() => {
        console.log(data);
      }, 10000)

      setIsSending(false)
      //clear form field after message is sent successfully
      setName('')
      setSubject('')
      setMessage('')
    } else {
      setIsSending(false)
      //if all details aren't filled set formError to true
      setFormError(true);     
    }
  };
  return (
    <div className="my-10 flex flex-col items-center" id='contact'>
      <p className="text-center text-primary font-bold">Contacts</p>
      <p className="text-center font-raleway text-2xl font-bold mb-4 ">
        Contact us
      </p>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center md:border-2 border-grey-500 rounded-xl w-full md:w-[80%] md:shadow-lg py-6">
        <div className="flex flex-col items-center basis-1/2">
          <Image src={contact} alt="contact-hero" width={300} />
          <div className="flex flex-row mt-5 md:ml-[20%]">
            <div className="flex text-sm">
              <Call />
              <div className="ml-2">
                <p className="font-bold">Call us</p>
                <p className="text-[12px]">+351-965-990-000</p>
              </div>
            </div>
            <div className="flex text-sm md:ml-4">
              <AlternateEmail />
              <div className="ml-2">
                <p className="font-bold">Our email</p>
                <p className="text-[12px]">@helpyou@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form section */}
        <div className="basis-1/2 w-full md:px-[5%] px-[1%] mt-4 md:mt-0">
          <div className="contact_input">
            <Profile />
            <input
              placeholder="Your Name"
              className="outline-none ml-2 grow"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contact_input">
            <Message />
            <input
              placeholder="Your Subject"
              className="outline-none ml-2 grow"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="contact_input items-start">
            <Chat />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="outline-none ml-2 grow resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className="bg-primary rounded-[20px] text-white w-full p-2"
            onClick={onSubmit}
          >
            {isSending ? 'sending...' : 'Send'}
          </button>

          {/* Error message being displayed conditionally, renders only if formError is true */}
          {formError && (
            <p className="text-center text-red-500 font-bold mt-2">
              Please fill all details
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
