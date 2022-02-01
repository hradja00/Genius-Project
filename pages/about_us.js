import AboutUs from '../components/AboutUs';

export default function about_us() {
  return (
    <div className="flex items-center justify-center p-24 text-black">
      <div className="bg-white rounded-lg shadow-2xl w-2/4 font-extrabold">
        {/* header */}
        <header className="bg-[#ffff64] rounded-t-lg py-5 px-8 font-nunito text-4xl text-center underline">
          <p>ABOUT US</p>
        </header>

        {/* info */}
        <div className="p-8">
          <p>INFO</p>
        </div>

        {/* footer */}
        <footer className="bg-[#ffff64] rounded-b-lg py-5 px-8 font-nunito text-xl"></footer>
      </div>
    </div>
  );
}
