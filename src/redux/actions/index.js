export const GET_TACO = 'GET_TACO'
export const SUCCESS_GET_TACO = 'SUCCESS_GET_TACO'

const getTacos = () => ({
  type: GET_TACO
})
const successGetTacos = (payload) => ({
  type: SUCCESS_GET_TACO,
  payload
})

export const fetchTaco = payload => async dispatch => {
  dispatch({ type: GET_TACO })
  const response = await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
  const data = await response.json()
  dispatch({
    type: SUCCESS_GET_TACO,
    payload: data
  })
}