import AxiosFetch from "./AxiosFetch";

export async function FetchAccouts(setValue, pageIndex, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/GetAccouts",{
        params: {
            pageIndex: pageIndex,
            pageSize: 7
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        }
    )
    .then(req=>{
        console.log('Select Data "Accouts": ', req.data);
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

export async function PushFetchAccouts(setValue, pageIndex, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/GetAccouts",{
        params: {
            pageIndex: pageIndex,
            pageSize: 7
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        }
    )
    .then(req=>{
        console.log('Select Data "PushAccouts": ', req.data);
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