import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  amount: 1,
}


export const getUserAccount = createAsyncThunk(
  'account/getUser',
  async (userId , thunkAPI) => {
    const {data} = await axios.get(`http://localhost:3000/account/${userId}`)
    return data.amount
  },
)




export const accountSlice = createSlice({
  name: 'account', // names of action 
  initialState,
  reducers: {
    increment: (state , action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.amount += 1 // immer library hai jo khud hi aik copy bna leti hai or or phir add krti hai 
      // redux mai direct cheezain change change nahi krni hoti hain

    },
    decrement: (state, action) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
    deccrementByAmount: (state, action) => {
      state.amount -= action.payload
    },
  },
  extraReducers:(builder)=>
  {
    builder.addCase(getUserAccount.fulfilled , (state , action ) =>
    {
      state.amount = action.payload;
      state.pending = false;
    } ).addCase(getUserAccount.pending , (state , action) => {
      state.pending = true;
    }).addCase(getUserAccount.rejected , (state , action) => {
      state.pending = false;
      state.error = action.error;
    })   ;
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , decrementByAmount } = accountSlice.actions

export default accountSlice.reducer
// is mai constants nahi bnane pare hain or us ne khud hi bna liye hain 
// actions kaise bnae ga jo uper creteSlice ke neeche name hai na us ko 
// name mai jo value ho gi 
// account/
// phir jo reducer mai inc , dec , incBy Amount wale jo name rakoho ge tu us ka action const is tarhan ban jae ga 
// account/increment etc 
// hum ko ab declare nahi krne pare jaise hum react-redux mai declare kr rahe the 