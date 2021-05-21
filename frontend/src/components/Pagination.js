import {Link} from 'react-router-dom'
const Pagination = ({ pages, curpage, }) => {

    return (
        // <ul className="flex">
        //     <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 text-sm rounded-lg">
        //         <a className="flex items-center font-bold" href="#">
        //             <span className="mx-1">previous</span>
        //         </a>
        //     </li>
        //     <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
        //         <a className="font-bold" href="#">1</a>
        //     </li>
        //     <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
        //         <a className="font-bold" href="#">2</a>
        //     </li>
        //     <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
        //         <a className="font-bold" href="#">3</a>
        //     </li>
        //     <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 text-sm hover:bg-gray-700 hover:text-gray-200 rounded-lg">
        //         <a className="flex items-center font-bold" href="#">
        //             <span className="mx-1">Next</span>
        //         </a>
        //     </li>
        // </ul>
        pages > 1 && (
            <ul className="flex">
              {[...Array(pages).keys()].map((x) => (
                <li key={x + 1} className={`${x + 1 === curpage ?  'bg-blue-500 text-gray-200' : 'bg-gray-200 text-gray-700'} mx-1 px-3 py-2 hover:bg-gray-700 hover:text-gray-200 rounded-lg`}> 
                    <Link to={`/page/${x + 1}`}>
                     {x + 1}
                    </Link>
                </li> 
              ))}
            </ul>
          )
    )
}

export default Pagination
