import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 ">
      <div className="bg-white p-8 max-w-5xl flex ">
        {/* Contact Information */}
        <div className="w-1/2 pr-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Please do not hesitate to contact us for further assistance.
          </h2>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 text-blue-900 mr-2"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
            <span className="text-blue-900">contact@jpteks.cm</span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 text-blue-900 mr-2"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
            </svg>
            <span className="text-blue-900">
              + (237) 651 118 070 <br />
              + (237) 679 845 608 <br />
              + (237) 698 111 891 <br />
              + (237) 698 091 792
            </span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-6 h-6 text-blue-900 mr-2"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
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
              placeholder="Name*"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Email*"
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
