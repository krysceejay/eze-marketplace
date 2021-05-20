import React from 'react'
import Slider from './Slider'

const Sidebar = () => {
    return (
        <aside className="flex-none w-1/4 bg-gray-900 px-10 py-8">
        <section id="categories" className="mb-10">
          <h3 className="text-white mb-6 text-xl">Categories</h3>
          <ul className="text-white">
            <li className="mb-3">All</li>
            <li className="mb-3">iPhone</li>
            <li className="mb-3">Samsong</li>
            <li className="mb-3">iPad</li>
            <li className="mb-3">MacBook</li>
            <li className="mb-3">Airpod</li>
          </ul>
        </section>
        <section id="price-filter" className="mb-10">
          <h3 className="text-white mb-6 text-xl">Price Filter</h3>
          <Slider min={0} max={1000} />
          <div className="mt-16">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Min" />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Max" />
          </div>
        </section>

        <section id="storage-filter" className="mb-10">
        <h3 className="text-white mb-6 text-xl">Storage</h3>
        <div className="flex flex-col">
          <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600"/><span className="ml-2 text-white">All</span>
          </label>
          <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" /><span className="ml-2 text-white">32GB</span>
          </label>

          <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" /><span className="ml-2 text-white">64GB</span>
          </label>

          <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-white">128GB</span>
          </label>

          <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-600" /><span className="ml-2 text-white">256</span>
          </label>

          <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" /><span className="ml-2 text-white">512GB</span>
          </label>
      </div>
        </section>
      </aside>
    )
}

export default Sidebar
