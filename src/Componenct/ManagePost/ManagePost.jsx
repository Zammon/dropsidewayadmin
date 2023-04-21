import { useState, useEffect } from "react";
import './ManagePost.css'
import { useContext } from "react";
import { SelectsContext } from "../../Contexts/SelectContext";
import Table from "../Table/Table";
import ItemManagePost from "../Table/Items/ItemManagePost/ItemManagePost";
import { headersManagePost } from "../Table/header/headerManagePost";
import SelectFilter, { RefreshButton } from "../SelectFilter/SelectFilter";
import { FetchPosts, PushFetchPosts } from "../../Contexts/Fetchs/FetchPosts";
import { FetchFilterPosts, PushFetchFilterPosts } from "../../Contexts/Fetchs/FetchFilterPosts";

function ManagePost(){ 
    const [posts, setPosts] = useState();
    const [pageIndex, setPageIndex] = useState(0)
    const [loading, setLoading] = useState(true);
    const [ref, setRef] = useState();
    const { selectTypePost, selectTypeArea, selectTypeCategory, } = useContext(SelectsContext);
    const [ filters, setFilters ] = useState({
        type: '',
        category: '',
        area: ''
    });

    const FetchData = () => {
        FetchPosts(setPosts, pageIndex);
        const setLoadingfirst = setTimeout(()=>{setLoading(false)},100)
        return ()=> clearTimeout(setLoadingfirst)
    };

    function hadleInfinityLoad() {
        if(filters.area || filters.category || filters.type){
            PushFetchFilterPosts(setPosts, pageIndex, filters);
            return;
        }
        PushFetchPosts(setPosts, pageIndex);
    }

    function hadlePushPosts() {
        if(!ref) return;
        const scrollRef = ref.current;
        if (scrollRef.scrollTop + 600 === scrollRef.scrollHeight)
        {
          setPageIndex(prevPageIndex => prevPageIndex + 1);
          return;
        }
    }
    
    function hadleOnClickRefresh() {
        ref.current.scrollTo(0, 0)
        const setValue = () =>{
            setFilters({
                type: '',
                category: '',
                area: ''
            })
            setLoading(true);
            setTimeout(()=>{setLoading(false)},200)
            FetchPosts(setPosts, 0);
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
                FetchPosts(setPosts, 0);
                return;
            }
            FetchFilterPosts(setPosts, 0, filters);
        }
        setTimeout(()=>{setFilters()},100)
        return ()=>setFilters();
    },[filters])

    const mapPost = posts&&posts.map((data, index)=>{
        return(
            <ItemManagePost 
                key={index} 
                id={posts&&data.idPost}
                image={posts&&data.image}
                title={posts&&data.title}
                type={posts&&data.type}
                categoryItem={posts&&data.categoryItem}
                tag={posts&&data.tag}
                area={posts&&data.areaLost}
                datePost={posts&&data.date}
                timePost={posts&&data.time}
                status={posts&&data.status}
                profile={posts&&data.profile}
                firstname={posts&&data.firstname}
                lastname={posts&&data.lastname}
                header={headersManagePost}
            />
        )
    })

    return(
        <>
            <div className="container-page" >
                <div className="content-top-managepost">
                    <div className="area-top-title-managepost">
                        จัดการโพสต์
                        <div className="area-input-search-mangepost">
                            <div className="area-icon-search-managepost">

                            </div>
                            <input placeholder="Search user name tag type"/>
                        </div>
                    </div>
                    <div className="area-top-description-managepost">
                        หน้าสำหรับจัดการโพสต์ และดูรายเอียดของโพสต์
                    </div>
                    
                </div>
                <div className="filter-maangepost">
                    <div className="filter-label-maangepost">
                        เมนูจัดการโพสต์: 
                    </div>
                    <SelectFilter label="[ กรุณาเลือกประเภทโพสต์ ]" value={filters.type} optionObject={selectTypePost&&selectTypePost.data.nameItemFilter} filters={(e)=>{setFilters({...filters, type: e.target.value})}} />
                    <SelectFilter label="[ กรุณาเลือกประเภทสิ่งของ ]" value={filters.category} optionObject={selectTypeCategory&&selectTypeCategory.data.nameItemFilter} filters={(e)=>{setFilters({...filters, category: e.target.value})}}/>
                    <SelectFilter label="[ กรุณาเลือกบริเวณหรือพื้นที่ของหาย ]" value={filters.area} optionObject={selectTypeArea&&selectTypeArea.data.nameItemFilter} filters={(e)=>{setFilters({...filters, area: e.target.value})}}/>
                    <RefreshButton onClick={hadleOnClickRefresh}/>
                </div>
                <div className="">
                    <Table sx={{minHeight: 600, maxHeight: 600}} headers={headersManagePost} items={mapPost} loadings={loading} setRef={setRef}/>
                </div>
            </div> 
        </>
    );
}

export default ManagePost;