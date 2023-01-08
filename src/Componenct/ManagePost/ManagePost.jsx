//React import
import { useState, useEffect } from "react";
//CSS import
import './ManagePost.css'
//Axios import
import axios from "axios";
import { MdRefresh } from 'react-icons/md'

//Component import
import Itemlistpost from "../Itemlistpost/Itemlistpost";

//Service import 
import { CutDate, CutTime } from '../../Service/Cutdatatime.service'
import Settimedelay from "../useHooks/settimedelay";
import { useContext } from "react";
import { SelectsContext } from "../UseContexts/SelectContext";

function ManagePost(){ 
    const [listpost,setListPost] = useState();
    const [loading, setLoading] = useState(false);
    const { selectTypePost, selectTypeArea, selectTypeCategory, selectTypeTags } = useContext(SelectsContext);
    const mapListPost = listpost&&listpost.data.map((values,index)=>{
                            return <Itemlistpost key={index} targetpost={values&&values.idPost} statuspost={values&&values.statusPost} img={values&&values.nameImage} title={values&&values.title} type={values&&values.type} categoryitem={values&&values.categoryItem} tag={values&&values.tagsPost} area={values&&values.areaLost} profile={values&&values.profileAccout} firstname={values&&values.firstname} lastname={values&&values.lastname} date={CutDate(values&&values.datePost) }  time={CutTime(values&&values.timePost)}  />
                        })

    const Listpost = async ()=> {
        const data = await axios.get("https://localhost:7113/api/DropsidewayAdmin/GetListPost");
        setListPost(data);
        console.log(data);
    }

    const RefreshListpost = async ()=> {
        setLoading(true);
        const data = await axios.get("https://localhost:7113/api/DropsidewayAdmin/GetListPost");
        setListPost(data);
        Settimedelay(setLoading(false),10000);
    }

    useEffect(()=>{
        Listpost();
    },[])

    return(
        <>
            <div className="container-page">
                <div className="content-top-managepost">
                    <div className="area-top-title-managepost">
                        Manage Post
                        <div className="area-input-search-mangepost">
                            <div className="area-icon-search-managepost">

                            </div>
                            <input placeholder="Search user name tag type"/>
                        </div>
                    </div>
                    <div className="area-top-description-managepost">
                        This page is for managing user posts on the website.
                    </div>
                </div>
                <div className="content-bottom-managepost">
                    <div className="area-filter-managepost">
                        <div className="area-title-filter-managepost">
                            Menu Manage Posts :
                        </div>
                        <div className="area-select-filter-managepost">
                            <select>
                                <option>{`[ กรุณาเลือก${selectTypePost&&selectTypePost.data.nameFilter} ]`}</option>
                                {selectTypePost&&selectTypePost.data.nameItemFilter.map((e,i)=>{
                                return  <option key={i} value={selectTypeCategory && e}>
                                            {selectTypeCategory && e}
                                        </option>
                                })}
                            </select>
                            <select>
                                <option>{`[ กรุณาเลือก${selectTypeCategory&&selectTypeCategory.data.nameFilter} ]`}</option>
                                {selectTypeCategory&&selectTypeCategory.data.nameItemFilter.map((e,i)=>{
                                return  <option key={i} value={selectTypeCategory && e}>
                                            {selectTypeCategory && e}
                                        </option>
                                })}
                            </select>
                            <select>
                                <option>{`[ กรุณาเลือก${selectTypeArea&&selectTypeArea.data.nameFilter} ]`}</option>
                                {selectTypeArea&&selectTypeArea.data.nameItemFilter.map((e,i)=>{
                                return  <option key={i} value={selectTypeArea && e}>
                                            {selectTypeArea && e}
                                        </option>
                                })}
                            </select>
                            <div className="area-button-refresh-managepost" onClick={RefreshListpost}>
                                <div className="area-icon-refresh-managepost">
                                    <MdRefresh size="23px" />
                                </div>
                                <div className="area-text-refresh-managepost">
                                    Refresh
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="area-list-item-managepost">
                        <div className="area-title-list-item-managepost">
                            <div className="area-title-post-managepost">Title Post</div>
                            <div className="area-type-post-managepost">Type Post</div>
                            <div className="area-categoryItem-post-managepost">CategoryItem</div>
                            <div className="area-tag-post-managepost">Tag</div>
                            <div className="area-area-post-managepost">Area</div>
                            <div className="area-posted-post-managepost">Posted By</div>
                            <div className="area-date-time-post-managepost">Date and Time</div>
                        </div>
                        <div className="area-item-list-post-managepost">
                            {loading?  <div className="area-loading-managepost">Loading...</div>:mapListPost}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManagePost;