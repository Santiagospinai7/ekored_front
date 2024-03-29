import React from "react";
import { Link } from "react-router-dom";

import { cryptoData,orderCoin,transections } from "../data/data";

import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import {MdArrowForward} from '../assets/icons/vander'


import CryptoChart from "../components/cryptoChart";
import SentCoin from "../components/sentCoin";
import CoinRequest from "../components/coinRequest";
import Exchange from "../components/exchange";

export default function IndexCrypto(){
    return(
        <>
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="flex justify-between items-center">
                    <div>
                        <h5 className="text-xl font-bold">Cristina Murfy</h5>
                        <h6 className="text-slate-400 font-semibold">My balance: <span className="text-emerald-600">$ 45,578.032</span></h6>
                    </div>

                    <div className="">
                        <SentCoin/>
                        <CoinRequest/>
                    </div>
                </div>

                <div className="grid xl:grid-cols-12 mt-6 gap-6">
                    <div className="xl:col-span-8 col-span-12">
                        <div className="relative overflow-hidden rounded-md shadow h-full dark:shadow-gray-700 bg-white dark:bg-slate-900 p-4" style={{height:'100%'}}>
                            <div id="tradingview_123" style={{height:'100%'}}>
                            
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-4 col-span-12">
                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                <h6 className="text-lg font-semibold">Watchlists</h6>
                                
                                <Link to="" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500">See More <MdArrowForward className="ms-1"/></Link>
                            </div>
                            
                            <div>
                            <SimpleBarReact className="h-[521px]">
                                <table className="w-full text-start">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-5 font-semibold text-start">Name</th>
                                            <th className="px-4 py-5 font-semibold text-center">Last</th>
                                            <th className="px-4 py-5 font-semibold text-center">Chg</th>
                                            <th className="px-4 py-5 font-semibold text-end">Chg%</th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                            {cryptoData.map((item,index)=>{
                                                return(
                                                    <tr className="border-t border-gray-100 dark:border-gray-700" key={index}>
                                                        <td className="p-4"><Link to="" className="flex items-center hover:text-indigo-600 font-semibold"><img src={item.image} className="h-11 w-11 rounded-full shadow dark:shadow-gray-700 p-1.5 me-1" alt=""/> {item.name}</Link></td>
                                                        <td className="p-4 text-center">{item.last}</td>
                                                        {item.profit=== false ?
                                                        <>
                                                        <td className="p-4 text-center text-red-600">{item.chg}</td>
                                                        <td className="p-4 text-end text-red-600">{item.chgPer}</td> 
                                                        </> :
                                                        <>
                                                        <td className="p-4 text-center text-emerald-600">{item.chg}</td>
                                                        <td className="p-4 text-end text-emerald-600">{item.chgPer}</td>
                                                        </>
                                                        }
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                </table>
                            </SimpleBarReact>
                            </div>
                        </div>
                    </div>
                </div>

                <CryptoChart/>

                <div className="grid grid-cols-12 mt-6 gap-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                <div>
                                    <h6 className="text-lg font-semibold">Transections</h6>
                                    <h6 className="text-slate-400 font-semibold">Latest Transections</h6>
                                </div>
                                
                                <div className="position-relative">
                                    <select className="form-select form-input w-full py-2 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                        <option value="T" selected>Today</option>
                                        <option value="W">This Week</option>
                                        <option value="M">This Month</option>
                                        <option value="Y">This Year</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <SimpleBarReact className="h-[290px]">
                                    <table className="w-full text-start">
                                        <thead>
                                            <tr className="">
                                                <th className="p-4 font-semibold text-start">Type</th>
                                                <th className="p-4 font-semibold text-center">Assets</th>
                                                <th className="p-4 font-semibold text-center">Date</th>
                                                <th className="p-4 font-semibold text-center">Amount</th>
                                                <th className="p-4 font-semibold text-center">Wallet</th>
                                                <th className="p-4 font-semibold text-end">Status</th>
                                            </tr>
                                        </thead>
        
                                        <tbody className="border-t border-gray-100 dark:border-gray-800">
                                            {transections.map((item,index)=>{
                                                return(
                                                <tr key={index}>
                                                    <td className="px-4 pt-3 text-start"><span className={`${item.type === 'Buy' ? 'bg-emerald-600' : 'bg-red-600'}  inline-block text-white text-[12px] font-bold px-2.5 rounded`}>{item.type}</span></td>
                                                    <td className="px-4 pt-3 text-center">{item.assets}</td>
                                                    <td className="px-4 pt-3 text-center">{item.date}</td>
                                                    <td className="px-4 pt-3 text-center">{item.amount}</td>
                                                    <td className="px-4 pt-3 text-center text-indigo-600">{item.wallet}</td>
                                                    <td className="px-4 pt-3 text-end text-red-600">
                                                        <span className={`${item.status === 'Pending' ? 'bg-red-600/10 text-red-600' : item.status === 'Success' ? 'bg-emerald-600/10 text-emerald-600': 'bg-cyan-500/10 text-cyan-500' }  inline-block text-[12px] font-bold px-2.5 rounded`}>{item.status}</span>
                                                        </td>
                                                </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </SimpleBarReact>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-3 md:col-span-6 col-span-12">
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                <div>
                                    <h6 className="text-lg font-semibold">Exchange</h6>
                                    <h6 className="text-slate-400 font-semibold">1BTC = <span className="text-emerald-600">$ 27,427.17</span></h6>
                                </div>
                                
                                <div className="position-relative">
                                    <select className="form-select form-input w-full py-2 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                        <option value="Y" selected>Market</option>
                                        <option value="M">Market</option>
                                        <option value="W">Market</option>
                                        <option value="T">Market</option>
                                    </select>
                                </div>
                            </div>
                           <Exchange/>
                        </div>
                    </div>

                    <div className="xl:col-span-3 md:col-span-6 col-span-12">
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                <div>
                                    <h6 className="text-lg font-semibold">Orders</h6>
                                    <h6 className="text-slate-400 font-semibold">My Order List</h6>
                                </div>
                                
                                <div className="position-relative">
                                    <select className="form-select form-input w-full py-2 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                        <option value="T" selected>Today</option>
                                        <option value="W">This Week</option>
                                        <option value="M">This Month</option>
                                        <option value="Y">This Year</option>
                                    </select>
                                </div>
                            </div>
                           
                                <SimpleBarReact className="p-4 h-[290px]">
                                    {orderCoin.map((item,index)=>{
                                        return(
                                            <div className="rounded shadow p-3" key={index}>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <span className={`${item.type === 'Buy' ? 'bg-emerald-600' : 'bg-red-600'}  inline-block text-white text-[12px] font-bold px-2.5 rounded`}>{item.type}</span> 
                                                        <h6 className="font-semibold mb-0 ms-2">{item.name}</h6>
                                                    </div>

                                                    <span className={`${item.status === 'Pending' ? 'bg-red-600/10 text-red-600' : item.status === 'Success' ? 'bg-emerald-600/10 text-emerald-600': 'bg-cyan-500/10 text-cyan-500' }  inline-block text-[12px] font-bold px-2.5 rounded`}>{item.status}</span>
                                                </div>

                                                <div className="flex items-center mt-6">
                                                    <div className="">
                                                        <h6 className="text-slate-400 mb-0">Spend</h6>
                                                        <h6 className="mb-0">{item.spend}</h6>
                                                    </div>

                                                    <div className="ms-3">
                                                        <h6 className="text-slate-400 mb-0">Recieved</h6>
                                                        <h6 className="mb-0">{item.recived}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </SimpleBarReact>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}