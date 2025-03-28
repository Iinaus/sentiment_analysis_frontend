const LoginInfo = () => {
    return (
      <div className="login-info">
        <p>
          <strong>This is a school project</strong>, and user registration is not available. 
          Since there is no database in the backend, only one set of credentials stored in the <code>.env</code> file can be used for login.
        </p>
        <div className="login-credentials">
          <p><strong>Login credentials:</strong></p>
          <p>👤 <strong>Username:</strong> <code>admin</code></p>
          <p>🔑 <strong>Password:</strong> <code>password</code></p>
        </div>
      </div>
    )
  }
  
  export default LoginInfo