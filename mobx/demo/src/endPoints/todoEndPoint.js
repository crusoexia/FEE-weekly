// @flow

export function fetchTodos() {
  return fetch('/api/todos')
    .then(response => response.json());
}
