import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('token'));
    console.log(token);
  }, [])

  return (
    <div>
      home
    </div>
  )
};