import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css'; // Import file CSS
import api from '@/api';

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await api.post('/auth/register', { name, email, password });
      // Arahkan pengguna ke halaman login setelah registrasi berhasil
      await router.push('/login');
    } catch (error) {
      console.error('Registration error:', error.response.data.message);
      // Tampilkan pesan kesalahan jika registrasi gagal
    }
  };

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  return (
    <div className={styles.container}> 
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit" className={styles.button}>Register</button> 
      </form>
      <p>
        Sudah punya akun? <button onClick={handleLoginRedirect}>Login</button>
      </p>
    </div>
  );
};

export default Register;
