import AxiosFetch from "./AxiosFetch";

export default async function PatchPost(
  detail,
  alertThen,
  alertCatch,
  setStatus,
  setNavigate
) {
  await AxiosFetch.patch("DropsidewayAdmin/ChangePostDetail", {
    idPost: detail.id,
    title: detail.title,
    description: detail.description,
    areaDescription: detail.areaDescription,
  })
    .then((req) => {
      console.log(req);
      if (!alertThen) return;
      alertThen();
      setStatus(false);
      // setTimeout(()=>{
      //   setNavigate(0);
      // },800)
    })
    .catch((err) => {
      console.log(err);
      if(!alertCatch) return;
      alertCatch();
    });
}
