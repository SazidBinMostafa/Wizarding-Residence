import { useEffect } from 'react';
import './ContactUs.css'

const ContactUs = () => {

  useEffect(() => {
    document.title = "Contact Us - Wizarding Castle";
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    document.getElementById('my_modal_5').showModal()
  }

  return (
    <>
      <section id="ContactUs" className='py-14'>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <img
              src="/Owl.png"
              alt="Owl delivering message"
              className="w-96 border mx-auto"
            />
            <h3 className="font-bold text-xl text-center mt-5">You have successfully sent the message</h3>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white">
            Reach Out Us and Let the Magic Flow
          </h2>
          <div id="ContactUsDiv" className="md:col-span-1 rounded-lg shadow-md p-8 py-20 md:py-40 max-w-lg mx-auto">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-700 font-medium mb-2 text-sm hidden md:block"
                >
                  Name
                </label>
                <input
                  placeholder='Your Name'
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-md input-sm md:input-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-700"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-700 font-medium mb-2 text-sm hidden md:block"
                >
                  Email
                </label>
                <input
                  placeholder='Your Email'
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-md input-sm md:input-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-700"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-gray-700 font-medium mb-2 text-sm hidden md:block"
                >
                  Message
                </label>
                <textarea
                  placeholder='Your Message'
                  id="message"
                  name="message"
                  rows={4}
                  className="rounded-md textarea-xs md:textarea-sm border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-700"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Send Wizarding Mail
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
