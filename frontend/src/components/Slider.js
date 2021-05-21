import { useState, useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

const Slider = ({min, max, minmax}) => {
    // Creating the state variables
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)

    // Creating the refs
  const minValRef = useRef(min)
  const maxValRef = useRef(max)

  const range = useRef(null)

  // Convert to percentage
  const getPercent = useCallback(value => Math.round(((value - min) / (max - min)) * 100), [min, max])

  // Set width of the range to change from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  // Set width of the range to change from the right side
    useEffect(() => {
      const minPercent = getPercent(minValRef.current)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }, [maxVal, getPercent])

    return (
        <div>
            <input
              type="range"
              min={min}
              max={max}
              className="thumb thumb-left"
              value={minVal}
              onChange={event => {
                const value = Math.min(Number(event.target.value), maxVal - 1);
                setMinVal(value);
                minmax('minPrice', value)
                minValRef.current = value;
              }}
              style={{ zIndex: minVal > max - 100 && "5" }}
            />
            <input
              type="range"
              min={min}
              max={max}
              value={maxVal}
              className="thumb thumb-right"
              onChange={event => {
                const value = Math.max(Number(event.target.value), minVal + 1);
                setMaxVal(value);
                minmax('maxPrice', value)
                maxValRef.current = value;
             }}
            />
            <div className="relative w-64">
              <div className="rounded h-2 absolute bg-gray-700 w-full z-10" />
              <div ref={range} className="rounded h-2 absolute bg-gray-100 z-20" />
            </div>
             <br />
            <div className="">
                <input readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" value={minVal} placeholder="Min" />
                <input readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={maxVal} placeholder="Max" />
            </div>

            {/* <div className="rounded w-full py-2 px-3 mb-4 bg-white">{minVal}</div>
            <div className="rounded w-full py-2 px-3 bg-white">{maxVal}</div> */}
        </div>
    )
}

    // Set each prop as type number
    Slider.propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    }

export default Slider
