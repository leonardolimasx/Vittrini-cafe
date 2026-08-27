'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState<string | null>(null)
  const [carregando, setCarregando] = useState(false)
  
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setCarregando(true)
    setErro(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    })

    if (error) {
      setErro('E-mail ou senha incorretos.')
      setCarregando(false)
    } else {
      router.push('/admin')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-[#1c3532] flex items-center justify-center px-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border border-stone-200">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-stone-800">Painel Vittrini</h1>
          <p className="text-sm text-stone-500 mt-1">Faça login para gerenciar o restaurante</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm focus:border-terracota-500 focus:ring-terracota-500"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1">Senha</label>
            <input
              type="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm focus:border-terracota-500 focus:ring-terracota-500"
              placeholder="••••••••"
            />
          </div>

          {erro && (
            <p className="text-sm font-medium text-red-600 text-center">{erro}</p>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="w-full rounded-xl bg-[#1c3532] py-3 font-bold text-white hover:bg-[#132422] disabled:opacity-50 transition shadow-md"
          >
            {carregando ? 'Entrando...' : 'Entrar no Sistema'}
          </button>
        </form>
      </div>
    </div>
  )
}