'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    // Inicializa o Supabase apenas no navegador, evitando erros no build da Vercel
    const supabase = createClient()

    async function verificarAutenticacao() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/admin/login')
      }
    }
    verificarAutenticacao()
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Painel Administrativo</h1>
        <p className="text-gray-600">Bem-vindo ao painel de controle do Vittrini.</p>
      </div>
    </div>
  )
}