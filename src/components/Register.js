// import React from 'react'
// import { Formik, Form, Field } from 'formik';
import arrowhead from '../assets/images/arrowhead.png'
import { form } from '../apis/form';

// const Register = () => {
//     const handleSubmit = async (values) => {

//         // setLoading(true);
//         console.log(values)
//         const response = await form(values);
//         console.log(response)
//         // setLoading(false);

//         if (response.status === 200) {
//             // setPopUpContent({ heading: "NOTICE", description: "The email has been sent!" });

//         } else {
//             // setPopUpContent({ heading: "NOTICE", description: "Unable to send email!" });
//         }
//         // setPopUp(true);

//     }
//     return (
//         <div className='flex flex-col  bg-middle text-white'>
//             <h1 className='ml-5 md:ml-20 mb-5 text-4xl font-bold pt-24 text-left'>Book Your Spot</h1>
//             <div className='overflow-hidden w-full flex flex-col md:flex-row md:justify-between md:items-start '>


//                 <div className='md:w-1/2 md:ml-36 '>
//                     <div className='flex flex-col items-center md:items-start md:pt-40'>
//                         <div className='w-52 h-52 bg-black'>

//                         </div>
//                         <div className='flex flex-col items-center md:flex-row'>
//                             <div className='md:text-3xl text-left mt-5'>
//                                 <h1>1. Scan this QR Code</h1>
//                                 <h1>2. Complete the Payment</h1>
//                                 <h1>3. Fill this form</h1>

//                             </div>
//                             <div className='opacity-0 md:opacity-100 w-fit h-fit ml-5 mt-1 overflow-hidden flex flex-row md:animate-pulse'>
//                                 <img src={arrowhead} alt="" className='opacity-50  w-32 h-32    overflow-hidden   ' />
//                                 <img src={arrowhead} alt="" className='-ml-10 opacity-50  w-32 h-32    overflow-hidden   ' />
//                             </div>
//                         </div>
//                         <div className='text-left -mt-20 md:mt-20'>
//                             * For Any Queries , contact :
//                             <a href='#'>+91 9188532851</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div data-aos="fade-left" className='md:w-1/3   w-fit px-10   shadow-xl rounded-xl border-2 border-violet-300  md:mr-60 py-5'>
//                     <h3 className='text-center  text-xl text-db-text-h mt-3  md:text-2xl'>Registration Form</h3>
//                     <Formik
//                         onSubmit={handleSubmit}
//                         enableReinitialize={true}
//                         initialValues={{
//                             name: "",
//                             email: "",
//                             mobile_number: "",
//                             college_name: "",
//                             transaction_id: "",
//                             image: ""

//                         }}
//                         className='flex flex-col  '>

//                         {(values, setFieldValue) => (
//                             <Form className='flex flex-col w-full'>
//                                 <div className='flex flex-col mt-4 items-start'>
//                                     <h3 className=' mt-2 font-medium'>Name <span className='text-red-400'>{'*'}</span></h3>
//                                     <Field required id="name" name="name" className=' bg-transparent outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' type={"text"} />
//                                 </div>
//                                 <div className='flex flex-col mt-4 items-start'>
//                                     <h3 className=' mt-2 font-medium'>Email <span className='text-red-400'>{'*'}</span></h3>
//                                     <Field required id="email" name="email" className=' bg-transparent outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' type={"email"} />
//                                 </div>
//                                 <div className='flex flex-col mt-4 items-start'>
//                                     <h3 className=' mt-2 font-medium'>Mobile Number <span className='text-red-400'>{'*'}</span></h3>
//                                     <Field required id="mobile_number" name="mobile_number" className=' bg-transparent outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' type={"text"} />
//                                 </div>
//                                 <div className='flex flex-col mt-4 items-start'>
//                                     <h3 className=' mt-2 font-medium'>College Name <span className='text-red-400'>{'*'}</span></h3>
//                                     <Field required id="college_name" name="college_name" className=' bg-transparent outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' type={"text"} />
//                                 </div>
//                                 <div className='flex flex-col mt-4 items-start'>
//                                     <h3 className=' mt-2 font-medium'>Transaction Id <span className='text-red-400'>{'*'}</span></h3>
//                                     <Field required id="transaction_id" name="transaction_id" className=' bg-transparent outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' type={"text"} />
//                                 </div>
//                                 <div className='flex flex-col mt-4 items-start'>
//                                     <h3 className='mt-3 font-medium'>Screenshot of the payment</h3>

