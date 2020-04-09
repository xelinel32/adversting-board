import store from "../store";

// router guard
export default function(to, from, next) {
  if (store.getters.user) {
    next();
  } else {
    next("/login?loginError=true");
  }
}
