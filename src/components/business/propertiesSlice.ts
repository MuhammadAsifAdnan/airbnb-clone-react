import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store'; //RootState

import axios from '../../utils/axios';
import { ApiStatus } from '../../enums/api-status.enum';
import { IProperty } from '../../models/property';

const propertiesUrl = '/properties';

export interface IPropertiesState {
  status: ApiStatus;
  data: IProperty[];
  error: string | null;
  selectedPropertyId: string | null;
}

const initialState: IPropertiesState = {
  status: ApiStatus.IDLE,
  data: [],
  error: null,
  selectedPropertyId: null,
};

export const counterSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<ApiStatus>) {
      state.status = action.payload;
    },
    setProperties(state, action: PayloadAction<IProperty[]>) {
      state.data = action.payload;
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
    },

    setSelectedPropertyId: (state, action: PayloadAction<string>) => {
      state.selectedPropertyId = action.payload;
    },
  },
});

export const fetchProperties = (): AppThunk => async (dispatch, getState) => {
  dispatch(setStatus(ApiStatus.LOADING));
  var response = null;
  try {
    response = await axios.get(propertiesUrl);
  } catch (error) {
    response = error.message;
    // TODO: serialize error obj in response interceptor
  }

  if (response && response.status === 200) {
    dispatch(setStatus(ApiStatus.SUCCESS));
    dispatch(setProperties(response.data));
  } else {
    dispatch(setStatus(ApiStatus.FAILED));
    dispatch(setError(response));
  }
};

export const { setStatus, setProperties, setError, setSelectedPropertyId } = counterSlice.actions;

export default counterSlice.reducer;
