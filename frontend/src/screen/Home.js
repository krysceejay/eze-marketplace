import { useState, useEffect, useContext, useRef } from 'react'
import axios from 'axios'
import Sidebar from '../components/Sidebar'
import {DataContext} from '../store/context'
import SearchForm from '../components/SearchForm'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'

const Home = ({match}) => {
    const [show, setShow] = useState('Show')
    const filterRef = useRef()
    const {state, dispatch} = useContext(DataContext)
    const {devices, curpage, pages, isLoading} = state

    const pageNumber = match.params.pageNumber || 1

    useEffect(() => {
        dispatch({ type: 'LOADING' })
        const getDevices = async () => {
          const {data} = await axios.get(`/api/device?pageNumber=${pageNumber}`)
          dispatch({ type: 'GET_DEVICES', payload: data })
        }
        getDevices()
      }, [dispatch, pageNumber])

    const handleShow = () => {
      filterRef.current.classList.toggle("show")
      if (filterRef.current?.classList.contains("show")) return setShow('Hide')
        return setShow('Show')
      
    }  

    return (
        <div className="bg-black">
      <header className="flex bg-black px-10 py-4 items-center">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-normal tracking-wider text-white">SHOP OUR LATEST <br />AVAILABLE STOCK HERE</h2>
          <SearchForm />
        </div>
        <div className="hidden md:block flex-1">
          <div className="w-4/5 h-64">
            <img src="/img/mac-ipad-iphone.png" alt="Smiley face" className="w-full h-full object-contain" />  
          </div>
        </div>
      </header>
      <main className="flex bg-black py-8">
        <aside ref={filterRef} className="filter-block overflow-y-scroll transform -translate-x-full md:translate-x-0 flex-none bg-gray-900 px-6 md:px-10 py-8 md:w-1/4 md:static md:block">
          <Sidebar />
        </aside>
        <section className="flex-1 bg-black px-6 md:px-10">
        <div className="flex justify-end md:hidden">
          <span onClick={handleShow} className="mb-4 mt-3 block bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 shadow-none outline-none border-0 rounded md:hidden">
              {show} Filter
          </span>
        </div>
          { isLoading ? 
            <Loader /> : 
            <>
            {devices.length === 0 &&
            <div className="flex flex-col justify-items-center items-center mt-24">
                 <svg className="w-48 h-48" id="b21613c9-2bf0-4d37-bef0-3b193d34fc5d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 647.63626 632.17383"><path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2"/><path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="#222222"/><circle cx="190.15351" cy="24.95465" r="20" fill="#222222"/><circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff"/><path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6"/><path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="#222222"/><circle cx="433.63626" cy="105.17383" r="20" fill="#222222"/><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff"/></svg>
                <h3 className="text-white mt-8 font-bold">No data</h3>
            </div>
          }
            <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {devices.map(device => (
              <div key={device._id} className="bg-gray-900 py-8 relative">
                <div className="w-full h-32">
                  <img src="/img/iphone-6s.png" alt="iPhone 6" className="w-full h-full object-contain" />  
                </div>
                <div className="mt-4 px-4">
                  <div className="text-white text-center text-md font-semibold">{device.name}</div>
                  <div className="text-white text-center font-light">Unlocked | {device.storageSize}</div>
                  <div className="text-white text-center text-sm mt-2">Unit Price</div>
                  <div className="text-white text-center font-bold text-xl">${device.price}</div>
                  <div className="text-white text-center text-sm mt-1">1500 Available</div>
                  <button className="mx-auto mt-3 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded">
                    Buy
                  </button>
                </div>
                <span className="absolute top-2 right-2 border border-gray-100 rounded-sm text-white text-xs px-2">{device.grade}</span>
              </div>
            ))}
            </div>
            <div className="mt-8">
                <Pagination pages={pages} curpage={curpage} />
            </div>
            </>
            }
        </section>
      </main>
      </div>
    )
}

export default Home
