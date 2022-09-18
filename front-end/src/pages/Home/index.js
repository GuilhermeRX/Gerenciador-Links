import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('token'));
  }, [])

  return (
    <div>
      home
    </div>
  )
};