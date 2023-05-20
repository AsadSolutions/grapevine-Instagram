import { grapevineBackend } from "../ci.axios";

export const uploadComment = async (comment) => {
  const data = await grapevineBackend("/comment/create", comment, "POST")
    .then(async ({ data }) => {
      if (data.status) {
        return data.data;
      } else {
        throw new Error("Something went wrong");
      }
    })
    .catch((err) => {
      throw new Error(err.message);
    });
  return data;
};