//                                     <input id="image" type="file" onChange={(event) => {
//                                         setFieldValue("file", event.currentTarget.files[0]);
//                                     }} />
//                                     {/* <Field id="image" name="image" className='mt-2' type="file" /> */}
//                                 </div>

//                                 <div className='mt-7 flex flex-row '>
//                                     <button type="submit" className='text-black font-semibold hover:border-db-text-ph hover:text-white bg-violet-200 hover:bg-violet-700 rounded-md px-3 md:py-1 mr-5'>Submit</button>
//                                     <button type="reset" onClick={Formik.resetForm} className='  hover:border-gray-400   bg-gray-200  rounded-md px-3 md:py-1 text-black '>Reset</button>
//                                 </div>

//                             </Form>
//                         )}
//                     </Formik>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Register


import React from "react";
import { useState } from 'react';
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
    transaction_id: yup.string().required("Required"),

});
const Register = () => {
    const [cOpen, setCOpen] = useState(false);
    const inst = [
        {
            desc: "hahahaha"
        },
        {
            desc: "hahahaha"
        },
        {
            desc: "hahahaha"
        },
        {
            desc: "hahahaha"
        },
    ]



    const handleSubmit = async (values) => {

        // setLoading(true);
        // console.log(values)
        const response = await form(values);
        // console.log(response)
        // setLoading(false);

        if (response.status === 200) {
            // setPopUpContent({ heading: "NOTICE", description: "The email has been sent!" });

        } else {
            // setPopUpContent({ heading: "NOTICE", description: "Unable to send email!" });
        }
        // setPopUp(true);

    }

    return (

        <div className='flex flex-col  bg-middle text-white'>
            <h1 className='ml-5 md:ml-20 mb-5 text-4xl font-bold pt-24 text-center md:text-left'>Book Your Spot</h1>
            <div className='overflow-hidden w-full flex flex-col md:flex-row md:justify-between md:items-start '>


                <div className='md:w-1/2 md:ml-36 '>
                    <div className='flex flex-col items-center md:items-start md:pt-40'>
                        <div className='mt-10 w-full flex flex-col md:flex-row justify-center md:justify-between items-center '>
                            <div className='mt-10 w-full flex flex-col items-center  md:flex-row   '>
                                <div className=' w-52 h-52 bg-black '>

                                </div>
                                <div className='hidden md:block w-20 h-52 border-r-2  '>

                                </div>
                            </div>
                            <div className='relative'>
                                <div className='text-lg mt-10 font-bold md:absolute -right-20    '>
                                    ashwinbinu2002@okicicic
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col items-center md:flex-row'>
                            <div className='md:text-3xl text-left mt-5 flex flex-col items-center justify-center'>
                                <h1>Complete the Payment Using this QR Code or UPI ID </h1>
                                {/* <h1>2. Complete the Payment</h1> */}
                                <h1>And Fill the form below</h1>

                            </div>
                            <div className='opacity-0 md:opacity-100 w-fit h-fit ml-5 mt-1 overflow-hidden flex flex-row md:animate-pulse'>
                                <img src={arrowhead} alt="" className='opacity-50  w-32 h-32    overflow-hidden   ' />
                                <img src={arrowhead} alt="" className='-ml-10 opacity-50  w-32 h-32    overflow-hidden   ' />
                            </div>
                        </div>
                        <div className='text-left -mt-20 md:mt-20'>
                            * For Any Queries , contact :
                            <a href='#'>+91 9188532851</a>
                        </div>
                    </div>
                </div>
                <div className='mt-10  flex flex-col items-center md:items-end w-full'>
                    <div data-aos="fade-left" className='flex flex-col items-center justify-center  md:w-2/5   w-fit px-10   shadow-xl rounded-xl border-2 border-violet-300  md:mr-60 py-5'>
                        <h3 className='text-center  text-xl text-db-text-h mt-3  md:text-2xl'>Registration Form</h3>
                        <Formik
                            validationSchema={validationSchema}
                            initialValues={{
                                name: "",
                                email: "",
                                mobile_number: "",
                                college_name: "",
                                transaction_id: "",
                                image: "",
                            }}
                            onSubmit={handleSubmit}
                        >
                            {({ values, setFieldValue, formProps }) => (
                                <Form className='flex flex-col'>
                                    <div className='flex flex-col mt-4 items-start'>
                                        <label className=' mt-2 font-medium'>Name:</label>
                                        <Field className=' bg-transparent outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' name="name" type="text" />
                                        <KErrorMessage name="name" />
                                    </div>
                                    {/* <br /> <br /> */}
                                    <div className='flex flex-col mt-4 items-start'>
                                        <label className=' mt-2 font-medium'>Phone:</label>
                                        <Field className=' bg-transparent outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' name="mobile_number" type="number" />
                                        <KErrorMessage name="mobile_number" />
                                    </div>
                                    <div className='flex flex-col mt-4 items-start'>
                                        <label className=' mt-2 font-medium'>Email:</label>
                                        <Field className=' bg-transparent outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' name="email" type="email" />
                                        <KErrorMessage name="email" />
                                    </div>
                                    <div className='flex flex-col mt-4 items-start'>

                                        <label className=' mt-2 font-medium'>College Name:</label>
                                        <Field className=' bg-transparent outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' name="college_name" type="text" />
                                        <KErrorMessage name="college_name" />
                                    </div>
                                    <div className='flex flex-col mt-4 items-start'>
                                        <label className=' mt-2 font-medium'>Transaction ID:</label>
                                        <Field className=' bg-transparent outline-none  rounded-md py-1 px-4 mt-2 w-full placeholder-slate-500 placeholder-opacity-50 text-violet-900 outline focus:outline-form-border  bg-violet-200 ' name="transaction_id" type="text" />
                                        <KErrorMessage name="transaction_id" />
                                    </div>
                                    <div className='flex flex-col mt-4 items-start'>




                                        <h3 className='mt-3 font-medium'>Screenshot of the payment</h3>

                                        {/* <form onSubmit={handleImgSubmit}>
                                    <input type='file' name='file' onChange={handleFileChange}></input>
                                    <button type='submit'>Add Screenshot</button>
                                </form> */}
                                        {/* <input type='file' name='file' onChange={handleFileChange}> */}

                                        {/* </input> */}
                                        {/* <button type='submit'>Add Screenshot</button> */}
                                        <input id="image" name="image"
                                            // value={values.image} 
                                            type="file"
                                            onChange={(event) => setFieldValue("image", event.currentTarget.files[0])} />
                                        {/* <Field id="image" name="image" className='mt-2' type="file" /> */}
                                    </div>
                                    <div className='mt-7 flex flex-row '>
                                        <button type="submit" className='text-black font-semibold hover:border-db-text-ph hover:text-white bg-violet-200 hover:bg-violet-700 rounded-md px-3 md:py-1 mr-5'>Submit</button>
                                        <button type="reset" onClick={Formik.resetForm} className='  hover:border-gray-400   bg-gray-200  rounded-md px-3 md:py-1 text-black '>Reset</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center   w-full px-10    ' >

                <button
                    onClick={(e) => {
                        setCOpen(!cOpen);
                    }}
                    className={`text-xl ${cOpen ? " bg-gray-600 " : "bg-gray-700"
                        } px-4 my-14   mx-10 text-white  capitalize w-fit rounded-md shadow-md font-bold text-left`}
                >
                    Instructions
                </button>
                <div className={`flex flex-col ${cOpen ? " border-2 border-violet-300 " : " border-0"} w-fit px-10 rounded-xl  `}>
                    {cOpen && inst.map((e) => (
                        <div className="p-3 text-sm ">
                            <div className="flex flex-row  p-1 rounded-md ">
                                {/* <Icon className="w-10" /> */}
                                <div download className="font-medium"><span className="font-extrabold">.</span> {e.desc}</div>

                            </div>

                        </div>
                    ))}
                </div>
            </div >
        </div >
    );
};

export default Register;