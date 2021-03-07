import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiStatus } from '../../enums/api-status.enum';
import { IProperty } from '../../models/property';

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
  name: 'property',
  initialState,
  reducers: {
    setSelectedPropertyId: (state, action: PayloadAction<string>) => {
      state.selectedPropertyId = action.payload;
    },
  },
});

export const { setSelectedPropertyId } = counterSlice.actions;

export default counterSlice.reducer;
