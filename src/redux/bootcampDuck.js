import axios from 'axios'
import { baseURL as url } from './baseURL'
import toastr from 'toastr'

const baseURL = url + '/bootcamps'

let initial = {
  currentWeek: {},
  object: {},
  array: [],
  current: {},
  loggedIn: false,
  student: { monthly_installments: 1 },
  exam: {},
  result: null,
  //2021
  edition: {},
  editions: [],
  coupon: {},
}
function reducer(state = initial, action) {
  switch (action.type) {
    // 2021
    case VALIDATE_DISCOUNT_CODE_ERROR:
    case GET_EDITIONS_ERROR:
    case GRADE_EXAM_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case VALIDATE_DISCOUNT_CODE:
    case GET_EDITION:
    case GRADE_EXAM:
      return { ...state, fetching: true }

    case VALIDATE_DISCOUNT_CODE_SUCCESS:
      return { ...state, fetching: false, coupon: action.payload }
    case GET_EDITION_SUCCESS:
      return { ...state, fetching: false, edition: action.payload }
    case GET_EDITIONS_SUCCESS:
      return { ...state, fetching: false, editions: action.payload }
    //

    case GRADE_EXAM_SUCCESS:
      return { ...state, fetching: false, result: { ...action.payload } }

    case GET_EXAM_SUCCESS:
      return {
        ...state,
        fetching: false,
        exam: { ...action.payload },
        error: null,
      }
    case GET_EXAM:
      return { ...state, fetching: true, error: null }
    case GET_EXAM_ERROR:
      return { ...state, fetching: false, error: action.payload }

    case SAVE_EXAM_SUCCESS:
      return { ...state, fetching: false }
    case SAVE_EXAM:
      return { ...state, fetching: true }
    case SAVE_EXAM_ERROR:
      return { ...state, fetching: false, error: action.payload }

    case UPDATE_CURRENT_WEEK:
      return { ...state, currentWeek: { ...action.payload } }
    case UPDATE_CURRENT_WEEK_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case UPDATE_CURRENT_WEEK_SUCCESS:
      return { ...state, currentWeek: { ...action.payload } }

    case DELETE_LEARNING_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case DELETE_LEARNING_SUCCESS:
      return { ...state, fetching: false }
    case DELETE_LEARNING:
      return { ...state, fetching: true }

    case SAVE_HOMEWORK_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case SAVE_HOMEWORK_SUCCESS:
      return { ...state, fetching: false }
    case SAVE_HOMEWORK_SUCCESS:
      return { ...state, fetching: true }

    case SAVE_LEARNING_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case SAVE_LEARNING_SUCCESS:
      return { ...state, fetching: false }
    case SAVE_LEARNING:
      return { ...state, fetching: true }

    case GET_WEEK:
      return { ...state, fetching: true }
    case GET_WEEK_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case GET_WEEK_SUCCESS:
      return { ...state, fetching: false, currentWeek: { ...action.payload } }

    case GET_SINGLE_BOOTCAMP:
      return { ...state, fetching: true }
    case GET_SINGLE_BOOTCAMP_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case GET_SINGLE_BOOTCAMP_SUCCESS:
      return {
        ...state,
        fetching: false,
        object: {
          ...state.object,
          [action.payload._id]: { ...action.payload },
        },
      }

    case ADD_WEEK:
      return { ...state, fetching: true }
    case ADD_WEEK_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case ADD_WEEK_SUCCESS:
      return {
        ...state,
        fetching: false,
        object: {
          ...state.object,
          [action.payload._id]: { ...action.payload },
        },
      }

    case ON_CHANGE_STUDENT:
      return { ...state, student: { ...action.payload } }

    case GET_BOOTCAMPS:
      return { ...state, fetching: true }
    case GET_BOOTCAMPS_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case GET_BOOTCAMPS_SUCCESS:
      return {
        ...state,
        fetching: false,
        array: [...action.payload.array],
        current: action.payload.current,
        object: { ...action.payload.object },
      }

    case 'GET_INITIAL_DATA':
      return { ...state }
    default:
      return { ...state }
  }
}

