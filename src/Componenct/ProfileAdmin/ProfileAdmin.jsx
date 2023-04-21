import React, { useEffect, useState, useContext } from "react";
import "./ProfileAdmin.css";
import NavProfile from "../NavProfile/NavProfile";
import { SelectsContext } from "../../Contexts/SelectContext";
import Table from "../Table/Table";
import { headersManagePost } from "../Table/header/headerManagePost";
import ItemManagePost from "../Table/Items/ItemManagePost/ItemManagePost";
import SelectFilter, { RefreshButton } from "../SelectFilter/SelectFilter";
import { AuthContext } from "../../Contexts/AuthContext";
import { FetchTargetPosts, PushFetchTargetPosts } from "../../Contexts/Fetchs/FetchTargetPosts";
import { FetchFilterTargetPosts } from "../../Contexts/Fetchs/FetchFilterTargetPosts";
import { PushFetchFilterTargetPosts } from "../../Contexts/Fetchs/FetchFilterTargetPosts";

export default function ProfileAdmin() {
  const [posts, setPosts] = useState();
  const accoutId = JSON.parse(localStorage.getItem('userId')); 
  const [filters, setFilters] = useState(
    {
      type: '',
      category: '',
      area: '',
    },
  );
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [ref, setRef] = useState();
  const { selectTypePost, selectTypeArea, selectTypeCategory } = useContext(SelectsContext);
  const { userdetail } = useContext(AuthContext);

  const FetchData = () => {
    FetchTargetPosts(accoutId, setPosts, pageIndex);
    const setLoadingfirst = setTimeout(()=>{setLoading(false)},100)
    return ()=> clearTimeout(setLoadingfirst)
  };

  function hadleInfinityLoad() {
    if(filters.area || filters.category || filters.type){ 
      PushFetchFilterTargetPosts(accoutId, setPosts, pageIndex, filters);
        return;
    }
    PushFetchTargetPosts(accoutId, setPosts, pageIndex);
  }   

  function hadlePushPosts() {
    if(!ref) return;
    const scrollRef = ref.current;
    if (scrollRef.scrollTop + 450 === scrollRef.scrollHeight)
    {
      setPageIndex(prevPageIndex => prevPageIndex + 1);
      return;
    }
  }

  function hadleOnClickRefresh() {
    if(!accoutId) return;
    ref.current.scrollTo(0, 0)
    const setValue = () =>{
        setFilters({
            type: '',
            category: '',
            area: ''
          })
        setLoading(true);
        setTimeout(()=>{setLoading(false)},200)
        FetchTargetPosts(accoutId, setPosts, 0);
        setPageIndex(0);
    }
    setTimeout(()=>{setValue()},10)
  };

  useEffect(()=>{
    if(!posts || pageIndex === 0) return;
    hadleInfinityLoad()
  },[pageIndex])

  useEffect(()=>{
    if(!ref) return;
    FetchData();
    const scroll = ref.current.addEventListener('scroll', hadlePushPosts);
    return ()=> scroll;
  },[ref])

  useEffect(()=>{
    if(!posts && pageIndex === 0) return
    setPageIndex(0);
    ref.current.scrollTo(0, 0)
    const setFilters = () => {
      if(!filters.area && !filters.category && !filters.type) {
        FetchTargetPosts(accoutId, setPosts, 0);
        return;
      }
      FetchFilterTargetPosts(accoutId, setPosts, 0, filters);
    }
    setTimeout(()=>{setFilters()},100)
    return ()=>setFilters();
  },[filters])

  const mapPost =posts &&posts.map((data, index) => {
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
      <div className="container-page" style={{ padding: "0" }}>
        <NavProfile />
        <div className="container-profileadmin">
          <div className="title-profileadmin">
            {`โพสทั้งหมด(${count})`}
          </div>
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
              sx={{ minHeight: 450, maxHeight: 450 }}
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
