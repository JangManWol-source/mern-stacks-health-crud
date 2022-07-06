import React from 'react'
import { Link } from 'react-router-dom'

const HealthRecords = (props) => {
    
  return (
    <React.Fragment>
        {props.data.map((each) => <tr key={each._id} className="bg-white border-b">
                  <td className="px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                    {each.full_name}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap">
                    {`${each.temperature}°C`}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap">
                    {each.email}
                  </td>
                  
                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap">
                    {each.phone_number}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap flex flex-col ">
                    <Link  className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" to={`/update/${each._id}`}>
                    <button>
                      Update
                    </button>
                    </Link>
                    <button onClick={()=>{
                        props.deleteHandler(each._id)
                    }} className="text-xs mt-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Delete
                    </button>
                  </td>
                </tr>)}
    </React.Fragment>
  )
}

export default HealthRecords