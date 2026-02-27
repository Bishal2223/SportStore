import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row">
    
        <div className="md:w-1/2 bg-black text-white p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-5xl font-black italic mb-6">CONNECT WITH <br/> THE TEAM</h2>
          <p className="text-gray-400 mb-12 max-w-sm">
            Need help with an order or looking for custom team uniforms? Our specialists are on standby.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-orange-600 p-3 rounded-full"><Mail size={20}/></div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Email Us</p>
                <p className="font-bold">bishalchy402@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-600 p-3 rounded-full"><Phone size={20}/></div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Call Us</p>
                <p className="font-bold">+977 9800000000</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-600 p-3 rounded-full"><MapPin size={20}/></div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">HQ</p>
                <p className="font-bold">Itahari-08, Sunsari, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-12 md:p-24 bg-gray-50">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase mb-2">First Name</label>
                <input type="text" className="w-full p-4 border-b-2 border-gray-200 bg-transparent outline-none focus:border-orange-600 transition" placeholder="Alex"/>
              </div>
              <div>
                <label className="block text-xs font-black uppercase mb-2">Last Name</label>
                <input type="text" className="w-full p-4 border-b-2 border-gray-200 bg-transparent outline-none focus:border-orange-600 transition" placeholder="Smith"/>
              </div>
            </div>
            <div>
              <label className="block text-xs font-black uppercase mb-2">Email Address</label>
              <input type="email" className="w-full p-4 border-b-2 border-gray-200 bg-transparent outline-none focus:border-orange-600 transition" placeholder="alex@example.com"/>
            </div>
            <div>
              <label className="block text-xs font-black uppercase mb-2">Message</label>
              <textarea rows="5" className="w-full p-4 border-b-2 border-gray-200 bg-transparent outline-none focus:border-orange-600 transition resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="flex items-center justify-center gap-3 w-full bg-black text-white py-5 font-black uppercase tracking-widest hover:bg-orange-600 transition group">
              Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;