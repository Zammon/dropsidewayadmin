import AxiosFetch from "./AxiosFetch";

export async function FetchFilterPosts(setValue, pageIndex, filters, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/GetFilterPosts",{
        params: {
            type: filters.type ,
            category: filters.category,
            area: filters.area,
            pageIndex: pageIndex,
            pageSize: 10
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }  
    })
    .then(req=>{
        console.log('Select Data "FilterPosts": ', req.data);
        setValue(req.data);
        if(!alertThen) return;
        alertThen();
    })
    .catch(err=>{
        console.log(err);
        if(!alertCatch) return;
        alertCatch();
    })

}

export async function PushFetchFilterPosts(setValue, pageIndex, filters, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/GetFilterPosts",{
        params: {
            type: filters.type ,
            category: filters.category,
            area: filters.area,
            pageIndex: pageIndex,
            pageSize: 10
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        }
    )
    .then(req=>{
        console.log('Select Data "PushFilterPosts": ', req.data);
        setValue(prevValue => [...prevValue, ...req.data]);
        if(!alertThen) return;
        alertThen();
    })
    .catch(err=>{
        console.log(err);
        if(!alertCatch) return;
        alertCatch();
    })

}