import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Quote() {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_1dwe1ld',
            'template_jt59ds9',
            form.current,
            'KU544GpjxCgm-uy_Z'
        ).then(() => {
            setSuccessMessage("Thanks! I'll get back to you soon.");
            setErrorMessage('');
            form.current.reset();
        }, () => {
            setErrorMessage("Oops! Something went wrong. Try again.");
            setSuccessMessage('');
        });
    };

    return (
        <section id="quote" className="w-full pt-20 pb-5 px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">

                {/* Left - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-yellow-300 text-[#00675b]  flex-1 p-10"
                >
                    <h3 className="text-3xl font-bold mb-4">Let's build something great!</h3>
                    <p className="text-[#00675b]  text-md">
                        Whether you need a full-stack MERN project, a Shopify store, or a custom API — I'm here to help. Drop your details and I’ll get back to you within 24 hours.
                    </p>
                </motion.div>

                {/* Right - Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-yellow-500 flex-1 p-10"
                >
                    <h3 className="text-2xl font-bold text-[#00675b] mb-4">Get in Touch</h3>



                    <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="user_name" type="text" placeholder="Your Name" required className="border px-4 py-3 w-full bg-yellow-100" />
                        <input name="user_email" type="email" placeholder="Email" required className="border px-4 py-3 w-full bg-yellow-100" />
                        <input name="user_phone" type="tel" placeholder="Phone (Optional)" className="border px-4 py-3 w-full bg-yellow-100" />

                        <select name="user_service" required className="border px-4 py-3 w-full bg-yellow-100">
                            <option disabled selected>Select a service</option>
                            <option>MERN Stack Development</option>
                            <option>Shopify Store Setup</option>
                            <option>API Development</option>
                            <option>Frontend Revamp</option>
                            <option>Other</option>
                        </select>

                        <textarea
                            name="message"
                            placeholder="Tell me about your project or requirements"
                            className="md:col-span-2 border-amber-50 px-4 py-3 w-full bg-yellow-100"
                            rows={4}
                            required
                        />

                        <div className="md:col-span-2">
                            <button type="submit" className="bg-[#00675b] text-white px-6 py-3 font-semibold hover:scale-105 transform transition duration-300">
                                Send Message
                            </button>
                            {successMessage && (
                                <div className="text-[#00675b]  font-medium my-4">{successMessage}</div>
                            )}
                            {errorMessage && (
                                <div className="text-red-500 font-medium my-4">{errorMessage}</div>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
