import Notification from "./Notification";

const LoginForm = ({ handleLogin, username, setUsername, password, setPassword }) => {
  return (
    <div>
      <h3>Log in to Blog App</h3>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input type="text" value={username} name="username" onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div>
          password
          <input type="text" value={password} name="password" onChange={({ target }) => setPassword(target.value)} />
        </div>
        {/* <div>{notification}</div> */}
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
