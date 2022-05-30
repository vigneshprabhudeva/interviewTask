import React from 'react'

export default function List({data}) {
  return (
    <div>
    <table>
        <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Description</th>
            <th>Size</th>
        </tr>
        
            {data?.data?.map((val)=>{
                return(<tr><td>{val.name}</td><td>{val.language}</td><td>{val.description}</td><td>{val.size}</td></tr>)
            })}
        
        
    </table>
    </div>
  )
}
