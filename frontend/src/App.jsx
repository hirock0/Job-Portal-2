import { FaSearch } from "react-icons/fa";
import { LiaHandshake } from "react-icons/lia";
import { RiLeafFill } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";

import Jobs from "./components/LandingPage/Jobs/Jobs";
import Top_Industries from "./components/LandingPage/Top_Industries/Top_Industries";

const App = () => {
  const onSearch = (e) => {
    e.preventDefault();
  };

  return (
    <main className="">
      {/* banner section start */}
      <section className=" mt-10">
        <div className=" flex  max-lg:flex-col-reverse">
          <div className=" w-1/2 max-lg:w-full">
            <img
              src="https://i.ibb.co.com/j5yBfgL/pngwing-com.png"
              alt="achieve"
              className=" w-full h-full object-contain"
            />
          </div>
          <div className=" flex items-center justify-center w-1/2 max-lg:w-full ">
            <div className=" p-5 space-y-5">
              <button className=" bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg">
                86000 open positions
              </button>
              <h1 className=" text-5xl font-semibold">
                Find your next exiting job
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                nam animi officia ullam odit, possimus neque veniam fuga dolor
                labore omnis nisi doloribus culpa tenetur id minima. Optio,
                incidunt delectus.
              </p>
              <div className="">
                <form
                  onSubmit={onSearch}
                  className="  rounded-full bg-white shadow-lg overflow-hidden relative h-12 flex items-center"
                >
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    className=" h-full w-3/6 pl-5 outline-none"
                  />
                  <select
                    name="location"
                    className="h-full w-3/6 pl-2 outline-none"
                  >
                    <option value="">Select Location</option>
                    <option value="Jashore">Jashore</option>
                    <option value="Manirampur">Manirampur</option>
                    <option value="Khulna">Khulna</option>
                  </select>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className="h-full w-full pl-2 outline-none"
                  />
                  <button
                    type="submit"
                    className=" w-16 absolute right-0 group bg-blue-600 active:bg-blue-700 text-white h-full flex items-center justify-center"
                  >
                    <FaSearch
                      size={20}
                      className=" group-hover:text-yellow-400"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner section end */}
      {/* -------------------------- */}
      <section className=" bg-slate-800 text-2xl py-10 text-white">
        <div className="  h-full">
          <div className="">
            <h1 className="text-center text-3xl font-semibold">
              Get Hired in top companies.
            </h1>
          </div>
          <div className=" mt-6 lg:flex lg:items-center lg:justify-between max-lg:grid max-lg:grid-cols-3 max-lg:gap-5 max-lg:justify-items-center max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className=" opacity-50">
              <h1>MakeLess</h1>
            </div>
            <div className=" flex opacity-50 items-center gap-2">
              <LiaHandshake size={25} />
              <h1>Coworks</h1>
            </div>
            <div className="opacity-50 flex items-center gap-2">
              <RiLeafFill size={25} />
              <h1>Greener</h1>
            </div>
            <div className="opacity-50 flex items-center gap-2">
              <FaRegCircle size={25} />
              <h1>SAAS TODAY</h1>
            </div>
            <div className="opacity-50">
              <h1>Dorfus</h1>
            </div>
            <div className="opacity-50">
              <h1>Askimat</h1>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------- */}
      {/* jobs_section_start */}

      <section>
        <div className=" flex gap-4 py-10 max-lg:flex-col-reverse">
          {/* left */}
          <Jobs />
          {/* ------------ */}
          {/* right */}
          <Top_Industries />
        </div>
      </section>
      {/* jobs_section_end */}
    </main>
  );
};

export default App;
