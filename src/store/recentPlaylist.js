import { action, persist } from "easy-peasy";

const recentModal = persist({
  items: [],
  recent: action((state, payload) => {
    state.items.unshift(payload);
    state.items = state.items.slice(0, 5);
  }),
});
export default recentModal;
