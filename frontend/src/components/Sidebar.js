import React from 'react'

const Sidebar = () => {
    return (
    <div className="flex flex-col flex-1 w-64 bg-gray-900 h-full shadow-lg z-10">
        <div className="flex items-center pl-6 h-20 border-b border-gray-800">
            <img src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.0-9/117334168_2606581056324669_4951020710334194218_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFo4bRKc5SfTQvzhwotnTaOfj1P6rO41HF-PU_qs7jUcU1pCerqu3HUsOB0yKyJQwnrgz8Au7GZADcpedo6WgM4&_nc_ohc=DWpkI3p4RSUAX_hKF_Y&_nc_ht=scontent.fmnl13-1.fna&oh=c13c63ee952123b14f0da72b99ccecc8&oe=6087FEC5" alt="" className="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500" />
            <div className="ml-1">
                <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">JED DYLAN LEE</p>
                <div className="badge">
                       <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">Admin</span>
                </div>
            </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-6 space-y-1">
            <li className="px-5">
                <div className="flex flex-row items-center h-8">
                    <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Dashboard</div>
                </div>
            </li>
            <li>
                <a href="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </span>
                    <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Dashboard</span>
                </a>
            </li>
            
            <li className="px-5">
            <div className="flex flex-row items-center h-8">
                <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Settings</div>
            </div>
            </li>
            
            
        </ul>
        </div>
    </div>
    )
}

export default Sidebar
