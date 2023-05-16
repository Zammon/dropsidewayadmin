import { useParams, useNavigate } from "react-router-dom";
import "../ProfileAdmin/ProfileAdmin.css";
import NavProfile from "../NavProfile/NavProfile";
import { SelectsContext } from "../../Contexts/SelectContext";
import Table from "../Table/Table";
import { headersManagePost } from "../Table/header/headerManagePost";
import ItemManagePost from "../Table/Items/ItemManagePost/ItemManagePost";
import SelectFilter, { RefreshButton } from "../SelectFilter/SelectFilter";
import { AuthContext } from "../../Contexts/AuthContext";
import {
  FetchTargetPosts,
  PushFetchTargetPosts,
} from "../../Contexts/Fetchs/FetchTargetPosts";
import { FetchFilterTargetPosts } from "../../Contexts/Fetchs/FetchFilterTargetPosts";
import { PushFetchFilterTargetPosts } from "../../Contexts/Fetchs/FetchFilterTargetPosts";
import React, { useEffect, useState, useContext } from "react";
import AxiosFetch from "../../Contexts/Fetchs/AxiosFetch";
import {MdOutlineArrowBackIos} from 'react-icons/md';
import { FetchCounts } from "../../Contexts/Fetchs/FetchCounts";

export default function ProfileOtherAdmin() {
  const { id } = useParams();
  const [detailAccout, setDetailAccout] = useState('');
  const navigate = useNavigate();
  const FetchDetailAccout = async () => {
        await AxiosFetch.post("DropsidewayAdmin/AccoutDetail",
        {
            "idAccout": id
        }
        ,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        }
        ).then((req)=>{
            setDetailAccout(
                {
                    id: req.data.id,
                    profile: req.data.profile,
                    username: `${req.data.firstname} ${req.data.lastname}`,
                    birthday: req.data.birthdate,
                    createAt: req.data.createAt,
                    gender: req.data.gender,
                    tel: req.data.tel,
                    type: req.data.type,
                }
            )
        }).catch((error)=>{
            console.log(error);
        })
  }
  useEffect(()=>{
    FetchDetailAccout();
  },[])
  const [posts, setPosts] = useState();
  const [filters, setFilters] = useState({
    type: "",
    category: "",
    area: "",
  });
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [ref, setRef] = useState();
  const { selectTypePost, selectTypeArea, selectTypeCategory } =
    useContext(SelectsContext);
  const { userdetail } = useContext(AuthContext);

  const FetchData = () => {
    FetchTargetPosts(id, setPosts, pageIndex);
    const setLoadingfirst = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(setLoadingfirst);
  };

  function hadleInfinityLoad() {
    if (filters.area || filters.category || filters.type) {
      PushFetchFilterTargetPosts(id, setPosts, pageIndex, filters);
      return;
    }
    PushFetchTargetPosts(id, setPosts, pageIndex);
  }

  function hadlePushPosts() {
    if (!ref) return;
    const scrollRef = ref.current;
    if (scrollRef.scrollTop + 380 === scrollRef.scrollHeight) {
      setPageIndex((prevPageIndex) => prevPageIndex + 1);
      return;
    }
  }

  function hadleOnClickRefresh() {
    if (!id) return;
    ref.current.scrollTo(0, 0);
    const setValue = () => {
      setFilters({
        type: "",
        category: "",
        area: "",
      });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 200);
      FetchTargetPosts(id, setPosts, 0);
      setPageIndex(0);
    };
    setTimeout(() => {
      setValue();
    }, 10);
  }

  useEffect(()=>{
    FetchCounts(id, "post", setCount)
  },[])

  useEffect(() => {
    if (!posts || pageIndex === 0) return;
    hadleInfinityLoad();
  }, [pageIndex]);

  useEffect(() => {
    if (!ref) return;
    FetchData();
    const scroll = ref.current.addEventListener("scroll", hadlePushPosts);
    return () => scroll;
  }, [ref]);

  useEffect(() => {
    if (!posts && pageIndex === 0) return;
    setPageIndex(0);
    ref.current.scrollTo(0, 0);
    const setFilters = () => {
      if (!filters.area && !filters.category && !filters.type) {
        FetchTargetPosts(id, setPosts, 0);
        return;
      }
      FetchFilterTargetPosts(id, setPosts, 0, filters);
    };
    setTimeout(() => {
      setFilters();
    }, 100);
    return () => setFilters();
  }, [filters]);

  const mapPost =
    posts &&
    posts.map((data, index) => {
      return (
        <ItemManagePost
          key={index}
          id={posts && data.idPost}
          image={posts && data.image}
          title={posts && data.title}
          type={posts && data.type}
          categoryItem={posts && data.categoryItem}
          tag={posts && data.tag}
          area={posts && data.areaLost}
          datePost={posts && data.date}
          timePost={posts && data.time}
          status={posts && data.status}
          profile={posts && data.profile}
          firstname={posts && data.firstname}
          lastname={posts && data.lastname}
          header={headersManagePost}
        />
      );
    });

  return (
    <>
      <div className="container-page" style={{ padding: "0"}}>
        <div style={{
            display: 'flex', 
            alignItems: 'center', 
            width: "100%", 
            height: '80px',
            padding: '0 90px',
            backgroundColor: 'rgb(255, 255, 255)'
            }} 
           >
            <div style={{display: 'flex', alignItems: 'center', width: 'auto', height: 'auto'}}  onClick={()=>{navigate(-1)}}>
              <MdOutlineArrowBackIos size="15px" fill="#8F8F8F" />
              <div className="go-back-button">
                  ย้อนกลับหน้าเดิม
              </div>
            </div>
        </div>
        <NavProfile 
        profile={detailAccout?.profile} 
        type={detailAccout?.type}
        statusProfile={false} 
        username={detailAccout?.username} 
        gender={detailAccout?.gender} 
        birthDate={detailAccout?.birthday} 
        created={detailAccout?.createAt}  
        tel={detailAccout?.tel}
        />
        <div className="container-profileadmin">
          <div className="title-profileadmin">{`โพสทั้งหมด(${count})`}</div>
          <div className="description-profileadmin">
            {`โดย`}
            <div className="name-admin-profileadmin">{`${userdetail.username}`}</div>
          </div>
          <div className="filter-profileadmin">
            <div className="filter-label-profileadmin">เมนูจัดการโพสต์:</div>
            <SelectFilter
              label="[กรุณาเลือกประเภทโพสต์]"
              optionObject={
                selectTypePost && selectTypePost.data.nameItemFilter
              }
              value={filters.type}
              filters={(e) => {
                setFilters({ ...filters, type: e.target.value });
              }}
            />
            <SelectFilter
              label="[กรุณาเลือกประเภทสิ่งของ]"
              optionObject={
                selectTypeCategory && selectTypeCategory.data.nameItemFilter
              }
              value={filters.category}
              filters={(e) => {
                setFilters({ ...filters, category: e.target.value });
              }}
            />
            <SelectFilter
              label="[กรุณาเลือกบริเวณหรือพื้นที่ของหาย]"
              optionObject={
                selectTypeArea && selectTypeArea.data.nameItemFilter
              }
              value={filters.area}
              filters={(e) => {
                setFilters({ ...filters, area: e.target.value });
              }}
            />
            <RefreshButton onClick={hadleOnClickRefresh} />
          </div>
          <div className="table-profileadmin">
            <Table
              sx={{ minHeight: 380, maxHeight: 380 }}
              headers={headersManagePost}
              items={mapPost}
              loadings={loading}
              setRef={setRef}
            />
          </div>
        </div>
      </div>
    </>
  );
}
