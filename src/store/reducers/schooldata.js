import { createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/axios";
import { dispatch } from "../index";

const initialState = {
  schools: [],
  loading: false,
};

const schooldata = createSlice({
  name: "schools",
  initialState: initialState,
  reducers: {
    getAllSchools: (state, action) => {
      state.schools = action.payload;
    },
  },
});

export default schooldata.reducer;


export function getSchools() {
  return async () => {
    try {
      const response = await instance.get("/school/all");
      console.log(response);
      dispatch(
        schooldata.actions.getAllSchools(response.data.data.schools)
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function addSchools(data) {
  return async () => {
    try {
      const response = await instance.post("/school/add", data);
      dispatch(
        schooldata.actions.getAllSchools(response.data.data.schools)
      );
    } catch (error) {
      console.log(error);
    }
  };
}

// export function deleteSchools(id) {
//   return async () => {
//     try {
//       const response = await instance.delete(`/qa/deleteques/${id}`);
//       dispatch(
//         schoolData.actions.getAllSchools(response.data.data.questions)
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }