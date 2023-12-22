import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const TODO_KEY = 'todoDB'

_createTodos()

export const todoService = {
  query,
  getById,
  save,
  remove,
  getEmptyTodo
}

function query() {
  // return axios.get(BASE_URL).then(res => res.data)
  return storageService.query(TODO_KEY)
}
function getById(todoId) {
  return storageService.get(TODO_KEY, todoID)
}
function remove(todoID) {
  // return Promise.reject('Not now!')
  return storageService.remove(TODO_KEY, todoID)
}
function save(todo) {
  if (todo._id) {
    return storageService.put(TODO_KEY, todo)
  } else {
    // when switching to backend - remove the next line
    todo.owner = userService.getLoggedinUser()
    return storageService.post(TODO_KEY, todo)
  }
}

function getEmptyTodo(title = '', mission = '') {
  return {
    title,
    mission,
    createdAt: Date.now(),
    isDone: false,
    owner: userService.getLoggedinUser()
  }
}

function _createTodos() {
  let todos = storageService.loadFromStorage(TODO_KEY)
  if (!todos || !todos.length) {
    todos = []
    todos.push(_createTodo('clean todo', 'wash the kitchen'))
    todos.push(_createTodo('shopping list', 'buy groceries'))
    todos.push(_createTodo('exercise routine', 'go for a run'))
    storageService.saveToStorage(TODO_KEY, todos)
  }
}

function _createTodo(title, mission) {
  const todo = getEmptyTodo(title, mission)
  todo.id = utilService.makeId()
  return todo
}

// TEST DATA
// storageService.post(TODO_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))
