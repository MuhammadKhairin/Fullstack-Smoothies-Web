import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css';
import api from '@/api';


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      const { accessToken, refreshToken, names } = response.data;
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('username', names);  
      await router.push('/menu');
    } catch (error) {
      console.error('Login error:', error.response.data.message);
      router.push('/login')
      setError(error.response.data.message);
    }

    };
        const handleRegister = () => {
            router.push('/register')
        }

  return (
    <div className={styles.container}>
      <title>Login - Smoothies Mapan</title>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <label className={styles.label}>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} required />
        </label>
        <label className={styles.label}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} required />
        </label>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button}>Login</button>
      </form>
      <p>
        Belum punya akun? <button onClick={handleRegister} className={styles.link}>Register di sini</button>
      </p>
    </div>
  )
}

export default Login;
