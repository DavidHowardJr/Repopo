import React, { useState } from 'react'
import './Navbar.css'
import { useParams } from '../../context/context'

export default function Navbar() {
    const {StrictMode, setmode, algo, setalgo, setres, setrun} =useParams()


    return (
        <div className='navbar'>
            <div className = 'container'>
                <button type="button" className={['btn', 'btn-primary', mode=='setstart'? 'selected' : ''].join(' ')} onClick={()=>{
                    if(mode == 'setstart') setmode(null)
                    else {setmode('setstart')}
                }}>
                    <i className="bi bi-geo-alt"></i>
                </button>
                <button type="button" className={['btn', 'btn-primary', mode=='settarget'? 'selected' : ''].join(' ')} onCloick={()=>{
                    if(mode == 'settarget') setmode(null)
                    else {setmode('settarget')}
                }}>
                    <i className="bi bi-geo"></i>
                </button>
                <button type="button" className={['btn', 'btn-primary', mode=='addbricks'? 'selected' : ''].join(' ')} onClick={()=>{
                    if(mode == 'addbricks')}
                }}>
                <i

            </div>
        </div>
    )
} 