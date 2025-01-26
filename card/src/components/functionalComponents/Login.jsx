import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 // Your existing CSS file


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Hook for navigating

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (check if fields are not empty)
    if (username === '' || password === '') {
      setError('Please enter both username and password.');
    } else {
      // Simulate successful login
      setError(null); // Reset error

      // Redirect to Home page after successful login
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">Welcome Back!</h2>
        <p className="login-subtitle">Please login to continue playing.</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="login-input-container">
            <input
              type="text"
              className="login-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-input-container">
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
