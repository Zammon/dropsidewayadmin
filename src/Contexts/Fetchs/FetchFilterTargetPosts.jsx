import AxiosFetch from "./AxiosFetch";

export async function FetchFilterTargetPosts(accoutId, setValue, pageIndex,  filters, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/GetFilterPostsTarget",{
        params: {
            id: accoutId,
            type: filters.type,
            category: filters.category,
            area: filters.area,
            pageIndex: pageIndex,
            pageSize: 7
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }  
    })
    .then(req => {
        console.log('Select Data "FilterTargetPosts": ', req.data);
        setValue(req.data);
        if(!alertThen) return;
        alertThen();
    })
    .catch(err => {
        console.log(err);
        if(!alertCatch) return;
        alertCatch();
    });
}

export async function PushFetchFilterTargetPosts(accoutId, setValue, pageIndex,  filters, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/GetFilterPostsTarget",{
        params: {
            id: accoutId,
            type: filters.type,
            category: filters.category,
            area: filters.area,
            pageIndex: pageIndex,
            pageSize: 7
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }  
    })
    .then(req=>{
        console.log('Select Data "PushFilterTargetPosts": ', req.data);
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