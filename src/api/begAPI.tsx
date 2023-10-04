import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0ZTAzMDVlLTQ3ZjctNGZiNC1iMjgwLTQ5MzliZTFjZDZmMCIsImVtYWlsIjoicGV0ZXJAdGVzdC5jb20iLCJpYXQiOjE1MTYyMzkwMjJ9.QHmGYE67pbbx7tzuCQH5qdJxXtndp-VyJB-WeOILVy4";

const URL: string = "http://localhost:3322/api/create-beg";

export const createBeg = async (data: any) => {
  try {
    const config: any = {
      "content-type": "multipart/form-data",
      headers: {
        authorization: token,
      },
    };

    return await axios.post(URL, data, config).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
