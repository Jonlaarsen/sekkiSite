'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });

      if (response.ok) {
        router.push('/');
      } else {
        console.error('Logout failed');
        // Fallback: clear cookie manually and redirect
        document.cookie = 'isLoggedin=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        router.push('/');
      }
    } catch (error) {
      console.error('Logout error:', error);
      // Fallback: clear cookie manually and redirect
      document.cookie = 'isLoggedin=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      router.push('/');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-10 text-2xl border-2 px-4 py-2 cursor-pointer"
      disabled={isLoading}
    >
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  );
}
