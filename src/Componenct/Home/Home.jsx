import React, { useContext } from "react";
import "./Home.css";
import { SelectsContext } from "../../Contexts/SelectContext";
import { RadialBarChart, RadialBar, AreaChart, ReferenceLine, Area, Tooltip, ResponsiveContainer, CartesianGrid, Bar, XAxis, YAxis } from "recharts";
import { BiSearch } from 'react-icons/bi'

export function CardStatusLength(props) {
    const { label, color, length } = props;
    return (
        <div className="card-status-length-container" style={{color: `${color??'#000'}`}}>
            <div className="length-status-container" style={{border: `7px solid ${color}`}}>
                {length}
            </div>
            <div className="label-status-container">
                {label}
            </div>
        </div>
    )
}

export default function Home() {
    const { selectTypePost } = useContext(SelectsContext);
    const dataCercle = [
        {
          "name": "อุปกรณ์พกพาและของใช้ทั่วไป",
          "length": 100,
          "pv": 100,
          "fill": "#193B56"
        },
        {
          "name": "อุปกรณ์อีเล็กทรอนิกส์",
          "length": 20,
          "pv": 100,
          "fill": "#8A4FA3"
        },
        {
          "name": "เครื่องประดับ",
          "length": 50,
          "pv": 100,
          "fill": "#FFBE36"
        },
        {
          "name": "เครื่องสำอาง",
          "length": 5,
          "pv": 100,
          "fill": "#E50158"
        },
      ]

      const dataGraph = [
        {
            "name": "ม.ค.",
            "uv": 50,
            "pv": 2400,
            "amt": 2400,
            "moment": 100
          },
          {
            "name": "ก.พ.",
            "uv": 10,
            "pv": 1398,
            "amt": 2210,

          },
          {
            "name": "มี.ค.",
            "uv": 80,
            "pv": 9800,
            "amt": 2290,
          },
          {
            "name": "เม.ย.",
            "uv": 10,
            "pv": 3908,
            "amt": 2000,
          },
          {
            "name": "พ.ค.",
            "uv": 65,
            "pv": 4800,
            "amt": 2181,
          },
          {
            "name": "มิ.ย.",
            "uv": 10,
            "pv": 3800,
            "amt": 2500,
          },
          {
            "name": "ก.ค.",
            "uv": 50,
            "pv": 4300,
            "amt": 2100,
          },
          {
            "name": "ส.ค.",
            "uv": 55,
            "pv": 4300,
            "amt": 2100,
          },
          {
            "name": "ก.ย.",
            "uv": 20,
            "pv": 4300,
            "amt": 2100,
          },
          {
            "name": "ต.ค.",
            "uv": 10,
            "pv": 4300,
            "amt": 2100,
          },
          {
            "name": "พ.ย.",
            "uv": 20,
            "pv": 4300,
            "amt": 2100,
          },
          {
            "name": "ธ.ค.",
            "uv": 20,
            "pv": 4300,
            "amt": 2100,
          }
      ]

    return(
       <>
        <div className="container-page">
            <div className="row-contailer-homepage">
                <div className="left-container-homepage">
                    <CardStatusLength label="จำนวนโพสที่รับแจ้งในวันนี้" color="#E50158" length="10"/>
                    <CardStatusLength label="จำนวนผู้ที่เข้ามาของหาย" color="#F8AD11" length="5"/>
                    <CardStatusLength label="จำนวนโพสที่ยังไม่มีผู้เข้ามารับของคืน" color="#193B56" length="5"/>
                </div>
                <div className="center-container-homepage">
                    <RadialBarChart 
                        width={350} 
                        height={419} 
                        innerRadius="40%" 
                        outerRadius="100%" 
                        data={dataCercle} 
                        startAngle={180} 
                        endAngle={-180}
                        >
                            <RadialBar angleAxisId={0} minAngle={1} label={{ fill: '#fff', fontSize: '15px',position: 'insideStart'}} background clockWise={true} dataKey='length' />
                        <Tooltip />
                    </RadialBarChart>
                    <div className="center-item-homepage">
                        <label style={{display: 'flex', width: '100%', fontSize: '19px', fontWeight: 'bold'}}>หมวดหมู่ของหาย</label>
                        <ul style={{padding: '0 0 0 20px'}}>
                            {
                                dataCercle?.map((data, index) => {
                                    return(
                                        <li key={index} style={{color: `${data.fill}`}}>
                                            {data.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="right-container-homepage">
                    <div className="area-input-search-mangepost">
                        <div className="area-icon-search-managepost">
                            <BiSearch fill="#fff"/>
                        </div>
                        <input placeholder="Search user name tag type"/>
                    </div>
                    <div className="area-title-show-search-history-homepage">
                        ค้นหาล่าสุด :
                    </div>
                    <div className="area-show-search-history-homepage">
                        No history search
                    </div>
                </div>
            </div>
            <div className="bottom-container-homepage">
                <div className="area-graph-homepage">
                <ResponsiveContainer width={1245} height={300}>
                    <AreaChart data={dataGraph} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis dataKey="moment"/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <ReferenceLine stroke="green" label="Min PAGE" />
                    <ReferenceLine label="Max" stroke="red" strokeDasharray="3 3" />
                    <Area type="monotone" dataKey="uv" stroke="#E50158" fill="#F8AD11" />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
            </div>
        </div>
       </>
    )
}