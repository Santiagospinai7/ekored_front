import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

import {MdKeyboardArrowRight} from '../../assets/icons/vander'
import * as Icon from 'react-feather'

export default function InvoicePrivew(){

    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }, []);
    
    return(
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Invoice</h5>

                    <ul className="tracking-[0.5px] inline-flex items-center sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><Link to="/index">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight/></li>
                        <li className="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Invoice</li>
                    </ul>
                </div>

                <div className="container relative mt-6">
                    <div className="md:flex justify-center">
                        <div className="lg:w-4/5 w-full">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                                    <div className="md:flex justify-between">
                                        <div>
                                            <img src={logoDark} className="block dark:hidden" alt=""/>
                                            <img src={logoLight} className="hidden dark:block" alt=""/>
                                            <div className="flex mt-4">
                                                <Icon.Link className="h-4 w-4 me-3 mt-1"/>
                                                <Link to="https://1.envato.market/techwind-react" target="_blank" className="text-indigo-600 dark:text-white font-medium">https://1.envato.market/techwind-react</Link>
                                            </div>
                                        </div>

                                        <div className="mt-6 md:mt-0 md:w-56">
                                            <h5 className="text-lg font-semibold">Address:</h5>

                                            <ul className="list-none">
                                                <li className="flex mt-3">
                                                    <Icon.MapPin className="h-4 w-4 me-3 mt-1"/>
                                                    <Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" className="lightbox text-slate-400">1419 Riverwood Drive, <br/> Redding, CA 96001</Link>
                                                </li>
                                                
                                                <li className="flex mt-3">
                                                    <Icon.Mail className="h-4 w-4 me-3 mt-1"/>
                                                    <Link to="mailto:contact@example.com" className="text-slate-400">info@techwind.com</Link>
                                                </li>
                                                
                                                <li className="flex mt-3">
                                                    <Icon.Phone className="h-4 w-4 me-3 mt-1"/>
                                                    <Link to="tel:+152534-468-854" className="text-slate-400">(+12) 1546-456-856</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:flex justify-between">
                                    <div className="mt-6">
                                        <h5 className="text-lg font-semibold">Invoice Details :</h5>

                                        <ul className="list-none">
                                            <li className="flex mt-3">
                                                <span className="w-24">Invoice No. :</span>
                                                <span className="text-slate-400">land45845621</span>
                                            </li>
                                            
                                            <li className="flex mt-3">
                                                <span className="w-24">Name :</span>
                                                <span className="text-slate-400">Calvin Carlo</span>
                                            </li>
                                            
                                            <li className="flex mt-3">
                                                <span className="w-24">Address :</span>
                                                <span className="text-slate-400">1962 Pike Street, <br/> Diego, CA 92123</span>
                                            </li>
                                            
                                            <li className="flex mt-3">
                                                <span className="w-24">Phone :</span>
                                                <span className="text-slate-400">(+45) 4584-458-695</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-3 md:w-56">
                                        <ul className="list-none">
                                            <li className="flex mt-3">
                                                <span className="w-24">Date :</span>
                                                <span className="text-slate-400">15th Oct, 2021</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="relative overflow-x-auto shadow dark:shadow-gray-700 rounded-md mt-6">
                                    <table className="w-full text-start text-slate-500 dark:text-slate-400">
                                        <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                            <tr>
                                                <th scope="col" className="text-center px-6 py-3 w-16">
                                                    No.
                                                </th>
                                                <th scope="col" className="text-start px-6 py-3">
                                                    Items
                                                </th>
                                                <th scope="col" className="text-center px-6 py-3 w-20">
                                                    Qty
                                                </th>
                                                <th scope="col" className="text-center px-6 py-3 w-28">
                                                    Rate($)
                                                </th>
                                                <th scope="col" className="text-end px-6 py-3 w-20">
                                                    Total($)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white dark:bg-slate-900">
                                                <td className="text-center px-6 py-4">
                                                    1
                                                </td>
                                                <th scope="row" className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    Apple MacBook Pro 17"
                                                </th>
                                                <td className="text-center px-6 py-4">
                                                    1
                                                </td>
                                                <td className="text-center px-6 py-4">
                                                    280
                                                </td>
                                                <td className="text-end px-6 py-4">
                                                    $ 280
                                                </td>
                                            </tr>
                                            <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                                <td className="text-center px-6 py-4">
                                                    2
                                                </td>
                                                <th scope="row" className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    Microsoft Surface Pro
                                                </th>
                                                <td className="text-center px-6 py-4">
                                                    1
                                                </td>
                                                <td className="text-center px-6 py-4">
                                                    140
                                                </td>
                                                <td className="text-end px-6 py-4">
                                                    $ 140
                                                </td>
                                            </tr>
                                            <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                                <td className="text-center px-6 py-4">
                                                    3
                                                </td>
                                                <th scope="row" className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    Magic Mouse 2
                                                </th>
                                                <td className="text-center px-6 py-4">
                                                    2
                                                </td>
                                                <td className="text-center px-6 py-4">
                                                    50
                                                </td>
                                                <td className="text-end px-6 py-4">
                                                    $ 100
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="w-56 ms-auto p-5">
                                    <ul className="list-none">
                                        <li className="text-slate-400 flex justify-between">
                                            <span>Subtotal :</span>
                                            <span>$ 520</span>
                                        </li>
                                        <li className="text-slate-400 flex justify-between mt-2">
                                            <span>Taxes :</span>
                                            <span>$ 20</span>
                                        </li>
                                        <li className="flex justify-between font-semibold mt-2">
                                            <span>Total :</span>
                                            <span>$ 540</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="invoice-footer border-t border-gray-100 dark:border-gray-700 pt-6">
                                    <div className="md:flex justify-between">
                                        <div>
                                            <div className="text-slate-400 text-center md:text-start">
                                                <h6 className="mb-0">Customer Services : <Link to="#" className="text-amber-500">(+12) 1546-456-856</Link></h6>
                                            </div>
                                        </div>

                                        <div className="mt-4 md:mt-0">
                                            <div className="text-slate-400 text-center md:text-end">
                                                <h6 className="mb-0"><Link to="/page-terms" target="_blank" className="text-indigo-600">Terms & Conditions</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}