import { LuHeartPulse } from "react-icons/lu";
import { Link } from "react-router-dom";

const Industries = [1,2,3,4,5,6]
const Top_Industries = () => {
    return (
        <div className=" w-3/6 max-lg:w-full ">
            <div className="mt-5">
                    <div className=" flex items-center justify-between p-5 bg-zinc-200">
                        <h1>Top Industries</h1>
                        <button className=" text-blue-600 font-semibold">View All</button>
                    </div>
                    {/* ---------- */}

                    <div className="">
                            <div className=" grid grid-cols-3 max-md:grid-cols-2 ">
                                {
                                    Industries.map((item,index)=>(
                                        <Link to={"/#home"} key={index} className="border h-32 flex flex-col gap-2 items-center justify-center">
                                            <LuHeartPulse  size={40}/>
                                            <h1 className=" text-xl font-semibold text-blue-600">Healthcare</h1>
                                        </Link>      
                                    ))
                                }
                            </div>
                    </div>
            </div>
            <div className="mt-5">
                    <div className=" flex items-center justify-between p-5 bg-zinc-200">
                        <h1>Top Industries</h1>
                        <button className=" text-blue-600 font-semibold">View All</button>
                    </div>
                    {/* ---------- */}

                    <div className="">
                            <div className=" grid grid-cols-3 max-md:grid-cols-2 ">
                                {
                                    Industries.map((item,index)=>(
                                        <Link to={"/#jobs"} key={index} className=" border h-32 flex flex-col gap-2 items-center justify-center">
                                            <LuHeartPulse  size={40}/>
                                            <h1 className=" text-xl font-semibold text-blue-600">Healthcare</h1>
                                        </Link>      
                                    ))
                                }
                            </div>
                    </div>
            </div>
            <div className="mt-5">
                    <div className=" flex items-center justify-between p-5 bg-zinc-200">
                        <h1>Top Industries</h1>
                        <button className=" text-blue-600 font-semibold">View All</button>
                    </div>
                    {/* ---------- */}

                    <div className="">
                            <div className=" grid grid-cols-3 max-md:grid-cols-2 ">
                                {
                                    Industries.map((item,index)=>(
                                        <Link to={"/#jobs"} key={index} className=" border h-32 flex flex-col gap-2 items-center justify-center">
                                            <LuHeartPulse  size={40}/>
                                            <h1 className=" text-xl font-semibold text-blue-600">Healthcare</h1>
                                        </Link>      
                                    ))
                                }
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Top_Industries
