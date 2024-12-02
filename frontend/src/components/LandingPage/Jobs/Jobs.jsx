import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { useState } from "react";
const jobs = [1, 2, 3, 4, 5, 6];
const SavesJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Jobs = () => {
  const [jobsFlag, setJobsFlag] = useState(false);

  return (
    <div className=" w-3/6 max-lg:w-full">
      <div className=" border-b-2 border-slate-400 flex items-center gap-5 py-5">
        <button
          onClick={() => setJobsFlag(false)}
          className={`${
            !jobsFlag &&
            "underline underline-offset-8 decoration-orange-300 decoration-4 "
          }`}
        >
          Recommended
        </button>
        <button
          onClick={() => setJobsFlag(true)}
          className={`${
            jobsFlag &&
            "underline underline-offset-8 decoration-orange-300 decoration-4 "
          } `}
        >
          Saved Jobs(7)
        </button>
      </div>
      <div className=" overflow-y-scroll scroll-hide h-screen mt-5 grid gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {!jobsFlag
          ? jobs.map((item, index) => (
              <div
                key={index}
                className=" border space-y-2 border-slate-400 rounded-sm shadow-lg p-5"
              >
                <Link to={""} className=" text-xl font-semibold text-blue-600">
                  UX/UI Designers
                </Link>
                <h1>Webcare Solutions pvt.Itd</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe, modi ex a facere sit cupiditate esse, tempore eveniet
                  vero nam quis ullam fugiat molestias qui quas ducimus nulla
                  quos magnam.
                </p>
                <div className=" flex justify-between">
                  <div className="">
                    <div className=" flex items-center gap-4">
                      <MdDateRange />
                      <p>5 - 6 yrs</p>
                    </div>
                    <div className=" flex items-center gap-4">
                      <MdDateRange />
                      <p>5 - 6 yrs</p>
                    </div>
                    <div className="">
                      1 day ago -{" "}
                      <span className=" text-blue-600">Save job</span>
                    </div>
                  </div>
                  {/* ---- */}
                  <div className=" flex items-end">
                    <button className=" bg-blue-600 text-white font-semibold  h-f px-4 py-1 rounded-sm shadow-lg">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))
          : SavesJobs.map((item, index) => (
              <div
                key={index}
                className=" border space-y-2 border-slate-400 rounded-sm shadow-lg p-5"
              >
                <Link to={""} className=" text-xl font-semibold text-blue-600">
                  UX/UI Designers {item}
                </Link>
                <h1>Webcare Solutions pvt.Itd</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe, modi ex a facere sit cupiditate esse, tempore eveniet
                  vero nam quis ullam fugiat molestias qui quas ducimus nulla
                  quos magnam.
                </p>
                <div className=" flex justify-between">
                  <div className="">
                    <div className=" flex items-center gap-4">
                      <MdDateRange />
                      <p>5 - 6 yrs</p>
                    </div>
                    <div className=" flex items-center gap-4">
                      <MdDateRange />
                      <p>5 - 6 yrs</p>
                    </div>
                    <div className="">
                      1 day ago -{" "}
                      <span className=" text-blue-600">Save job</span>
                    </div>
                  </div>
                  {/* ---- */}
                  <div className=" flex items-end">
                    <button className=" bg-blue-600 text-white font-semibold  h-f px-4 py-1 rounded-sm shadow-lg">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Jobs;
