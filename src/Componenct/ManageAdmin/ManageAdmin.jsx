import React,{useContext, useEffect, useState} from "react";
import NavProfile from "../NavProfile/NavProfile";
import './ManageAdmin.css'
import Table from "../Table/Table";
import { headerManageAdmin } from "../Table/header/headerManageAdmin"
import ItemManageAdmin from "../Table/Items/ItemManageAdmin/ItemManageAdmin";
import SelectFilter, { RefreshButton } from "../SelectFilter/SelectFilter";
import { SelectsContext } from "../../Contexts/SelectContext";
import { RegisterContext } from "../../Contexts/RegisterContext";
import { FetchAccouts, PushFetchAccouts } from "../../Contexts/Fetchs/FetchAccouts";
import { FetchFilterAccouts, PushFetchFilterAccouts } from "../../Contexts/Fetchs/FetchFilterAccouts";
import { AiFillPlusCircle } from 'react-icons/ai';
import { FetchCounts } from "../../Contexts/Fetchs/FetchCounts";

function ManageAdmin() {
    const {setShowModalRegister, setRefreshFetch} = useContext(RegisterContext);
    const [posts, setPosts] = useState();
    const [ref, setRef] = useState();
    const [count, setCount] = useState(0);
    const [pageIndex, setPageIndex] = useState(0)
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        gender: '',
        typeAccout: '',
        statusAccout: '',
    });
    const { selectTypeGender, selectTypeAccout, selectTypeStatusAccout, } = useContext(SelectsContext)
    const FetchData = () => {
        FetchAccouts (setPosts, pageIndex);
        const setLoadingfirst = setTimeout(()=>{setLoading(false)},100)
        return ()=> clearTimeout(setLoadingfirst)
    }

    function hadleInfinityLoad() {
        if(filters.area || filters.category || filters.type){
            PushFetchFilterAccouts(setPosts, pageIndex, filters);
            return;
        }
        PushFetchAccouts(setPosts, pageIndex);
    }

    function hadlePushPosts() {
        if(!ref) return;
        const scrollRef = ref.current;
        if (scrollRef.scrollTop + 500 === scrollRef.scrollHeight)
        {
          setPageIndex(prevPageIndex => prevPageIndex + 1);
          return;
        }
    }

    function hadleOnClickRefresh() {
        ref.current.scrollTo(0, 0)
        const setValue = () => {
            setFilters({
                gender: '',
                typeAccout: '',
                statusAccout: ''
            })
            setLoading(true);
            setTimeout(()=>{setLoading(false)},200)
            FetchAccouts(setPosts, 0);
            setPageIndex(0);     
        }
        setTimeout(()=>{setValue()},10);
    };

    useEffect(()=>{
        FetchCounts(0, "accout", setCount)
    },[])
    

    useEffect(()=>{
        setRefreshFetch(()=>{
            FetchAccouts (setPosts, 0)
            setPageIndex(0)
        })
    },[])

    useEffect(()=>{
        if(!posts || pageIndex === 0) return;
        hadleInfinityLoad()
    },[pageIndex])

    useEffect(()=>{
        if(!ref) return;
        FetchData();
        const scroll = ref.current.addEventListener('scroll', hadlePushPosts);
        return ()=> scroll;
    },[ref]);

    useEffect(()=>{
        if(!posts && pageIndex === 0) return
        setPageIndex(0);
        ref.current.scrollTo(0, 0);
        const setFilters = () => {
            if(!filters.gender && !filters.statusAccout && !filters.typeAccout) {
                FetchAccouts (setPosts, pageIndex);
                setPageIndex(0)
                return;
              }
            FetchFilterAccouts(setPosts, pageIndex, filters);
        }
        setTimeout(()=>{setFilters()},100)
        return ()=>setFilters();
    },[filters])

    const mapPost = posts&&posts.map((data, index)=>{
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
                <NavProfile statusProfile={true} />
                <div className="container-manageadmin">
                    <div className="title-manageadmin">
                        {`แอ็กเคานต์ทั้งหมด (${count})`}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: '96%'}}>
                        <div>
                            <div className="filters-mangeadmin">
                                <div className="filter-label-manageadmin">
                                    ประเภทของแอ็กเคานต์:
                                </div>    
                                <SelectFilter label="[กรุณาเลือกประเภทแอดมิน]" value={filters.typeAccout} optionObject={selectTypeAccout&&selectTypeAccout.data.nameItemFilter} filters={(e)=>{setFilters({...filters, typeAccout: e.target.value})}} />
                                <SelectFilter label="[กรุณาเลือกเพศ]" value={filters.gender} optionObject={selectTypeGender&&selectTypeGender.data.nameItemFilter} filters={(e)=>{setFilters({...filters, gender: e.target.value})}}/>
                                <SelectFilter label="[กรุณาเลือกสถานะแอ็กเคานต์]" value={filters.statusAccout} optionObject={selectTypeStatusAccout&&selectTypeStatusAccout.data.nameItemFilter} filters={(e)=>{setFilters({...filters, statusAccout: e.target.value})}}/>
                                <RefreshButton onClick={hadleOnClickRefresh} />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0 10px',
                            width: '170px',
                            minWidth: '170px',
                            height: '36px', 
                            color: '#fff',
                            borderRadius: '8px', 
                            backgroundColor: '#FFBE36',
                            cursor: 'pointer'
                            }}
                            onClick={()=>{setShowModalRegister(true)}}
                        >
                            <div style={{display: 'flex', }}>
                                <AiFillPlusCircle size="22px" />
                            </div>
                            <div className="">
                                สร้างบัญชีแอดมิน
                            </div>
                        </div>
                    </div>
                    <Table sx={{minHeight: 500, maxHeight: 500}} headers={headerManageAdmin} items={mapPost} loadings={loading} setRef={setRef}/>
                </div>
            </div>
        </> 
    )
}

export default ManageAdmin;