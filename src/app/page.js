'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  function handleNavigate(){
    router.push('/products')
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-4">Server Actions</h1>
    </div>
      
    </div>
  );
}
