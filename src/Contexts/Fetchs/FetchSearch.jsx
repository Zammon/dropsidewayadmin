import AxiosFetch from "./AxiosFetch";

export async function FetchSearch(setValue, pageIndex, textSearch, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/SearchPosts",{
        params: {
            text: textSearch,
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

export async function PushFetchSearch(setValue, pageIndex, textSearch, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/SearchPosts",{
        params: {
            text: textSearch,
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