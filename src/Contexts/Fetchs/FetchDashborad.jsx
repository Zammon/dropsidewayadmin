import AxiosFetch from "./AxiosFetch"

export const FetchDashboradFirstRow = async (setValue) => {
    AxiosFetch.get("DropsidewayAdmin/DashboardFirstRows")
    .then(req => {
        setValue({
            postToDay: req.data.countPostToDay,
            takeBack: req.data.countPostTackBackToDay,
            noneTakeBack: req.data.countPostDoNotTackBack
        })
    })
    .catch(err => console.log(err));
}

export const FetchDashboardCountTypePost = async (setValue)=> {
    AxiosFetch.get("DropsidewayAdmin/DashboardTypePost")
    .then(req => {
        setValue({
            lostItem: req.data.lostItem,
            findItem: req.data.findItem,
        })
    })
    .catch(err => console.log(err));
}

export const FetchDashboardCountCategory = async (setValue, month)=> {
    AxiosFetch.get("DropsidewayAdmin/DashboardCategory",{
        params: {
            month: month
        }
    })
    .then(req => {
        setValue({
            normalItem: req.data.normalItem,
            electronicsItem: req.data.electronicsItem,
            decorationsItem: req.data.decorationsItem,
            cosmeticsItem: req.data.cosmeticsItem
        })
    })
    .catch(err => console.log(err));
}

export const FetchDashboardCountTakeItemBack = async (setValue)=> {
    AxiosFetch.get("DropsidewayAdmin/DashboardTakeItemBack")
    .then(req =>
        {
            setValue({
                takeBack: req.data.takeBack,
                noneTakeBack: req.data.noneTakeBack
            })
        }
    )
    .catch(err => console.log(err));
}

export const FetchDashboardCountAreaLost = async (setValue, month)=> {
    AxiosFetch.get("DropsidewayAdmin/DashboardAreaLost",{
        params: {
            month: month
        }
    })
    .then(req => {
        setValue({
        buildingEarly: req.data.buildingEarly,
        buildingLate: req.data.buildingLate,
        culturalCenter: req.data.culturalCenter,
        buildingBishop: req.data.buildingBishop,
        buildingSutigate: req.data.buildingSutigate,
        swimmingPool: req.data.swimmingPool,
        dormitoryDPU: req.data.dormitoryDPU,
        canteen: req.data.canteen,
        })
    })
    .catch(err => console.log(err));
}

export const FetchDashboardHistory = async (setValue)=> {
    AxiosFetch.get("DropsidewayAdmin/DashboardHistory")
    .then(req =>
        {
            setValue(req.data)
        }
    )
    .catch(err => console.log(err));
}
