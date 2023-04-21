import AxiosFetch from "./AxiosFetch";

export async function FetchPosts(setValue, pageIndex, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/GetPosts",{
        params: {
            pageIndex: pageIndex,
            pageSize: 10
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        }
    )
    .then(req=>{
        console.log('Select Data "Posts": ', req.data);
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

export async function PushFetchPosts(setValue, pageIndex, alertThen, alertCatch) {

    await AxiosFetch.get("DropsidewayAdmin/GetPosts",{
        params: {
            pageIndex: pageIndex,
            pageSize: 10
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        }
    )
    .then(req=>{
        console.log('Select Data "PushPosts": ', req.data);
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