// constants
let GRADE_EXAM = 'GRADE_EXAM'
let GRADE_EXAM_SUCCESS = 'GRADE_EXAM_SUCCESS'
let GRADE_EXAM_ERROR = 'GRADE_EXAM_ERROR'

let GET_EXAM = 'GET_EXAM'
let GET_EXAM_ERROR = 'GET_EXAM_ERROR'
let GET_EXAM_SUCCESS = 'GET_EXAM_SUCCESS'

const SAVE_EXAM = 'SAVE_EXAM'
const SAVE_EXAM_SUCCESS = 'SAVE_EXAM_SUCCESS'
const SAVE_EXAM_ERROR = 'SAVE_EXAM_ERROR'

const UPDATE_CURRENT_WEEK = 'UPDATE_CURRENT_WEEK'
const UPDATE_CURRENT_WEEK_ERROR = 'UPDATE_CURRENT_WEEK_ERROR'
const UPDATE_CURRENT_WEEK_SUCCESS = 'UPDATE_CURRENT_WEEK_SUCCESS'

const DELETE_LEARNING = 'DELETE_LEARNING'
const DELETE_LEARNING_ERROR = 'DELETE_LEARNING_ERROR'
const DELETE_LEARNING_SUCCESS = 'DELETE_LEARNING_SUCCESS'

const DELETE_HOMEWORK = 'DELETE_HOMEWORK'
const DELETE_HOMEWORK_ERROR = 'DELETE_HOMEWORK_ERROR'
const DELETE_HOMEWORK_SUCCESS = 'DELETE_HOMEWORK_SUCCESS'

const SAVE_HOMEWORK = 'SAVE_HOMEWORK'
const SAVE_HOMEWORK_ERROR = 'SAVE_HOMEWORK_ERROR'
const SAVE_HOMEWORK_SUCCESS = 'SAVE_HOMEWORK_SUCCESS'

const SAVE_LEARNING = 'SAVE_LEARNING'
const SAVE_LEARNING_ERROR = 'SAVE_LEARNING_ERROR'
const SAVE_LEARNING_SUCCESS = 'SAVE_LEARNING_SUCCESS'

const GET_WEEK = 'GET_WEEK'
const GET_WEEK_ERROR = 'GET_WEEK_ERROR'
const GET_WEEK_SUCCESS = 'GET_WEEK_SUCCESS'

const GET_SINGLE_BOOTCAMP = 'GET_SINGLE_BOOTCAMP'
const GET_SINGLE_BOOTCAMP_ERROR = 'GET_SINGLE_BOOTCAMP_ERROR'
const GET_SINGLE_BOOTCAMP_SUCCESS = 'GET_SINGLE_BOOTCAMP_SUCCESS'

const ADD_WEEK = 'ADD_WEEK'
const ADD_WEEK_ERROR = 'ADD_WEEK_ERROR'
const ADD_WEEK_SUCCESS = 'ADD_WEEK_SUCCESS'

const ON_CHANGE_STUDENT = 'ON_CHANGE_STUDENT'

const GET_BOOTCAMPS = 'GET_BOOTCAMPS'
const GET_BOOTCAMPS_ERROR = 'GET_BOOTCAMPS_ERROR'
const GET_BOOTCAMPS_SUCCESS = 'GET_BOOTCAMPS_SUCCESS'

//2021
const GET_EDITIONS = 'GET_EDITIONS'
const GET_EDITION = 'GET_EDITION'
const GET_EDITIONS_ERROR = 'GET_EDITIONS_ERROR'
const GET_EDITIONS_SUCCESS = 'GET_EDITIONS_SUCCESS'
const GET_EDITION_SUCCESS = 'GET_EDITION_SUCCESS'

const VALIDATE_DISCOUNT_CODE = 'VALIDATE_DISCOUNT_CODE'
const VALIDATE_DISCOUNT_CODE_ERROR = 'VALIDATE_DISCOUNT_CODE_ERROR'
const VALIDATE_DISCOUNT_CODE_SUCCESS = 'VALIDATE_DISCOUNT_CODE_SUCCESS'

//thunks

