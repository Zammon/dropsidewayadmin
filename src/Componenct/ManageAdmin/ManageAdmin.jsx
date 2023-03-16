import React,{useContext, useEffect, useState} from "react";
import NavProfile from "../NavProfile/NavProfile";
import axios from "axios";
import './ManageAdmin.css'
import Table from "../Table/Table";
import { headerManageAdmin } from "../Table/header/headerManageAdmin"
import ItemManageAdmin from "../Table/Items/ItemManageAdmin/ItemManageAdmin";
import SelectFilter, { RefreshButton } from "../SelectFilter/SelectFilter";
import { SelectsContext } from "../UseContexts/SelectContext";

function ManageAdmin() {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState();
    const { selectTypePost, selectTypeArea, selectTypeCategory, } = useContext(SelectsContext);
    const ListPost = async ()=> {
        const data = await axios.get("https://localhost:7113/api/DropsidewayAdmin/ListAccout",{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
              }
            }
        );
        setPosts(data);
        console.log(data);
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
            <ItemManageAdmin
                        key={index}
                        id={posts&&data.idAccout}
                        type={posts&&data.type}
                        profile={posts&&data.profile}
                        firstname={posts&&data.firstname}
                        lastname={posts&&data.lastname}
                        gender={posts&&data.gender}
                        tel={posts&&data.tel}
                        date={posts&&data.birthDate}
                        createAt={posts&&data.createDate}
                        status={posts&&data.status}
                        header={headerManageAdmin}
                    />
        )
    })

    return(
        <> 
            <div className="container-page" style={{padding: "0"}}>
                <NavProfile />
                <div className="container-manageadmin">
                    <div className="title-manageadmin">
                        {`แอคเคาท์ทั้งหมด (${posts?posts&&posts.data.length:"-"})`}
                    </div>
                    <div className="filters-mangeadmin">
                        <div className="filter-label-manageadmin">
                            ประเภทของแอคเคาท์:
                        </div>    
                        <SelectFilter label="[กรุณาเลือกประเภทแอดมิน]" optionObject={selectTypePost&&selectTypePost.data.nameItemFilter} filters={(e)=>{setFilters({...filters, typeValue: e})}} />
                        <SelectFilter label="[กรุณาเลือกเพศ]" optionObject={selectTypeArea&&selectTypeArea.data.nameItemFilter} filters={(e)=>{setFilters({...filters, categoryValue: e})}}/>
                        <SelectFilter label="[กรุณาเลือกแอคเคาท์]" optionObject={selectTypeCategory&&selectTypeCategory.data.nameItemFilter} filters={(e)=>{setFilters({...filters, areaValue: e})}}/>
                        <RefreshButton onClick={hadleOnClickRefresh} />
                    </div>
                    <Table sx={{minHeight: 400, maxHeight: 400}} headers={headerManageAdmin} items={mapPost} loadings={loading} />
                </div>
            </div>
        </> 
    )
}

export default ManageAdmin;