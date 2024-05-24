import axios from "axios";

export const commonAPI = async (httpRequest, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httpRequest,
        url,
        data: reqBody,
        headers: reqHeader
            ? reqHeader
            : {
                  "Content-Type": "application/json",
              },
    };
    return await axios(reqConfig)
        .then((result) => {
            return result;
        })
        .catch((error) => {
            return error;
        });
};
//if there is any uploaded content then the uploaded content will be muli pass + home data.
