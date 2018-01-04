import {
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE
} from '../actions/types';

const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export default function(state = filtersDefaultState, action) {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      }
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      }
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      }
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      }
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}
