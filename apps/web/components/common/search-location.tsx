export function SearchLocation() {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[100000] bg-black/50 flex justify-center items-center">
            <div className="w-full max-w-[400px] bg-white rounded-lg p-5 flex flex-col">
                <div className="w-full flex flex-row justify-between">
                    <input
                        placeholder="Enter location"
                        className="flex-1 h-[47px] border border-gray-200 rounded-md px-5 py-2 outline-none"
                    />
                    <div className="bg-blue-500 h-[47px] w-[80px] ml-[10px] rounded-md flex justify-center items-center cursor-pointer">
                        <p className="font-semibold text-sm text-white">
                            Search
                        </p>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="my-2 py-2 cursor-pointer">
                        <p className="font-normal pl-1 text-xs mb-3 text-gray-400">
                            Godean
                        </p>
                        <div className="border-b border-black/20"></div>
                    </div>
                    <div className="my-2 py-2 cursor-pointer">
                        <p className="font-normal pl-1 text-xs mb-3 text-gray-400">
                            Godean
                        </p>
                        <div className="border-b border-black/20"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
