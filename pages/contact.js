import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function contact() {
  return (
    <div className="items-center -mt-32">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:items-stretch md:space-x-12 bg-black w-full max-w-4xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg text-white overflow-hidden ">
          <div className="md:py-4 flex-grow flex space-y-8 md:justify-between">
            <div className="">
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="text-cyan-100 text-sm pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                fugiat dicta iusto reprehenderit eum nihil similique.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                {/* <ion-icon
                  name="call"
                  className="text-xl text-teal-300"
                ></ion-icon> */}
                <span className="select-all">+(123) 456 7890</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                {/* <ion-icon name="mail" className="text-xl text-teal-300"></ion-icon> */}
                <span className="select-all">contact@musicstats.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                {/* <ion-icon name="location" className="text-xl text-teal-300"></ion-icon> */}
                <span className="select-all">11, Street 342, Abcd Fgh</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="hover:text-teal-300">
                {/* <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> */}
              </a>
              <a href="#" className="hover:text-teal-300">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#" className="hover:text-teal-300">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="#" className="hover:text-teal-300">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
          <div className="relative z-10">
            <div className="absolute -top-28 -right-28 z-0 bg-[#ffff64] opacity-90 w-40 h-40 rounded-full"></div>
            <div className="absolute -bottom-16 -left-28 z-0 bg-[#ffff64] opacity-90 w-40 h-40 rounded-full"></div>
            <div className="relative z-10 w-full md:w-80 h-full bg-[#2B2B2B] p-8 text-gray-600 rounded-xl shadow-lg min-h-[300px]">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label className="text-sm">Your name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label className="text-sm">Email Address</label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <textarea
                    placeholder="Type your message here"
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                    rows="4"
                  ></textarea>
                </div>
                <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
