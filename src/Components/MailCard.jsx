import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const mailOptions = [
  {
    label: "Collaboration",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=rohitkushwahac@gmail.com&su=Collaboration Opportunity&body=Hi Rohit,%0D%0A%0D%0AI came across your work and was really impressed. I’d love to collaborate on a project with you. Let me know if you’re open to a quick chat sometime this week.%0D%0A%0D%0ABest regards,"
  },
  {
    label: "Feedback",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=rohitkushwahac@gmail.com&su=Great Work!&body=Hi Rohit,%0D%0A%0D%0AI just browsed through your portfolio and wanted to say—your work is absolutely amazing! Keep up the awesome job.%0D%0A%0D%0AWould love to stay in touch.%0D%0A%0D%0ACheers,"
  },
  {
    label: "Mentorship",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=rohitkushwahac@gmail.com&su=Mentorship Guidance&body=Hi Rohit,%0D%0A%0D%0AI’m a developer looking to grow and came across your work. I was wondering if you offer mentorship or could spare a few tips for someone starting out.%0D%0A%0D%0AThanks in advance!"
  },
  {
    label: "Job Opportunity",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=rohitkushwahac@gmail.com&su=Project Inquiry&body=Hi Rohit,%0D%0A%0D%0AI’m reaching out to see if you’re available for a freelance/project-based opportunity. Please let me know your availability and how best to proceed.%0D%0A%0D%0ALooking forward to hearing from you!"
  }
];

export default function MailCard() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="cursor-pointer p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
      >
        <FaEnvelope size={40} />
        <p className="text-center mt-2 font-semibold">Mail</p>
      </div>

      {showOptions && (
        <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-56">
          {mailOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 hover:bg-green-100 text-sm"
              onClick={() => setShowOptions(false)}
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
