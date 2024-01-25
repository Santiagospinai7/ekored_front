// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'

import CardMenu from '../../components/cardMenu'
import { dashboardData } from '../../data/ekored'

export default function Dashboard(){
  return(
    <>
      <div className="container-fluid relative px-3">
        <div className="layout-specing">
          <div className="flex justify-between items-center top-0">
            <div>
              <h5 className="text-xl font-bold">Hola, Marta</h5>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 top-5 justify-center items-center py-10">
            {dashboardData.map((item, index) => (
              <CardMenu key={index} title={item.title} image={item.image}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}