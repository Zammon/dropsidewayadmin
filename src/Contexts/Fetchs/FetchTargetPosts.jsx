import AxiosFetch from "./AxiosFetch";

export async function FetchTargetPosts(accoutId, setValue, pageIndex, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/GetPostsTarget",{
        params: {
            id: accoutId,
            pageIndex: pageIndex,
            pageSize: 7
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        }
    )
    .then(req=>{
        console.log('Select Data "TargetPosts": ', req.data);
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

export async function PushFetchTargetPosts(accoutId, setValue, pageIndex, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/GetPostsTarget",{
        params: {
            id: accoutId,
            pageIndex: pageIndex,
            pageSize: 7
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        }
    )
    .then(req=>{
        console.log('Select Data "PushTargetPosts": ', req.data);
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