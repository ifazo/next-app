
export default function Loader() {
    return (
        <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                <div className="flex justify-center">
                    <div
                        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                        role="status"
                        aria-label="loading"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>

    )
}