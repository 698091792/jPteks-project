import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl flex">
        {/* Contact Information */}
        <div className="w-1/2 pr-8 border-r border-gray-300">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Please do not hesitate to contact us for further assistance.
          </h2>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-900 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12V16M8 12V16M12 8V12M12 12l0 4M2 12l10-7l10 7" />
            </svg>
            <span className="text-blue-900">contact@jpteks.cm</span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-900 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12V16M8 12V16M12 8V12M12 12l0 4M2 12l10-7l10 7" />
            </svg>
            <span className="text-blue-900">+ (237) 651 118 070</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-900 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12V16M8 12V16M12 8V12M12 12l0 4M2 12l10-7l10 7" />
            </svg>
            <span className="text-blue-900">Logbessou, Douala</span>
          </div>
        </div>

        {/* Project Form */}
        <div className="w-1/2 pl-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Let's start a project together
          </h2>
          <form className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="name*"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="phone number*"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="email*"
              className="border border-gray-300 p-2 rounded-md col-span-2"
            />
            <input
              type="text"
              placeholder="Category"
              className="border border-gray-300 p-2 rounded-md"
            />
            <textarea
              placeholder="I wish a web app to manage ..."
              className="border border-gray-300 p-2 rounded-md col-span-2 h-32"
            ></textarea>
            <button
              type="submit"
              className="col-span-2 bg-yellow-600 text-white font-semibold py-2 rounded-md hover:bg-yellow-700"
            >
              SUBMIT PROJECT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
