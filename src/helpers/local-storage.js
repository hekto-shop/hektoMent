export function set(name, val) {
  window.localStorage.setItem(name, JSON.stringify(val));
}

export function get(name, subst = null) {
  return JSON.parse(window.localStorage.getItem(name) || subst);
}
