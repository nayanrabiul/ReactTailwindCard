import React from "react";

export default function App() {
    return (
        <div className="w-full h-[80vh] justify-center items-center flex">
            {/* card */}
            <div className="h-96 w-72 rounded-xl border">
                <img
                    src="/villageFarmer.jpg"
                    alt="village Farmer"
                    className="h-1/2 w-full rounded-t-xl"
                />
                {/* card body  */}
                <div className="p-6 flex flex-col justify-center items-start gap-3">
                    <h1 className="font-bold text-">
                        Beautiful Village, Farmer.
                    </h1>
                    <p className="font-extralight text-xs">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standar.
                    </p>
                    <div className="flex items-center gap-3 text-gray-500">
                        <button
                            className="rounded-xl bg-[#B0DDB7]  px-4 py-2 hover:bg-[#8FCF9D] 
                            hover:transform hover:scale-105 transition-transform"
                        >
                            Read More
                        </button>
                        <button
                            className="rounded-xl bg-[#B0DDB7]  px-4 py-2 hover:bg-[#8FCF9D] 
                            hover:transform hover:scale-105 transition-transform"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
