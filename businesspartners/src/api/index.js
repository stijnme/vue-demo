import axios from "axios";

const baseURL = "ES5/sap/opu/odata/iwbep/GWSAMPLE_BASIC";

const instance = axios.create({
  baseURL,
});

export const getTableData = async (params = { $top: 20, $skip: 0 }) => {
  const { data } = await instance.get("/BusinessPartnerSet", {
    params,
  });

  return data.d?.results || data.d || data.value;
};
