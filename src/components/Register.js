import { PopUpContext } from '../context/PopUpContext';
import wlogo from '../assets/images/whatsapp.png'
import qr from '../assets/images/qr.jpeg'
import { form } from '../apis/form';
import Features from '../components/Features'

// import LocalLoader from './LocalLoader';

// export default Register


import React from "react";
import { useState, useContext } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import KErrorMessage from "./KErrorMessage";

const validationSchema = yup.object({
    name: yup.string().required("Name is Required!"),
    mobile_number: yup
        .number()
        .required("Phone is Required!"),

    email: yup.string().required("Email is required"),
    college_name: yup.string().required("Required"),


});
const Register = () => {

    const [link, setLink] = useState(false);
    const [closed, setClosed] = useState(false);

    const { popUpState, popUpContentState } = useContext(PopUpContext);
    const [popUp, setPopUp] = popUpState;
    const [popUpContent, setPopUpContent] = popUpContentState;

    const [loading, setLoading] = useState(false);

    const [cOpen, setCOpen] = useState(false);
    const inst = [

        {
            desc: ` It will be a one-day long  free session.
            `
        },
        {
            desc: ` Participants are required to bring their own Laptops for the session.
            `
        },

        {
            desc: `More details will be provided later`
        },
    ]



    const handleSubmit = async (values) => {

        setLoading(true);
        if (values) {
            const response = await form(values);
            setLoading(false);

            // setPopUpContent({ heading: "NOTICE", description: "The email has been sent!" });
            if (response.status === 200) {
                setPopUpContent({ heading: "NOTICE", description: "Registration Successfull ! " });
                setLink(true);


            } else if (response.status === 409) {
                setPopUpContent({ heading: "NOTICE", description: "Registration with this Email already exists !!!" });
            }
            else {
                setPopUpContent({ heading: "NOTICE", description: "Registration Unsuccessfull !!!" });
            }
        }
        setPopUp(true);

    }

    return (

        <div id={"reg_id"} className='flex flex-col  bg-middle text-white'>
            <h1 className='ml-5 md:ml-20  text-4xl font-bold pt-24 text-center md:text-left font-font1'>Book Your Spot</h1>
            <h2 className='ml-5 md:ml-20  text-xl text-violet-400 pt-2 text-center md:text-left italic'>Limited seats, hurry!</h2>


            <div className='overflow-hidden w-full  flex flex-col md:flex-row   '>


                <div className='mt-10  flex flex-col items-center  w-full h-full   '>
                    <div className=' md:ml-36  '>

                        <div className='flex flex-col items-center md:items-center md:pt-40'>

                            <div className='mt-1 w-full px-10 flex flex-col md:flex-row justify-center md:justify-between items-center '>

                                <div className='text-left text-base md:font-medium md:text-2xl leading-6 rounded-xl border-2 border-violet-300  p-6 w-3/4/12'>

                                    <p className='  font-font1'>Get to learn from the best</p>
                                    <p className='  font-font1'>Chance to win exciting goodies</p>
                                    <p className='  font-font1'>Hands-on experience assured</p>
                                </div>


                            </div>
                            <div className='flex flex-col items-center md:flex-row'>


                            </div>
                            {link &&
                                <div className="hidden md:visible md:flex md:flex-row border h-fit border-dashed hover:animate-pulse hover:text-green-200 hover:border-emerald-700 rounded-lg border-violet-300 w-fit text-white mt-16 p-3 text-md  ">
                                    <img src={wlogo} className="scale-75" />
                                    <a href='https://chat.whatsapp.com/F6SBt0dasEiKv1BPUPMhI0' target="_blank" className="font-medium">Now join this Whatsapp Group</a>



                                </div>
                            }

                            {/* <div className='text-left -mt-20 md:mt-20'>
                            * For Any Queries , contact :
                            <a href='#'>+91 9188532851</a>
                        </div> */}
                        </div>
                    </div>
                </div>

                <div className='mt-10  flex flex-col items-center md:items-end w-full '>
                    {closed ?
                        <div className='border-2 border-violet-300 md:mr-80 rounded-md md:mt-60 md:w-2/5 h-fit  w-fit px-10 font-font1'>Sorry , Registration Form Closed </div> :
                        <div data-aos="fade-left" className='flex flex-col items-center justify-center  md:w-2/5   w-fit px-10   shadow-xl rounded-xl border-2 border-violet-300  md:mr-60 pb-10 py-5'>
                            <h3 className='text-center  text-lg text-db-text-h mt-3 font-font1  md:text-xl'>Registration Form</h3>
                            <Formik
                                validationSchema={validationSchema}
                                initialValues={{
                                    name: "",
                                    email: "",
                                    mobile_number: "",
                                    college_name: "",
                                    // transaction_id: "",
                                    // image: "",
                                }}
                                onSubmit={handleSubmit}
                            >
                                {({ values, setFieldValue, formProps }) => (
                                    <Form className='flex flex-col'>
                                        <div className='flex flex-col mt-4 items-start'>
                                            <label className=' mt-2 font-medium'>Name:</label>
                                            <Field className=' outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' name="name" type="text" />
                                            <KErrorMessage name="name" />
                                        </div>
                                        {/* <br /> <br /> */}
                                        <div className='flex flex-col mt-4 items-start'>
                                            <label className=' mt-2 font-medium'>Phone:</label>
                                            <Field className='  outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' name="mobile_number" type="number" />
                                            <KErrorMessage name="mobile_number" />
                                        </div>
                                        <div className='flex flex-col mt-4 items-start'>
                                            <label className=' mt-2 font-medium'>Email:</label>
                                            <Field className='  outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' name="email" type="email" />
                                            <KErrorMessage name="email" />
                                        </div>
                                        <div className='flex flex-col mt-4 items-start'>

                                            <label className=' mt-2 font-medium'>College Name:</label>
                                            <Field className=' outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' name="college_name" type="text" />
                                            <KErrorMessage name="college_name" />
                                        </div>
                                        {/* <div className='flex flex-col mt-4 items-start'>
                                        <label className=' mt-2 font-medium'>Transaction ID:</label>
                                        <Field className=' outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' name="transaction_id" type="text" />
                                        <KErrorMessage name="transaction_id" />
                                    </div> */}

                                        <div className='mt-7 flex flex-row '>
                                            <button disabled={loading ? true : false} type="submit" className='text-black font-semibold hover:border-db-text-ph hover:text-white bg-violet-200 hover:bg-violet-700 rounded-md px-3 md:py-1 mr-5'>
                                                Submit
                                            </button>
                                            <button type="reset" onClick={Formik.resetForm} className='  hover:border-gray-400   bg-gray-200  rounded-md px-3 md:py-1 text-black '>Reset</button>
                                        </div>
                                        <p className='text-left pt-10'><span className='text-red-400'>*</span>Your registration will be confirmed only when you recieve a confirmation mail.<br />It may take a while</p>
                                    </Form>

                                )}
                            </Formik>
                        </div>
                    }


                </div>
            </div>
            <div className='w-full flex flex-col items-center'>
                {link &&
                    <div className=" md:hidden flex flex-row border h-fit border-dashed hover:animate-pulse hover:text-green-200 hover:border-emerald-700 rounded-lg border-violet-300 w-fit text-white mt-16 p-3 text-md  ">
                        <img src={wlogo} className="scale-75" />
                        <a href='https://chat.whatsapp.com/F6SBt0dasEiKv1BPUPMhI0' target="_blank" className="font-medium">Now join this Whatsapp Group</a>



                    </div>
                }
            </div>
            <div className='flex flex-col items-center justify-center   w-full px-10   my-10  ' >


                {!cOpen && <div data-aos="fade-bottom" className={`flex flex-col ${!cOpen ? " border-2 border-violet-300 " : " border-0"} w-fit px-10 rounded-xl  pb-5 md:mt-10`}>
                    <p
                        // onClick={(e) => {
                        //     setCOpen(!cOpen);
                        // }}
                        className={`text-xl 
                    
                      mt-6 mb-2 px-4 font-font1 text-white  capitalize rounded-md shadow-md font-bold text-center w-full`}
                    >
                        Instructions
                    </p>
                    {!cOpen && inst.map((e) => (
                        <div className="p-3 text-sm ">
                            <div className="flex flex-row  p-1 rounded-md ">
                                {/* <Icon className="w-10" /> */}
                                <div className="font-medium"><span className="font-extrabold">.</span> {e.desc}</div>

                            </div>

                        </div>
                    ))}
                </div>}
            </div >
        </div >
    );
};

export default Register;