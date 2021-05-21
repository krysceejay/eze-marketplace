import { useEffect, useContext } from 'react'
import axios from 'axios'
import Sidebar from '../components/Sidebar'
import {DataContext} from '../store/context'
import SearchForm from '../components/SearchForm'

const Home = () => {

    const {state, dispatch} = useContext(DataContext)
    const { devices } = state

    useEffect(() => {
        const getDevices = async () => {
          const {data} = await axios.get('/api/device')
          dispatch({ type: 'GET_DEVICES', payload: data })
        }
        getDevices()
      }, [dispatch])

    return (
        <div className="App">
      <header className="flex bg-black px-10 py-4">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold leading-normal tracking-wider text-white">SHOP OUR LATEST <br />AVAILABLE STOCK HERE</h2>
          <SearchForm />
        </div>
        <div className="flex-1">
          <div className="w-4/5 h-64">
            <img src="/img/mac-ipad-iphone.png" alt="Smiley face" className="w-full h-full object-contain" />  
          </div>
        </div>
      </header>
      <main className="flex bg-black py-8">
        <Sidebar />
        <section className="flex-1 bg-black px-10">
          <div className="grid grid-cols-5 gap-4">
            {devices.map(device => (
              <div key={device._id} className="bg-gray-900 py-8 relative">
                <div className="w-full h-32">
                  <img src="/img/iphone-6s.png" alt="iPhone 6" className="w-full h-full object-contain" />  
                </div>
                <div className="mt-4 px-4">
                  <div className="text-white text-md font-semibold">{device.name}</div>
                  <div className="text-white font-light">Unlocked | {device.storageSize}</div>
                  <div className="text-white text-sm mt-2">Unit Price</div>
                  <div className="text-white font-bold text-xl">${device.price}</div>
                  <div className="text-white text-sm mt-1">1500 Available</div>
                  <button className="mx-auto mt-3 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded">
                    Buy
                  </button>
                </div>
                <span className="absolute top-2 right-2 border border-gray-100 rounded-sm text-white text-xs px-2">{device.grade}</span>
              </div>
            ))}
            
          </div>
        </section>
      </main>
    </div>
    )
}

export default Home
