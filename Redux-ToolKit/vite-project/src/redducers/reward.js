import { createAction, createReducer } from '@reduxjs/toolkit'

export  const increment = createAction('reward/increment')
// const decrement = createAction('counter/decrement')
// const incrementByAmount = createAction('counter/incrementByAmount')

const initialState = { points: 0 }

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++
    })
    // .addCase(decrement, (state, action) => {
    //   state.value--
    // })
    // .addCase(incrementByAmount, (state, action) => {
    //   state.value += action.payload
    // })
})
export default rewardReducer;