// 2021
export const purchaseEditionAction = (form) => (dispatch, getState) => {
  let {
    user: { token },
  } = getState()
  return axios
    .post(`${url}/pay/bootcamp/hibrid`, form, {
      headers: { Authorization: token },
    })
    .then((res) => {
      console.log('respuesta: ', res.data)
      return true
    })
    .catch((err) => {
      console.log('catch', err)
      if (!err.response)
        return dispatch({
          type: VALIDATE_DISCOUNT_CODE_ERROR,
          payload: 'Algo falló',
        })
      dispatch({
        type: VALIDATE_DISCOUNT_CODE_ERROR,
        payload: err.response?.data?.message,
      })
      // toastr.error('No se pudo cobrar')
      return false
    })
}

export const validateDiscountCodeAction = (code) => (dispatch, getState) => {
  let {
    user: { token },
  } = getState()
  dispatch({
    type: VALIDATE_DISCOUNT_CODE,
  })
  return axios
    .get(`${url}/cupons/${code}/validate`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      if (!res.data.isValid) {
        toastr.info(`El código ${code} ha expirado`)
        dispatch({ type: VALIDATE_DISCOUNT_CODE_ERROR })
        return false
      }
      dispatch({
        type: VALIDATE_DISCOUNT_CODE_SUCCESS,
        payload: { ...res.data, ...res.data.coupon },
      })
      // getBootcampAction(exam.bootcamp)(dispatch, getState)
      return { isValid: res.data.isValid }
    })
    .catch((err) => {
      console.log('catch', err)
      if (!err.response)
        return dispatch({
          type: VALIDATE_DISCOUNT_CODE_ERROR,
          payload: 'Algo falló',
        })
      dispatch({
        type: VALIDATE_DISCOUNT_CODE_ERROR,
        payload: err.response?.data?.message,
      })
      toastr.error('Código no valido')
      return false
    })
}

export const getEditionBySlugAction = (editionSlug) => (dispatch, getState) => {
  let {
    user: { token },
  } = getState()
  dispatch({
    type: GET_EDITION,
  })
  return axios
    .get(`${url}/editions?slug=${editionSlug}`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      dispatch({
        type: GET_EDITION_SUCCESS,
        payload: { ...res.data[0] },
      })
      // getBootcampAction(exam.bootcamp)(dispatch, getState)
      return res
    })
    .catch((err) => {
      if (!err.response)
        return dispatch({ type: GET_EDITIONS_ERROR, payload: 'Algo falló' })
      dispatch({
        type: GET_EDITIONS_ERROR,
        payload: err.response?.data?.message,
      })
      return err
    })
}

export const getOneEditionAction = (editionId) => (dispatch, getState) => {
  let {
    user: { token },
  } = getState()
  dispatch({
    type: GET_EDITION,
  })
  return axios
    .get(`${url}/editions/${editionId}`, { headers: { Authorization: token } })
    .then((res) => {
      dispatch({
        type: GET_EDITION_SUCCESS,
        payload: { ...res.data },
      })
      // getBootcampAction(exam.bootcamp)(dispatch, getState)
      return res
    })
    .catch((err) => {
      if (!err.response)
        return dispatch({ type: GET_EDITIONS_ERROR, payload: 'Algo falló' })
      dispatch({
        type: GET_EDITIONS_ERROR,
        payload: err.response?.data?.message,
      })
      return err
    })
}

export const getEditionsAction = () => (dispatch, getState) => {
  let {
    user: { token },
  } = getState()
  dispatch({
    type: GET_EDITIONS,
  })
  return axios
    .get(`${url}/editions`, { headers: { Authorization: token } })
    .then((res) => {
      dispatch({
        type: GET_EDITIONS_SUCCESS,
        payload: [...res.data],
      })
      // getBootcampAction(exam.bootcamp)(dispatch, getState)
      return res
    })
    .catch((err) => {
      if (!err.response)
        return dispatch({ type: GET_EDITIONS_ERROR, payload: 'Algo falló' })
      dispatch({
        type: GET_EDITIONS_ERROR,
        payload: err.response?.data?.message,
      })
      return err
    })
}

