import React, { useState, useEffect } from "react";
import { Link,useLocation } from "react-router-dom";

import LogoLight from '../assets/images/logo-light.png'
import ShreeIcon from '../assets/images/shree-276.png'

import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import {AiOutlineLineChart, PiBrowsersBold, AiOutlineAppstore, AiOutlineUser,TbBrandBlogger, AiOutlineShoppingCart,AiOutlineCamera,AiOutlineFile,MdOutlineEmail,LiaFileInvoiceDollarSolid, BiLogOutCircle,BiLayer} from '../assets/icons/vander'
import { MdDashboard } from "react-icons/md";
import { TiDownload, TiUpload } from "react-icons/ti";
import { IoMdEye } from "react-icons/io";
import { MdViewCompact } from "react-icons/md";


export default function Sidebar(){
    const [manu , setManu] = useState('');
    const [subManu , setSubManu] = useState('');
    const location = useLocation();

    useEffect(()=>{
        var current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        setManu(current)
        setSubManu(current)
    },[location.pathname.substring(location.pathname.lastIndexOf('/') + 1)])
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

    return(
        <nav className="sidebar-wrapper sidebar-dark">
            <div className=" sidebar-content">
                <div className="sidebar-brand">
                    {/* <Link to="/index"><img src={LogoLight} height="24" alt=""/></Link> */}
                    <h1>Ekored</h1>
                </div>
            <SimpleBarReact style={{height:"calc(100% - 70px)"}}> 
                <ul className="sidebar-menu border-t border-white/10">
                    <li className={`sidebar-dropdown ${["" ,"index","index-crypto",].includes(manu)? "active" : ""}`}>
                            <Link to="#" className="text-gray-400" onClick={(e)=>{setSubManu(subManu === "dashboard-item" ? "" : "dashboard-item")}}><MdDashboard className=" me-3 icon "/>Dashboard</Link>
                        </li>
                    <li className={`sidebar-dropdown ${["" ,"index","index-crypto",].includes(manu)? "active" : ""}`}>
                        <Link to="#" className="text-gray-400" onClick={(e)=>{setSubManu(subManu === "dashboard-item" ? "" : "dashboard-item")}}><TiDownload className=" me-3 icon "/>Recepciones</Link>
                    </li>
                    <li className={`sidebar-dropdown ${["" ,"index","index-crypto",].includes(manu)? "active" : ""}`}>
                        <Link to="#" className="text-gray-400" onClick={(e)=>{setSubManu(subManu === "dashboard-item" ? "" : "dashboard-item")}}><IoMdEye className=" me-3 icon "/>Selección</Link>
                    </li>
                    <li className={`sidebar-dropdown ${["" ,"index","index-crypto",].includes(manu)? "active" : ""}`}>
                        <Link to="#" className="text-gray-400" onClick={(e)=>{setSubManu(subManu === "dashboard-item" ? "" : "dashboard-item")}}><MdViewCompact className=" me-3 icon "/>Compactación</Link>
                    </li>
                    <li className={`sidebar-dropdown ${["" ,"index","index-crypto",].includes(manu)? "active" : ""}`}>
                        <Link to="#" className="text-gray-400" onClick={(e)=>{setSubManu(subManu === "dashboard-item" ? "" : "dashboard-item")}}><TiUpload className=" me-3 icon "/>Despacho</Link>
                    </li>
                </ul>
            </SimpleBarReact>
            </div>
        </nav>
    )
}