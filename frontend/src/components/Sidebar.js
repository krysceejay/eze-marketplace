import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Slider from './Slider'
import {DataContext} from '../store/context'

const Sidebar = () => {
    const {dispatch} = useContext(DataContext)
    const [filterData, setFilterData] = useState({
        category: '',
        minPrice: 0,
        maxPrice: 1000,
        storage: ''
      })

    const { category, minPrice, maxPrice, storage } = filterData

    const handleOnchange = e => {
        const {name, value} = e.target
        setFilterData({...filterData, [name]: value})
    } 

    const getMinMax = (name, price) => {
        setFilterData({...filterData, [name]: price})
    }

    useEffect(() => {
        const filterDevice = async () => {
            dispatch({ type: 'LOADING' })
            const { data } = await axios.post('/api/device/filter',
            { category, minPrice, maxPrice, storage },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            )
            dispatch({ type: 'FILTER_DEVICE', payload: data })
        }
        filterDevice()
    }, [dispatch, category, minPrice, maxPrice, storage])
     

    return (
        <aside className="flex-none w-1/4 bg-gray-900 px-10 py-8">
        <section id="categories" className="mb-10">
          <h3 className="text-white mb-4 text-xl">Categories</h3>
          <div className="flex flex-col">
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="category" value="" onChange={handleOnchange} /><span className="ml-2 text-white">All</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="category" value="iPhone" onChange={handleOnchange} /><span className="ml-2 text-white">iPhone</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="category" value="Samsong" onChange={handleOnchange} /><span className="ml-2 text-white">Samsong</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="category" value="iPad" onChange={handleOnchange} /><span className="ml-2 text-white">iPad</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="category" value="MacBook" onChange={handleOnchange} /><span className="ml-2 text-white">MacBook</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="category" value="Airpod" onChange={handleOnchange} /><span className="ml-2 text-white">Airpod</span>
            </label>
        </div>
        </section>
        <section id="price-filter" className="mb-10">
          <h3 className="text-white mb-6 text-xl">Price Filter</h3>
          <Slider min={0} max={1000} minmax={getMinMax} />
        </section>

        <section id="storage-filter" className="mb-10">
        <h3 className="text-white mb-4 text-xl">Storage</h3>
        <div className="flex flex-col">
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="storage" value="" onChange={handleOnchange} /><span className="ml-2 text-white">All</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="storage" value="32GB" onChange={handleOnchange} /><span className="ml-2 text-white">32GB</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="storage" value="64GB" onChange={handleOnchange} /><span className="ml-2 text-white">64GB</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="storage" value="128GB" onChange={handleOnchange} /><span className="ml-2 text-white">128GB</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="storage" value="256GB" onChange={handleOnchange} /><span className="ml-2 text-white">256GB</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="radio" name="storage" value="512GB" onChange={handleOnchange} /><span className="ml-2 text-white">512GB</span>
            </label>
        </div>
        </section>
      </aside>
    )
}

export default Sidebar