// 2019
export function gradeExamAction(answers, bootcampId) {
  return (dispatch, getState) => {
    let {
      user: { token },
    } = getState()
    dispatch({
      type: GRADE_EXAM,
    })
    return axios
      .post(
        `${baseURL}/exams/${bootcampId}/grade`,
        { answers },
        { headers: { Authorization: token } },
      )
      .then((res) => {
        dispatch({
          type: GRADE_EXAM_SUCCESS,
          payload: { ...res.data },
        })
        // getBootcampAction(exam.bootcamp)(dispatch, getState)
        return res
      })
      .catch((err) => {
        if (!err.response)
          return dispatch({ type: GRADE_EXAM_ERROR, payload: 'Algo falló' })
        dispatch({ type: GRADE_EXAM_ERROR, payload: err.response.data.message })
        return err
      })
  }
}

export function getExamAction(bootcampId) {
  return (dispatch, getState) => {
    let {
      user: { token },
    } = getState()
    dispatch({ type: GET_EXAM })
    return axios
      .get(`${baseURL}/exams/${bootcampId}?bootcampId=true`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch({
          type: GET_EXAM_SUCCESS,
          payload: { ...res.data },
        })
        // getBootcampAction(exam.bootcamp)(dispatch, getState)
        return res
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.data.result &&
          err.response.data.result.attempts > 1
        ) {
          dispatch({
            type: GRADE_EXAM_SUCCESS,
            payload: err.response.data.result,
          })
          dispatch({ type: GET_EXAM_ERROR, payload: err.response.data.message })
          dispatch({ type: GET_EXAM }) // para evitar que el error mande siempre el resultado
          return
        }
        if (!err.response)
          return dispatch({ type: GET_EXAM_ERROR, payload: 'Algo falló' })
        dispatch({ type: GET_EXAM_ERROR, payload: err.response.data.message })
        return err
      })
  }
}

export function saveExamAction(exam) {
  return (dispatch, getState) => {
    let {
      user: { token },
    } = getState()
    dispatch({
      type: SAVE_EXAM,
    })
    return axios
      .post(`${baseURL}/exams/${exam.bootcamp}`, exam, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch({
          type: SAVE_EXAM_SUCCESS,
          payload: { ...res.data },
        })
        getBootcampAction(exam.bootcamp)(dispatch, getState)
        return res
      })
      .catch((err) => {
        if (!err.response)
          return dispatch({ type: SAVE_EXAM_ERROR, payload: 'Algo falló' })
        dispatch({ type: SAVE_EXAM_ERROR, payload: err.response.data.message })
        return err
      })
  }
}

