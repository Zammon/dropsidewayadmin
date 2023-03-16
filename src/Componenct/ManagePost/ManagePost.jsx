import { useState, useEffect } from "react";
import './ManagePost.css'
import axios from "axios";
import { useContext } from "react";
import { SelectsContext } from "../UseContexts/SelectContext";
import Table from "../Table/Table";
import ItemManagePost from "../Table/Items/ItemManagePost/ItemManagePost";
import { headersManagePost } from "../Table/header/headerManagePost";
import SelectFilter, { RefreshButton } from "../SelectFilter/SelectFilter";

function ManagePost(){ 
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);
    const { selectTypePost, selectTypeArea, selectTypeCategory, } = useContext(SelectsContext);
    const [ filters, setFilters ] = useState();
    const ListPost = async ()=> {
        const data = await axios.get("https://localhost:7113/api/DropsidewayAdmin/GetListPost",{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
              }
            }
        );
        setPosts(data);
    }

    function hadleOnClickRefresh() {
        setLoading(true);
        setTimeout(()=>{setLoading(false)},800)
        ListPost();
      };

    useEffect(()=>{
        ListPost();
        const setLoadingfirst = setTimeout(()=>{setLoading(false)},800)
        return ()=> clearTimeout(setLoadingfirst)
    },[])

    const mapPost = posts&&posts.data.map((data, index)=>{
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
                    <SelectFilter label="[กรุณาเลือกประเภทโพสต์]" optionObject={selectTypePost&&selectTypePost.data.nameItemFilter} filters={(e)=>{setFilters({...filters, typeValue: e})}} />
                    <SelectFilter label="[กรุณาเลือกประเภทสิ่งของ]" optionObject={selectTypeCategory&&selectTypeCategory.data.nameItemFilter} filters={(e)=>{setFilters({...filters, categoryValue: e})}}/>
                    <SelectFilter label="[กรุณาเลือกบริเวณหรือพื้นที่ของหาย]" optionObject={selectTypeArea&&selectTypeArea.data.nameItemFilter} filters={(e)=>{setFilters({...filters, areaValue: e})}}/>
                    <RefreshButton onClick={hadleOnClickRefresh}/>
                </div>
                <div className="">
                    <Table sx={{minHeight: 600, maxHeight: 600}} headers={headersManagePost} items={mapPost} loadings={loading}/>
                </div>
            </div> 
        </>
    );
}

export default ManagePost;