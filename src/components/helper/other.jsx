import { useLocalStore, action } from "easy-peasy";

function EditProduct({ product }) {
  const [state, actions] = useLocalStore(
    () => ({
      product, // 👈 using state to initialize model
      setPrice: action((_state, payload) => {
        _state.product.price = payload;
      }),
    }),
    [product] // 👈 recreate model every time we receive a different product
  );
  console.log(state);
  return (
    <>
      <div>{state}</div>
      <input
        onChange={(e) => actions.setPrice(e.target.value)}
        value={state.product}
      />
    </>
  );
}
export default EditProduct;
