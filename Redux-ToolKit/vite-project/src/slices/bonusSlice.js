import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  points: 1,
}

const incrementByAmount = createAction("account/incrementByAmount") ;
export const bonusSlice = createSlice({
  name: 'bonus', // names of action 
  initialState,
  reducers: {
    incrementBonus: (state , action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.points += 1 // immer library hai jo khud hi aik copy bna leti hai or or phir add krti hai 
      // redux mai direct cheezain change change nahi krni hoti hain

    }
   
  },
  extraReducers:(builder)=>
  {
    builder.addCase(  incrementByAmount ,(state,action)=>{
      if(action.payload > 100 )
      {
        state.points+=1;
      }
      else
      {
        
      }

    })
  }
})

// Action creators are generated for each case reducer function
export const { incrementBonus } = bonusSlice.actions

export default bonusSlice.reducer
// is mai constants nahi bnane pare hain or us ne khud hi bna liye hain 
// actions kaise bnae ga jo uper creteSlice ke neeche name hai na us ko 
// name mai jo value ho gi 
// account/
// phir jo reducer mai inc , dec , incBy Amount wale jo name rakoho ge tu us ka action const is tarhan ban jae ga 
// account/increment etc 
// hum ko ab declare nahi krne pare jaise hum react-redux mai declare kr rahe the 