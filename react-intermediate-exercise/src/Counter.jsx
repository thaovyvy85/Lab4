import useLocalStorage from "./useLocalStorage";

function Counter() {
  const [count, setCount] = useLocalStorage("myCounter", 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
