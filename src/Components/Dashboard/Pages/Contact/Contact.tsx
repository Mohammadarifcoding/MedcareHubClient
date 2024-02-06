import { useRef } from "react";
import emailjs from '@emailjs/browser';
import React from 'react'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_six49lq', 'template_0wtvvgs', form.current, 'e8Z45O-_XOj6xbt2W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="mt-6">
            <h2 className="text-center mb-6 text-black text-3xl font-bold"> Contact <span className="text-pink-600">Me</span></h2>
            <hr />
            <div className="grid mt-4 md:grid-cols-2 mb-8">
                <div className="text-black text-xl font-semibold ml-6">
                    <p>Phone Number: 01890545497</p>
                    <p>email: afsanajannat205@gmail.com</p>
                </div>

                <div className="text-xl ml-4 text-black font-bold">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label><br />
                        <input type="text" className="h-10 w-64 text-sm
                        text-pink-500 p-2 rounded-xl" name="to_name" /><br />
                        <label>Email</label> <br />
                        <input type="email" className="h-10 w-64 text-sm
                        text-pink-500 p-2 rounded-xl " name="email_id" /><br />
                        <label>Message</label> <br />
                        <textarea name="message" className="text-pink-500 p-2" /> <br />
                        <input className="btn mt-4 bg-pink-600 text-xl font-bold text-white" type="submit" value="Send" />
                    </form>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Contact;