'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
import '../styles.css'

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", user);
      console.log("Login success", response.data);
      router.push("/");
    } catch (error) {
      console.log("Login failed", error.message);

    }
  };

  return (
    <section className="bg-dark-gold min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-[350px] bg-black rounded-2xl">
          <div className="p-12">
            <h2 className="text-6xl mb-8 text-gold text-center font-bold leading-tight ">
              Login
            </h2>
            <form onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block mb-2 text-2xl font-medium text-gold">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-900 border text-2xl border-gray-700 text-white rounded-lg focus:ring-gold focus:border-gold block w-full p-3 mb-6"
                  placeholder="test@gmail.com"
                  value={user.email}
                  onChange={(e) => setUser({...user, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-2xl font-medium text-gold">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="bg-gray-900 border text-2xl border-gray-700 text-white rounded-lg focus:ring-gold focus:border-gold block w-full p-3"
                  value={user.password}
                  onChange={(e) => setUser({...user, password: e.target.value})}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mt-12 text-black bg-gold  font-medium rounded-lg text-2xl px-5 py-3 text-center shadowBtn"
              >
                Login
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
