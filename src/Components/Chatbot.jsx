import React, { useState } from 'react'
import { motion } from 'framer-motion';

export default function Chatbot() {
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! I'm Lucy. I'm here to help you with any questions you might have about Rohit's work." },
        { sender: "bot", text: "How can I help you Today?" },
    ]);

    const options = [
        "Tell me about Rohit's work",
        "Can we collaborate?",
        "How can I reach you?",
        "Can I get your contact details?",
        "Just saying hello!",
        "Interested in mentorship",
    ];

    const responses = {
        "Tell me about Rohit's work": { type: "text", text: "I specialize in web development, UI/UX design, and digital solutions. Please visit my work page to see my projects." },
        "Can we collaborate?": { type: "text", text: "I love collaborating on meaningful projects! Let me know your ideas, and we can discuss how to work together." },
        "How can I reach you?": { type: "text", text: "You can email me at rohitkushwahac@gmail.com or contact directly through LinkedIn." },
        "Can I get your contact details?": {
            type: "link",
            text: "Sure! Click here to message me on WhatsApp 📲",
            url: "https://wa.me/919503588850"
        },
        "Just saying hello!": { type: "text", text: "Hey there! I hope you've enjoyed browsing my work. Let me know if I can help with anything! 😊" },
        "Interested in mentorship": { type: "text", text: "I'm always happy to help aspiring developers! But right now I'm not available for mentorship. But I can help you with your queries." },
    };


    const handleUserMessage = (text) => {
        setMessages((prev) => [...prev, { sender: "user", text }]);

        // Add typing indicator
        setMessages((prev) => [...prev, { sender: "typing", text: "Luccy is typing..." }]);

        setTimeout(() => {
            const response = responses[text];

            // Remove typing and add bot response
            setMessages((prev) => {
                const updated = prev.filter((msg) => msg.sender !== "typing");

                // If it's a WhatsApp link
                if (response?.type === "link") {
                    window.open(response.url, "_blank");
                }

                return [
                    ...updated,
                    { sender: "bot", text: response?.text || "I'm here to help! Let me know what you're looking for." }
                ];
            });
        }, 1000);
    };


    return (
        <div className="fixed bottom-6 left-1/2 translate-x-[-50%] lg:left-auto lg:right-6 lg:translate-x-0 z-50">
            {/* Toggle Button */}
            <button
                onClick={() => setChatOpen(!chatOpen)}
                className={`bg-green-900 relative right-0 text-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap text-sm sm:text-base ${chatOpen ? "animate-bounce" : ""} transition-all duration-300`}
                style={{
                    boxShadow: chatOpen ? "0 4px 20px rgba(0, 0, 0, 0.5)" : "0 2px 10px rgba(0, 0, 0, 0.3)",
                }}
            >
                {chatOpen ? "✖" : "💬 Ask me a question"}
            </button>

            {/* Chat Window */}
            {chatOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="w-[90vw] sm:w-[370px] h-[80vh] sm:h-[510px] mt-4 bg-green-100 text-black p-4 rounded-lg shadow-xl z-50 flex flex-col"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center bg-gradient-to-tl from-teal-500 to-teal-800 text-white p-2 rounded-t-md">
                        <span className="font-acron">Luccy Bot</span>
                    </div>

                    {/* Unified Chat Area */}
                    <div className="flex-1 mt-2 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 flex flex-col">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-xl my-1 max-w-[90%] break-words ${msg.sender === "typing"
                                    ? "self-start bg-amber-100 text-gray-500"
                                    : msg.sender === "bot"
                                        ? "self-start bg-amber-200 text-black"
                                        : "self-end bg-green-600 text-white"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                        {/* Suggestion Buttons inside the same scroll block */}
                        <div className="flex flex-col gap-2 mt-2">
                            {options.map((option, index) => (
                                <button
                                    key={index}
                                    className="border border-green-900 text-green-900 px-2 py-1 rounded-md hover:bg-green-900 hover:text-white text-sm text-left"
                                    onClick={() => handleUserMessage(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
