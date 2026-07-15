import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            <span className="text-blue-500">GET</span> IN TOUCH WITH US
          </h1>
          <p className="text-gray-600 mt-3">
            Feel free to reach out to us using the contact details below,
          </p>
          <p className="text-gray-600">
            and we'll be delighted to assist you.
          </p>
        </div>

        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          {/* Name & Contact */}
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Message */}
          <textarea
            placeholder="Write your message..."
            className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
  )
}

export default Contact