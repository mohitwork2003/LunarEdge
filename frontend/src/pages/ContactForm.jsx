import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import TextInput from "../components/TextInput";
import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import { apiRequest } from "../utils";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/userSlice";

const ContactForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  //   state for error message

  const [errMsg, setErrMsg] = useState("");
 
  const dispatch = useDispatch();
  

  // handle handle button
  const handleClick = async (data) => {
    try {
    // const res = await apiRequest({
    //     url : '/register',
    //     method : 'POST',
    //     data : data,
    // })
    // console.log(res)
    window.localStorage.setItem('user','true')
    dispatch(userLogin('true'))
    } 
    catch (error){
        setErrMsg('Error occured while registering!')
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-[#236385] rounded-lg pr-7 pt-6">
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
          {/* left side of form  */}
          <div>
            <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help.
            </p>

            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
                <AiOutlineMail className="h-[16px] w-[16px] text-white" />
                <a href="" className="text-white text-sm ml-4">
                  info@lunaredge.input
                </a>
              </li>

              <li className="flex items-center">
                <FiPhoneCall className="h-[16px] w-[16px] text-white" />
                <a href="" className="text-white text-sm ml-4">
                  <p> 9829011076 (Sandeep Katariya)</p>
                </a>
              </li>

              <li className="flex items-center">
                <FiPhoneCall className="h-[16px] w-[16px] text-white" />
                <a href="" className="text-white text-sm ml-4">
                  <p> 7760701155 (Sanjeev Ola)</p>
                </a>
              </li>

              <li className="flex items-center">
                <CiLocationOn className="h-[20px] w-[20px] text-white" />
                <a href="" className="text-white text-sm ml-4">
                  address-203, Manglam, Signature Tower, Lal Kothi, Gandhi
                  Nagar, jaipur, Rajasthan
                </a>
              </li>
            </ul>
          </div>

          {/* right side of form  */}

          <div className="relative">
            {/* close icon  */}
            <div
              className="absolute -right-9 -top-10 text-2xl font-black cursor-pointer"
              onClick={onClose}
            >
              <RxCross1 />
            </div>

            {/* form container */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <form
                className="mt-8 space-y-4"
                onSubmit={handleSubmit(handleClick)}
              >
                {/* name  */}

                <TextInput
                  name="name"
                  placeholder="Your Name"
                  type="text"
                  register={register("name", {
                    required: "name is required",
                  })}
                  error={errors?.name ? errors?.name?.message : ""}
                />

                {/* Mobile Number  */}

                <TextInput
                  name="mobileNumber"
                  placeholder="Contact Number"
                  type="tel"
                  register={register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Invalid mobile number. Please enter 10 digits.",
                    },
                  })}
                  error={
                    errors?.mobileNumber ? errors?.mobileNumber?.message : ""
                  }
                />

                {/* email  */}

                <TextInput
                  name="email"
                  placeholder="email@example.com"
                  type="email"
                  register={register("email", {
                    required: "email is required",
                  })}
                  error={errors?.email ? errors?.email?.message : ""}
                />

                {/* subject  */}

                <TextInput
                  name="subject"
                  placeholder="Subject"
                  type="text"
                  register={register("subject", {
                    required: "Subject is required",
                  })}
                  error={errors?.subject ? errors?.subject?.message : ""}
                />

                {/* message content  */}

                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#06425f]"
                  {...register("message")}
                ></textarea>

                {/* submit button  */}
                <button
                  type="submit"
                  className="text-white bg-[#1c4f6e] hover:bg-[#2b5c77e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
                >
                  Send Message
                </button>

                {/* close button  */}

                <div className="text-right">
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-[#1c4f6e] hover:underline"
                  >
                    Close
                  </button>
                </div>

                {/* displaying error message  */}

                {errMsg?.message && (
                  <span
                    className={`text-sm mt-0.5 ${
                      errMsg?.status == "failed"
                        ? "text-[#f64949fe]"
                        : "text-[#2ba150fe]"
                    }`}
                  >
                    {errMsg.message}
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
