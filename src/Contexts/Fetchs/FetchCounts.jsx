import AxiosFetch from "./AxiosFetch";

export async function FetchCounts(id, type, setValue, alertThen, alertCatch) {
    await AxiosFetch.get("DropsidewayAdmin/CountPostAdmin",{
        params: {
            id: id,
            type: type
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