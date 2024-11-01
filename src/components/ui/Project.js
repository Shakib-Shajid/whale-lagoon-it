"use client"
import React from 'react';
import Image from "next/image";
import { useEffect, useState } from "react";

const Project = () => {

    const [pics, setPics] = useState([]);

    useEffect(() => {
        fetch('./project.json')
            .then(res => res.json())
            .then(data => setPics(data))
    }, [])
    return (
        // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            <div className=' gap-10 my-10 flex flex-col md:flex-row w-[80%] md:w-[90%] mx-auto'>
                {
                    pics.map(pic => (
                        <div  key={pic.id} className=''>
                            <Image src={pic.img} width={500} height={500} alt="" />
                            <div className="w-[75%] text-center block mx-auto">
                                <p className="font-bold">{pic.title}</p>
                                <p className="text-[#84868A] text-sm">{pic.topic}</p>
                            </div>
                        </div>
                    ))
                }

            </div>




    );
};

export default Project;