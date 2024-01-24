// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'

import { FaTruckLoading } from 'react-icons/fa'
import { TiUpload } from 'react-icons/ti'
import { IoMdEye } from 'react-icons/io'
import { MdViewCompact } from 'react-icons/md'

import CardMenu from '../../components/cardMenu'

export default function Dashboard(){
  const menu = [
    {
      title: 'Recepción',
      image: <FaTruckLoading />,
    },
    {
      title: 'Selección',
      image: <IoMdEye/>,
    },
    {
      title: 'Compactación',
      image: <MdViewCompact/>,
    },
    {
      title: 'Despacho',
      image: <TiUpload/>,
    },
  ]
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
            {menu.map((item, index) => (
              <CardMenu key={index} title={item.title} image={item.image}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}