export function deleteHomeworkAction(item) {
  return (dispatch, getState) => {
    let {
      user: { token },
    } = getState()
    dispatch({ type: DELETE_HOMEWORK })
    return axios
      .delete(`${baseURL}/homeworks/${item._id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch({
          type: DELETE_HOMEWORK_SUCCESS,
          payload: { ...res.data },
        }) // changethis for more than 1 bootcamp at a time
        getWeekAdminAction(item.week)(dispatch, getState)
        return res
      })
      .catch((err) => {
        if (!err.response)
          return dispatch({
            type: DELETE_HOMEWORK_ERROR,
            payload: 'Algo falló',
          })
        dispatch({
          type: DELETE_HOMEWORK_ERROR,
          payload: err.response.data.message,
        })
        return err
      })
  }
}

export function saveHomeworkAction(item) {
  return (dispatch, getState) => {
    let {
      user: { token },
    } = getState()
    dispatch({ type: SAVE_HOMEWORK })
    if (item._id) {
      return axios
        .patch(`${baseURL}/homeworks/${item._id}`, item, {
          headers: { Authorization: token },
        })
        .then((res) => {
          dispatch({
            type: SAVE_HOMEWORK_SUCCESS,
            payload: { ...res.data },
          }) // changethis for more than 1 bootcamp at a time
          getWeekAdminAction(item.week)(dispatch, getState)
          return res
        })
        .catch((err) => {
          if (!err.response)
            return dispatch({
              type: SAVE_HOMEWORK_ERROR,
              payload: 'Algo falló',
            })
          dispatch({
            type: SAVE_HOMEWORK_ERROR,
            payload: err.response.data.message,
          })
          return err
        })
    } else {
      return axios
        .post(`${baseURL}/homeworks`, item, {
          headers: { Authorization: token },
        })
        .then((res) => {
          dispatch({
            type: SAVE_HOMEWORK_SUCCESS,
            payload: { ...res.data },
          }) // changethis for more than 1 bootcamp at a time
          getWeekAdminAction(item.week)(dispatch, getState)
          return res
        })
        .catch((err) => {
          if (!err.response)
            return dispatch({
              type: SAVE_HOMEWORK_ERROR,
              payload: 'Algo falló',
            })
          if (err.response.data.error)
            return dispatch({
              type: SAVE_HOMEWORK_ERROR,
              payload: err.response.data.error.message,
            })
          dispatch({
            type: SAVE_HOMEWORK_ERROR,
            payload: err.response.data.message,
          })
          return err
        })
    }
  }
}

export function updateCurrentWeekAction(week) {
  return (dispatch, getState) => {
    let {
      user: { token },
    } = getState()
    dispatch({ type: UPDATE_CURRENT_WEEK, payload: { ...week } })
    return axios
      .patch(`${baseURL}/weeks/${week._id}`, week, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch({
          type: UPDATE_CURRENT_WEEK_SUCCESS,
          payload: { ...res.data },
        }) // changethis for more than 1 bootcamp at a time
        //getWeekAdminAction(item.week)(dispatch, getState)
        return res
      })
      .catch((err) => {
        if (!err.response)
          return dispatch({
            type: UPDATE_CURRENT_WEEK_ERROR,
            payload: 'Algo falló',
          })
        dispatch({
          type: UPDATE_CURRENT_WEEK_ERROR,
          payload: err.response.data.message,
        })
        return err
      })
  }
}

export function deleteLearningAction(item) {
  return (dispatch, getState) => {
    let {
      user: { token },
    } = getState()
    dispatch({ type: DELETE_LEARNING })
    return axios
      .delete(`${baseURL}/learnings/${item._id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch({
          type: DELETE_LEARNING_SUCCESS,
          payload: { ...res.data },
        }) // changethis for more than 1 bootcamp at a time
        getWeekAdminAction(item.week)(dispatch, getState)
        return res
      })
      .catch((err) => {
        if (!err.response)
          return dispatch({
            type: DELETE_LEARNING_ERROR,
            payload: 'Algo falló',
          })
        dispatch({
          type: DELETE_LEARNING_ERROR,
          payload: err.response.data.message,
        })
        return err
      })
  }
}

export function saveLearningAction(item) {
  return (dispatch, getState) => {
    let {
      user: { token },
    } = getState()
    dispatch({ type: SAVE_LEARNING })
    if (item._id) {
      return axios
        .patch(`${baseURL}/learnings/${item._id}`, item, {
          headers: { Authorization: token },
        })
        .then((res) => {
          dispatch({
            type: SAVE_LEARNING_SUCCESS,
            payload: { ...res.data },
          }) // changethis for more than 1 bootcamp at a time
          getWeekAdminAction(item.week)(dispatch, getState)
          return res
        })
        .catch((err) => {
          if (!err.response)
            return dispatch({
              type: SAVE_LEARNING_ERROR,
              payload: 'Algo falló',
            })
          dispatch({
            type: SAVE_LEARNING_ERROR,
            payload: err.response.data.message,
          })
          return err
        })
    } else {
      return axios
        .post(`${baseURL}/learnings`, item, {
          headers: { Authorization: token },
        })
        .then((res) => {
          dispatch({
            type: SAVE_LEARNING_SUCCESS,
            payload: { ...res.data },
          }) // changethis for more than 1 bootcamp at a time
          getWeekAdminAction(item.week)(dispatch, getState)
          return res
        })
        .catch((err) => {
          if (!err.response)
            return dispatch({
              type: SAVE_LEARNING_ERROR,
              payload: 'Algo falló',
            })
          if (err.response.data.error)
            return dispatch({
              type: SAVE_LEARNING_ERROR,
              payload: err.response.data.error.message,
            })
          dispatch({
            type: SAVE_LEARNING_ERROR,
            payload: err.response.data.message,
          })
          return err
        })
    }
  }
}

