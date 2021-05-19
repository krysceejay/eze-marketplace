import Slider from './components/Slider'

const App = () => {
  
  return (
    <div className="App">
      <header className="flex bg-black px-10 py-4">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold leading-normal tracking-wider text-white">SHOP OUR LATEST <br />AVAILABLE STOCK HERE</h2>
          <form className="flex flex-row mt-8">
            <input class="w-3/5 inline-block h-10 appearance-none text-gray-700 border rounded py-3 px-4 mb-3 mr-3 leading-tight focus:outline-none focus:bg-white" 
              type="text" placeholder="Enter Search Term (e.g iPhone X, 128GB or A1)" />
            <button class="flex flex-row items-center bg-blue-500 text-sm h-10 text-white py-1 px-2 rounded" type="button">
              <span>Search</span>
              <span className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </form>
        </div>
        <div className="flex-1">
          <div className="w-4/5 h-64">
            <img src="/img/mac-ipad-iphone.png" alt="Smiley face" className="w-full h-full object-contain" />  
          </div>
        </div>
      </header>
      <main className="flex bg-black py-8">
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
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Min" />
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Max" />
            </div>
          </section>

          <section id="storage-filter" className="mb-10">
          <h3 className="text-white mb-6 text-xl">Storage</h3>
          <div class="flex flex-col">
            <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"/><span class="ml-2 text-white">All</span>
            </label>
            <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" /><span class="ml-2 text-white">32GB</span>
            </label>

            <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600" /><span class="ml-2 text-white">64GB</span>
            </label>

            <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-orange-600" /><span class="ml-2 text-white">128GB</span>
            </label>

            <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-yellow-600" /><span class="ml-2 text-white">256</span>
            </label>

            <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-green-600" /><span class="ml-2 text-white">512GB</span>
            </label>
        </div>
          </section>
        </aside>
        <section className="flex-1 bg-black px-10">
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-gray-900 py-8">
              <div className="w-full h-48">
                <img src="/img/iphone-6s.png" alt="iPhone 6" className="w-full h-full object-contain" />  
              </div>
              <div className="mt-4 px-4">
                <div className="text-white text-lg font-semibold">iPhone 7</div>
                <div className="text-white font-light">Unlocked | 256GB</div>
                <div className="text-white text-sm mt-2">Unit Price</div>
                <div className="text-white font-bold text-xl">$450</div>
                <div className="text-white text-sm mt-1">1500 Available</div>
              </div>
            </div>
            <div className="bg-gray-900 py-8">
              <div className="w-full h-48">
                <img src="/img/iphone-6s.png" alt="iPhone 6" className="w-full h-full object-contain" />  
              </div>
              <div className="mt-4 px-4">
                <div className="text-white text-lg font-semibold">iPhone 7</div>
                <div className="text-white font-light">Unlocked | 256GB</div>
                <div className="text-white text-sm mt-2">Unit Price</div>
                <div className="text-white font-bold text-xl">$450</div>
                <div className="text-white text-sm mt-1">1500 Available</div>
              </div>
            </div>
            <div className="bg-gray-900 py-8">
              <div className="w-full h-48">
                <img src="/img/iphone-6s.png" alt="iPhone 6" className="w-full h-full object-contain" />  
              </div>
              <div className="mt-4 px-4">
                <div className="text-white text-lg font-semibold">iPhone 7</div>
                <div className="text-white font-light">Unlocked | 256GB</div>
                <div className="text-white text-sm mt-2">Unit Price</div>
                <div className="text-white font-bold text-xl">$450</div>
                <div className="text-white text-sm mt-1">1500 Available</div>
              </div>
            </div>
            <div className="bg-gray-900 py-8">
              <div className="w-full h-48">
                <img src="/img/iphone-6s.png" alt="iPhone 6" className="w-full h-full object-contain" />  
              </div>
              <div className="mt-4 px-4">
                <div className="text-white text-lg font-semibold">iPhone 7</div>
                <div className="text-white font-light">Unlocked | 256GB</div>
                <div className="text-white text-sm mt-2">Unit Price</div>
                <div className="text-white font-bold text-xl">$450</div>
                <div className="text-white text-sm mt-1">1500 Available</div>
              </div>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
