import { useRef, FormEvent } from "react";

function UncontrolledLogin() {
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameRef.current) {
      alert(usernameRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={usernameRef} />
      <button type="submit">Login</button>
    </form>
  );
}

export default UncontrolledLogin;
