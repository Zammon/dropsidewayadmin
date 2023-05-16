import AxiosFetch from "./AxiosFetch";

export const PostCreateAccout = async (postData, alertThen, alertCatch) => {
  await AxiosFetch.post("DropsidewayAdmin/RegisterAccout", postData)
    .then((req) => {
      console.log(req.data);
      if (!alertThen) return;
      alertThen();
    })
    .catch((err) => {
      console.log(err);
      if (!alertCatch) return;
      alertCatch(err.response?.data);
    });
};
