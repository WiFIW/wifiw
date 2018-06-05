const ADD_CHAMPIONSHIP = 'ADD_CHAMPIONSHIP';
const REMOVE_CHAMPIONSHIP = 'REMOVE_CHAMPIONSHIP';
const EDIT_CHAMPIONSHIP = 'EDIT_CHAMPIONSHIP';

export function addChampionship(text) {
  return {
    type: ADD_CHAMPIONSHIP,
    text,
  }
}

export function removeChampionship(id) {
  return {
    type: REMOVE_CHAMPIONSHIP,
    id,
  }
}

export function editChampionship(id, index) {
  return {
    type: EDIT_CHAMPIONSHIP,
    id,
    index,
  }
}
