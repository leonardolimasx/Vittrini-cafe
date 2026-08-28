'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import CardapioForm from '@/components/home/admin/CardapioForm'

export default function AdminPage() {
  const router = useRouter()
  const [verificando, setVerificando] = useState(true)

  useEffect(() => {
    const supabase = createClient()

    async function verificarAutenticacao() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/admin/login')
      } else {
        setVerificando(false)
      }
    }
    verificarAutenticacao()
  }, [router])

  if (verificando) {
    return <div className="p-8 text-center">Verificando acesso...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Painel Administrativo - Vittrini</h1>
        
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          {/* Passando props vazias/iniciais para satisfazer a tipagem do formulário */}
          <CardapioForm 
            cardapioId=""
            nomeAtual=""
            fotoAtualUrl=""
            precoAtual=""
            precoKgAtual=""
            precoMarmitaPAtual=""
            precoMarmitaMAtual=""
            precoMarmitaGAtual=""
          />
        </div>
      </div>
    </div>
  )
}