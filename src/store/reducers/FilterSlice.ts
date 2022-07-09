import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilter } from '../../interfaces/Filter'

const initialState: IFilter = {
  areaIds: null,
  rooms: null,
  complexIds: null,
  entrance: null,
  minFloor: null,
  maxFloor: null,
  minPrice: null,
  maxPrice: null,
  minArea: null,
  maxArea: null,
}

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setMinFloor(state, action: PayloadAction<number | null>) {
      state.minFloor = action.payload
    },
    setMaxFloor(state, action: PayloadAction<number | null>) {
      state.maxFloor = action.payload
    },
    setMinPrice(state, action: PayloadAction<number | null>) {
      state.minPrice = action.payload
    },
    setMaxPrice(state, action: PayloadAction<number | null>) {
      state.maxPrice = action.payload
    },
    setMinArea(state, action: PayloadAction<number | null>) {
      state.minArea = action.payload
    },
    setMaxArea(state, action: PayloadAction<number | null>) {
      state.maxArea = action.payload
    },
    setAreaIds(state, action: PayloadAction<number[]>) {
      state.areaIds = action.payload.length > 0 ? action.payload : null
    },
    setComplesIds(state, action: PayloadAction<number[]>) {
      state.complexIds = action.payload.length > 0 ? action.payload : null
    },
    setRooms(state, action: PayloadAction<number>) {
      if (state.rooms) {
        const newArr = state.rooms.includes(action.payload) ? state.rooms.filter(item => item !== action.payload) : [...state.rooms, action.payload]
        state.rooms = newArr.length > 0 ? newArr : null
      } else {
        state.rooms = [action.payload]
      }
      
    },
    reset: () => initialState,
  },
})

export const filterReducer = FilterSlice.reducer

export const filterActions = FilterSlice.actions
