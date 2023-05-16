import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { SelectsContext } from "../../Contexts/SelectContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { FetchDashboardCountAreaLost, FetchDashboardCountCategory, FetchDashboardCountTakeItemBack, FetchDashboardCountTypePost, FetchDashboardHistory, FetchDashboradFirstRow } from "../../Contexts/Fetchs/FetchDashborad";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


export default function Home() {
  const { selectTypePost } = useContext(SelectsContext);
  const [categoryMonth, setCategoryMonth] = useState(4);
  const [AreaMonth, setAreaMonth] = useState(1);
  const [firstRow, setFirstRow] = useState({
    postToDay: 0,
    takeBack: 0,
    noneTakeBack: 0
  });
  const [dashboradTypePost, setDashboradTypePost] = useState({
    lostItem: 0,
    findItem: 0
  })

  const [dashboradCategory, setDashboradCategory] = useState({
    normalItem: 0,
    electronicsItem: 0,
    decorationsItem: 0,
    cosmeticsItem: 0
  })

  const [dashboradTakeItemBack, setDashboradTakeItemBack] = useState({
    takeBack: 0,
    noneTakeBack: 0
  })

  const [dashboradAreaLost, setDashboradAreaLost] = useState({
        buildingEarly: 0,
        buildingLate: 0,
        culturalCenter: 0,
        buildingBishop: 0,
        buildingSutigate: 0,
        swimmingPool: 0,
        dormitoryDPU: 0,
        canteen: 0
  })

  const [history, setHistory] = useState([{
    id: '',
    profile: '',
    title: '',
    type: ''
  }]);

  useEffect(()=>{
    FetchDashboradFirstRow(setFirstRow);
    FetchDashboardCountTypePost(setDashboradTypePost);
    FetchDashboardCountCategory(setDashboradCategory);
    FetchDashboardCountTakeItemBack(setDashboradTakeItemBack);
    FetchDashboardCountAreaLost(setDashboradAreaLost);
    FetchDashboardHistory(setHistory)
  },[])

  useEffect(()=>{
    FetchDashboardCountCategory(setDashboradCategory, categoryMonth);
  },[categoryMonth])

  useEffect(()=>{
    FetchDashboardCountAreaLost(setDashboradAreaLost, AreaMonth);
  },[AreaMonth])

  const titleMonth = ['ม.ค.', 'ก.พ.', 'มี.ค', 'เม.ษ.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
  const datas = [ 100, 500, 700, 30, 80, 90, 100, 500, 700, 30, 80, 90 ];
  
  /* จำนวนโพสต์ค้นหา */
  const detail_typePost = {
    labels: titleMonth,
    datasets: [
      {
        label: 'ตามหาของหาย',
        data: dashboradTypePost.lostItem,
        backgroundColor: '#FF740F',
      },
      {
        label: 'ตามหาเจ้าของ',
        data: dashboradTypePost.findItem,
        backgroundColor: '#2ED384',
      },
    ],
  };

  /* จำนวนโพสต์ค้นหา */
    const detail_category = {
      labels: ['หมวดหมู่ของหาย'],
      datasets: [
        {
          label: 'อุปกรณ์พกพาทั่วไป&ของใช้ทั่วไป',
          data: [dashboradCategory.normalItem],
          backgroundColor: '#E50158',
        },
        {
          label: 'อุปกรณ์อีเล็กทรอนิก',
          data: [dashboradCategory.electronicsItem],
          backgroundColor: '#FFBE36',
        },
        {
          label: 'เครื่องประดับ',
          data: [dashboradCategory.decorationsItem],
          backgroundColor: '#8A4FA3',
        },
        {
          label: 'เครื่องสำอาง',
          data: [dashboradCategory.cosmeticsItem],
          backgroundColor: '#193B56',
        },
      ],
    };

    /* จำนวนคนรับของคืนประจำเดือน */
    const detail_takeItemBack = {
      labels: titleMonth,
      datasets: [
        {
          label: 'รับคืน',
          data: dashboradTakeItemBack.takeBack,
          backgroundColor: '#E50158',
        },
        {
          label: 'ของที่ยังไม่ได้รับคืน',
          data: dashboradTakeItemBack.noneTakeBack,
          backgroundColor: '#FFBE36',
        }                              
      ],
    };

  /* พื้นที่เจอของหายบ่อยๆ */
  const titleAreaLost = ['อาคาร 1-6', 'อาคาร 6-12', 'ศูนย์วัฒนธรรม', 'อาคารสำนักอธิการบดี', 'อาคารสุทธิเกตุ', 'สระว่ายน้ำ', 'หอพักDPU', 'โรงอาหาร & ศูนย์อาหาร']
  const detail_areaLost = {
    labels: ['สถานที่ของหาย'],
    datasets: [
      {
        label: 'อาคาร 1-6',
        data: [dashboradAreaLost.buildingEarly],
        backgroundColor: '#2B6CEA',
      },
      {
        label: 'อาคาร 6-12',
        data: [dashboradAreaLost.buildingLate],
        backgroundColor: '#9333D3',
      },
      {
        label: 'ศูนย์วัฒนธรรม',
        data: [dashboradAreaLost.culturalCenter],
        backgroundColor: '#571A54',
      },
      {
        label: 'อาคารสำนักอธิการบดี',
        data: [dashboradAreaLost.buildingBishop],
        backgroundColor: '#DD46C1',
      },
      {
        label: 'อาคารสุทธิเกตุ',
        data: [dashboradAreaLost.buildingSutigate],
        backgroundColor: '#FAF8FA',
      },
      {
        label: 'สระว่ายน้ำ',
        data: [dashboradAreaLost.swimmingPool],
        backgroundColor: '#2ED384',
      },
      {
        label: 'หอพักDPU',
        data: [dashboradAreaLost.dormitoryDPU],
        backgroundColor: '#EFE063',
      },
      {
        label: 'โรงอาหาร & ศูนย์อาหาร',
        data: [dashboradAreaLost.canteen],
        backgroundColor: '#7EA04D',
      },
    ],
  };

  function CardStatusLength(props) {
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

  const dataPieCategory = {
    legend: {
      position: 'left',
    },
    labels: ['อุปกรณ์พกพาทั่วไป&ของใช้ทั่วไป', 'อุปกรณ์อีเล็กทรอนิก', 'เครื่องประดับ', 'เครื่องสำอาง'],
    datasets: [
      {
        label: 'จำนวนโพต์ที่ใส่แท็ก',
        data: [12, 19, 3, 5],
        backgroundColor: [
          '#E50158',
          '#FFBE36',
          '#8A4FA3',
          '#193B56',
        ],
        borderColor: [
          '#FFF',
          '#FFF',
          '#FFF',
          '#FFF',
        ],
        borderWidth: 1,
      },
    ],
  };


    return(
       <>
        <div className="container-page">
            <div className="row-contailer-homepage">
                <div className="left-container-homepage">
                    <CardStatusLength label="จำนวนโพสที่รับแจ้งในวันนี้" color="#E50158" length={firstRow.postToDay}/>
                    <CardStatusLength label="จำนวนผู้ที่เข้ามาของหาย" color="#F8AD11" length={firstRow.takeBack}/>
                    <CardStatusLength label="จำนวนโพสที่ยังไม่มีผู้เข้ามารับของคืน" color="#193B56" length={firstRow.noneTakeBack}/>
                </div>
                <div className="center-container-homepage" style={{flexDirection: 'column', alignItems: 'center'}}>
                    <div className="title-grah-container">
                    <div className="title-grah-item">
                      ประเภทโพสต์
                    </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', minWidth: '500px', maxWidth: '600px', maxHeight: '300px'}}>
                    <Pie
                    width={250}
                    height={250}
                    data={dataPieCategory} />
                  </div>
                </div>
                <div className="right-container-homepage">
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
                      <div style={{display: 'flex', alignItems: 'center', height: '60px'}}>
                        แอดมินที่โพสต์ล่าสุด
                      </div>
                      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',width: '100%', height: '100%', borderTop: '1px solid #C9C9C9', padding: '10px 0'}}>
                        {history?.map((data, index) => {
                          return (
                            <div key={index} style={{
                                  display:'flex',
                                  width: '100%',
                                  height:'55px',
                                  alignItems: 'center',
                                  justifyContent:'space-between',
                                  backgroundColor: '#fff',
                                  borderRadius: '6px',
                                  padding: '0 10px'
                                }}>
                              <div style={{display: 'flex', width: '35px', height: '35px', borderRadius: '50%', overflow: 'hidden'}}>
                                <img className="images-full" src={data.profile} />
                              </div>
                              <div style={{whiteSpace: 'nowrap', overflow:'hidden', textOverflow: 'ellipsis', fontSize: '15px', fontWeight: 'bold', width:'150px'}}>
                                  {data.titlePost}
                              </div>
                              <div className={`border-type-post ${data.typePost==="ตามหาเจ้าของ"? "meet" : "find"}`}>
                                {data.typePost}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: 'auto'}}>
              <div className="bottom-container-homepage" style={{padding: '10px'}}>
                <div className="title-grah-container">
                  <div className="title-grah-item">
                    จำนวนโพสต์ที่มีเข้ามาในแต่ละ
                  </div>
                  {/* <div className="select-grah-container">
                      <select className="" onChange={(e)=>{setTitleTypePost(e.target.value);}}>
                        <option value="day">วัน</option>
                        <option value="month" selected>เดือน</option>
                      </select>        
                  </div> */}
                </div>
                <Bar height={150} width={400} data={detail_typePost} />
              </div>
              <div className="bottom-container-homepage" style={{padding: '10px'}}>
                <div className="title-grah-container">
                  <div className="title-grah-item">
                    หมวดหมู่โพสต์ที่มีการค้นหาในแต่ละเดือน
                  </div>
                  <div className="select-grah-container">
                      <select className="" onChange={(e)=>{setCategoryMonth(e.target.value);}}>
                        {titleMonth.map((data,index)=>{
                          return <option value={index+1}>{data}</option>
                        })}
                      </select>        
                  </div>
                </div>
                <Bar height={150} width={400} data={detail_category} />
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: 'auto', margin: '30px 0'}}>
              <div className="bottom-container-homepage" style={{padding: '10px'}}>
                <div className="title-grah-container">
                  <div className="title-grah-item">
                    จำนวนคนที่มารับของคืน
                  </div>
                  {/* <div className="select-grah-container">
                      <select className="" onChange={(e)=>{setTitleTypePost(e.target.value);}}>
                        <option value="day">วัน</option>
                        <option value="month" selected>เดือน</option>
                      </select>        
                  </div> */}
                </div>
                <Bar height={150} width={400} data={detail_takeItemBack} />
              </div>
              <div className="bottom-container-homepage" style={{padding: '10px'}}>
                <div className="title-grah-container">
                  <div className="title-grah-item">
                    สถานที่ที่เจอของหายบ่อยๆ
                  </div>
                  <div className="select-grah-container">
                      <select className="" onChange={(e)=>{setAreaMonth(e.target.value);}}>
                        {titleMonth.map((data,index)=>{
                          return <option value={index+1}>{data}</option>
                        })}
                      </select>        
                  </div>
                </div>
                <Bar height={150} width={400} data={detail_areaLost} />
              </div>
            </div>
        </div>
       </>
    )
}