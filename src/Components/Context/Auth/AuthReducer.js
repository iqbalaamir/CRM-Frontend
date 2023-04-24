export default function Reducer(State, Action) {
  switch (Action.type) {
      case "SET_TOKEN":
          return { token: Action.payload }
      case "REMOVE_TOKEN":
          return { token: null, isLoggedIn: false }

      default:
          break;
  }
}
