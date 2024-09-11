import { createSlice } from "@reduxjs/toolkit";
// import axios from "../../utils/axios";
import instance from "../../utils/axios";
import { dispatch } from "../index";

const initialState = {
  questions: [],
  loading: false,
};

const questiondata = createSlice({
  name: "question",
  initialState: initialState,
  reducers: {
    getAllQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export default questiondata.reducer;

// export const { getAllQuestions } = questiondata.actions;

export function getQuestions() {
  return async () => {
    try {
      const response = await instance.get("/qa/allquesans");
      // console.log(response.data.data.questions);
      dispatch(
        questiondata.actions.getAllQuestions(response.data.data.questions)
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function addQuestions(data) {
  return async () => {
    try {
      const response = await instance.post("/qa/addques", data);
      console.log(response);
      dispatch(
        questiondata.actions.getAllQuestions(response.data.data.questions)
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteQuestions(id) {
  return async () => {
    try {
      const response = await instance.delete(`/qa/deleteques/${id}`);
      dispatch(
        questiondata.actions.getAllQuestions(response.data.data.questions)
      );
    } catch (error) {
      console.log(error);
    }
  };
}