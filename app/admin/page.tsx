'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import CardapioForm from '@/components/home/admin/CardapioForm'

export default function AdminPage() {
  const [carregando, setCarregando] = useState(true)
  const [cardapio, setCardapio] = useState<any>(null)
  
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    async function verificarAutenticacao() {
      // Pega a sessão direto do navegador
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        // Se não estiver logado, manda para o login
        router.push('/login')
        return
      }

      // Se estiver logado, busca os dados do cardápio
      const { data } = await supabase
        .from('cardapio_dia')
        .select('*')
        .single()

      setCardapio(data)
      setCarregando(false)
    }

    verificarAutenticacao()
  }, [router, supabase])

  if (carregando) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center font-sans">
        <p className="text-stone-600 font-medium">Carregando painel...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-100 py-10 px-4 flex flex-col items-center font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 border border-stone-200">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-stone-800">Painel Administrativo — Vittrini</h1>
        </div>

        <CardapioForm 
          cardapioId={cardapio?.id}
          nomeAtual={cardapio?.nome_prato || ''}
          fotoAtualUrl={cardapio?.foto_url || null}
          precoAtual={cardapio?.preco || null}
          precoKgAtual={cardapio?.preco_kg || null}
          precoMarmitaPAtual={cardapio?.preco_marmita_p || null}
          precoMarmitaMAtual={cardapio?.preco_marmita_m || null}
          precoMarmitaGAtual={cardapio?.preco_marmita_g || null}
        />
      </div>
    </div>
  )
}