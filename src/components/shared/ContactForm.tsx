// components/forms/ContactForm.tsx
import React from "react";

export const ContactForm: React.FC = () => {
  return (
    <div id="cta" className="bg-white/5 text-gray-300 p-8 rounded-2xl shadow-sm lg:pb-1">
      <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
      <p className="text-gray-300 text-sm mb-6">
        You&apos;re one conversation away from total financial clarity. Whether
        you’re looking for smarter bookkeeping, expert tax planning, or
        strategic advisory, we’re here to help.
      </p>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
        />

        {/* <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none">
          <option value="">Service Type</option>
          <option value="bookkeeping">Bookkeeping</option>
          <option value="tax">Tax Planning</option>
          <option value="advisory">Financial Advisory</option>
        </select> */}

        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#B8B9F0] text-black py-4 mt-3 cursor-pointer rounded-lg font-medium transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};
