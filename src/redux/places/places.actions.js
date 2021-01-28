import axios from "axios";
import PlacesActionTypes from "./places.types";

//ACTION CREATORS
export const fetchAllPlaces = (payload) => ({
  type: PlacesActionTypes.FETCH_ALL_PLACES,
  payload,
});

export const fetchSinglePlace = (payload) => ({
  type: PlacesActionTypes.FETCH_SINGLE_PLACE,
  payload,
});

export const addNewPlace = (payload) => ({
  type: PlacesActionTypes.ADD_NEW_PLACE,
  payload,
});

//THUNKS

export const fetchAllPlacesThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/places");
      console.log("data", data);
      dispatch(fetchAllPlaces(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchAllPlacesByBoroughThunk = (borough) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/places/boroughs/${borough}`
      );
      console.log("data", data);
      dispatch(fetchAllPlaces(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchAllPlacesByCategoryThunk = (category) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/places/categories/${category}`
      );
      console.log("data", data);
      dispatch(fetchAllPlaces(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSinglePlaceThunk = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/places/all/${id}`
      );
      console.log("data", data);
      dispatch(fetchSinglePlace(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addNewPlaceThunk = (obj) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/places/newPlace`,
        obj
      );
      console.log("data", data);
      if (!data.error) dispatch(addNewPlace(data));
    } catch (error) {
      console.error(error);
    }
  };
};
