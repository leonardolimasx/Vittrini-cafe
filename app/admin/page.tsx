'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import CardapioForm from '@/components/home/admin/CardapioForm'

export default function AdminPage() {
  const router = useRouter()
  const [verificando, setVerificando] = useState(true)
  const [cardapioData, setCardapioData] = useState<any>(null)

  useEffect(() => {
    const supabase = createClient()

    async function carregarDadosAdmin() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/admin/login')
        return
      }

      // Busca o prato atual cadastrado no banco para pegar o ID real
      const { data, error } = await supabase
        .from('cardapio_dia')
        .select('*')
        .limit(1)
        .single()

      if (data) {
        setCardapioData(data)
      }
      setVerificando(false)
    }

    carregarDadosAdmin()
  }, [router])

  if (verificando) {
    return <div className="p-8 text-center text-stone-600 font-sans">Verificando acesso...</div>
  }

  return (
    <div className="min-h-screen bg-stone-100 p-8 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-xl border border-stone-200">
        <h1 className="text-2xl font-bold text-stone-800 mb-6 text-center font-serif">
          Painel Administrativo - Vittrini
        </h1>
        
        {cardapioData ? (
          <CardapioForm 
            cardapioId={cardapioData.id}
            nomeAtual={cardapioData.nome_prato}
            fotoAtualUrl={cardapioData.foto_url}
            precoAtual={cardapioData.preco}
            precoKgAtual={cardapioData.preco_kg}
            precoMarmitaPAtual={cardapioData.preco_marmita_p}
            precoMarmitaMAtual={cardapioData.preco_marmita_m}
            precoMarmitaGAtual={cardapioData.preco_marmita_g}
          />
        ) : (
          <p className="text-center text-stone-500">Nenhum prato encontrado na tabela do banco.</p>
        )}
      </div>
    </div>
  )
}