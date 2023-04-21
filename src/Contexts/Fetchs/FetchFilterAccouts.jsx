import AxiosFetch from "./AxiosFetch";

export async function FetchFilterAccouts(setValue, pageIndex, filters, alertThen, alertCatch) {
    console.log('filters: ', filters);
    await AxiosFetch.get("DropsidewayAdmin/GetFilterAccouts",{
        params: {
            gender: filters.gender ,
            typeAccout: filters.typeAccout,
            statusAccout: filters.statusAccout,
            pageIndex: pageIndex,
            pageSize: 7
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }  
    })
    .then(req=>{
        console.log('Select Data "FilterAccouts": ', req.data);
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

export async function PushFetchFilterAccouts(setValue, pageIndex, filters, alertThen, alertCatch) {
    console.log('filters: ', filters);
    await AxiosFetch.get("DropsidewayAdmin/GetFilterAccouts",{
        params: {
            gender: filters.gender ,
            typeAccout: filters.typeAccout,
            statusAccout: filters.statusAccout,
            pageIndex: pageIndex,
            pageSize: 7
        },
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        }
    )
    .then(req=>{
        console.log('Select Data "PushFilterAccouts": ', req.data);
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