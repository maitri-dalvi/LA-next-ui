"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function SignIn() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (response?.error) {
      setError(response.error);
    }
    router.push("/dashboard");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-[#F5F5DC] px-4"
      style={{ fontFamily: "'Libre Baskerville', serif" }}
    >
      <motion.div 
        initial={{ scale: 0.8, y: 50, rotateX: 30 }}
        animate={{ scale: 1, y: 0, rotateX: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 20,
          delayChildren: 0.2,
          staggerChildren: 0.1
        }}
        className="bg-white shadow-2xl rounded-2xl border-2 border-[#D4AF37] flex flex-col items-center p-12 w-full max-w-md overflow-hidden"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-4 text-[#2C3E50] text-center"
        >
          LOGIN
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-center mb-8 text-sm"
        >
          Secured Access to the Portal
        </motion.p>
        <form onSubmit={handleSubmit} className="w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <label className="block text-sm font-semibold mb-2 text-[#2C3E50]">
              Username
            </label>
            <Input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border-2 border-[#D4AF37] rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37]/50 transition-all"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <label className="block text-sm font-semibold mb-2 text-[#2C3E50]">
              Password
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border-2 border-[#D4AF37] rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37]/50 transition-all"
            />
          </motion.div>
          <AnimatePresence>
            {error && (
              <motion.p 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-red-600 text-sm mb-4 text-center"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ 
              scale: 0.95,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)"
            }}
            type="submit"
            className="w-full rounded-lg p-3 bg-[#2C3E50] text-white hover:bg-[#D4AF37] hover:text-[#2C3E50] transition-all font-semibold tracking-wider"
          >
            SIGN IN
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/signin"
              className="block mt-4 text-stone-400 hover:underline text-center"
            >
              Visit Register Page
            </Link>
            <p className="text-center text-xs text-gray-500 mt-4">
              © 2024 Legal AI
            </p>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
}