export function getWeekAdminAction(id) {
  return (dispatch, getState) => {
    let {
      user: { token },
    } = getState()
    dispatch({ type: GET_WEEK })
    return axios
      .get(`${baseURL}/weeks/${id}`, { headers: { Authorization: token } })
      .then((res) => {
        dispatch({
          type: GET_WEEK_SUCCESS,
          payload: { ...res.data },
        }) // changethis for more than 1 bootcamp at a time
        return res
      })
      .catch((err) => {
        if (!err.response)
          return dispatch({ type: GET_WEEK_ERROR, payload: 'Algo falló' })
        dispatch({ type: GET_WEEK_ERROR, payload: err.response.data.message })
        return err
      })
  }
}

export function getBootcampAction(id) {
  return (dispatch, getState) => {
    if (!id) return dispatch({ type: GET_SINGLE_BOOTCAMP_ERROR })
    let {
      user: { token },
    } = getState()
    dispatch({ type: GET_SINGLE_BOOTCAMP })
    return axios
      .get(`${baseURL}/${id}`, { headers: { Authorization: token } })
      .then((res) => {
        dispatch({
          type: GET_SINGLE_BOOTCAMP_SUCCESS,
          payload: { ...res.data },
        }) // changethis for more than 1 bootcamp at a time
        return res
      })
      .catch((err) => {
        if (!err.response)
          return dispatch({
            type: GET_SINGLE_BOOTCAMP_ERROR,
            payload: 'Algo falló',
          })
        dispatch({
          type: GET_SINGLE_BOOTCAMP_ERROR,
          payload: err.response.data.message,
        })
        // localStorage.removeItem('user')
        // dispatch({ type: 'LOGOUT' })
        return err
      })
  }
}

export function getBootcampAdminAction(id) {
  return (dispatch, getState) => {
    let {
      user: { token },
    } = getState()
    dispatch({ type: GET_SINGLE_BOOTCAMP })
    return axios
      .get(`${baseURL}/${id}/admin`, { headers: { Authorization: token } })
      .then((res) => {
        dispatch({
          type: GET_SINGLE_BOOTCAMP_SUCCESS,
          payload: { ...res.data },
        }) // changethis for more than 1 bootcamp at a time
        return res
      })
      .catch((err) => {
        if (!err.response)
          return dispatch({
            type: GET_SINGLE_BOOTCAMP_ERROR,
            payload: 'Algo falló',
          })
        dispatch({
          type: GET_SINGLE_BOOTCAMP_ERROR,
          payload: err.response.data.message,
        })
        return err
      })
  }
}

export function addWeekAction(week) {
  return (dispatch, getState) => {
    let {
      user: { token },
    } = getState()
    dispatch({ type: ADD_WEEK })
    if (!week.bootcamp) return
    return axios
      .post(baseURL + `/${week.bootcamp}/weeks`, week, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch({
          type: ADD_WEEK_SUCCESS,
          payload: { ...res.data },
        }) // changethis for more than 1 bootcamp at a time
        return res
      })
      .catch((err) => {
        if (!err.response)
          return dispatch({ type: ADD_WEEK_ERROR, payload: 'Algo falló' })
        dispatch({ type: ADD_WEEK_ERROR, payload: err.response.data.message })
        return err
      })
  }
}

export function onChangeStudentAction(info) {
  return (dispatch) => {
    dispatch({ type: ON_CHANGE_STUDENT, payload: { ...info } })
  }
}

export function getBootcampsAction() {
  return (dispatch) => {
    dispatch({ type: GET_BOOTCAMPS })
    return axios
      .get(`${baseURL}`)
      .then((res) => {
        let ob = {}
        res.data.bootcamps.forEach((b) => (ob[b._id] = b))
        dispatch({
          type: GET_BOOTCAMPS_SUCCESS,
          payload: {
            array: [...res.data.bootcamps],
            current: res.data.bootcamps.find((b) => b.current),
            object: { ...ob },
          },
        }) // changethis for more than 1 bootcamp at a time
        return res
      })
      .catch((err) => {
        if (!err.response)
          return dispatch({ type: GET_BOOTCAMPS_ERROR, payload: 'Algo falló' })
        dispatch({
          type: GET_BOOTCAMPS_ERROR,
          payload: err.response.data.message,
        })
        return err
      })
  }
}

export default reducer
