'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function CardapioDoDia() {
  const [cardapio, setCardapio] = useState<any>(null)

  useEffect(() => {
    async function buscarCardapio() {
      const supabase = createClient()
      
      // O truque do '*' evita que o banco quebre se faltar alguma coluna
      const { data, error } = await supabase
        .from('cardapio_dia')
        .select('*')
        .limit(1)
        .maybeSingle()

      if (error) {
        // Se o problema for segurança (RLS), isso vai aparecer no seu F12!
        console.error("ERRO DO SUPABASE:", error.message)
      }

      if (data) {
        setCardapio(data)
      }
    }

    buscarCardapio()
  }, [])

  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-terracota-800 mb-8">
          Sugestão do Dia
        </h2>
        
        <div className="max-w-md mx-auto bg-stone-50 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
          
          {cardapio?.foto_url ? (
            <img 
              src={cardapio.foto_url} 
              alt={cardapio.nome_prato} 
              className="w-full h-64 object-cover"
            />
          ) : (
            <div className="w-full h-64 bg-stone-200 flex items-center justify-center">
              <span className="text-stone-500">Foto em atualização...</span>
            </div>
          )}
          
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-terracota-700 mb-4 font-serif">
              {cardapio?.nome_prato || 'Cardápio em atualização...'}
            </h3>
            
            {/* Bloco de Preços Principais */}
            <div className="grid grid-cols-2 gap-2 border-t border-stone-200 pt-4 mt-2">
              <div className="text-center">
                <p className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Prato do Dia</p>
                <p className="text-lg font-bold text-green-600 mt-1">
                  {cardapio?.preco || '-'}
                </p>
              </div>
              <div className="border-l border-stone-200 text-center">
                <p className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Por KG</p>
                <p className="text-lg font-bold text-green-600 mt-1">
                  {cardapio?.preco_kg || '-'}
                </p>
              </div>
            </div>

            {/* Bloco das Marmitas */}
            <div className="border-t border-stone-200 pt-3 mt-4">
              <p className="text-xs text-stone-500 uppercase font-semibold tracking-wider mb-2">Marmitas</p>
              <div className="flex justify-center gap-6 text-sm">
                <div>
                  <span className="font-bold text-stone-600">P:</span> <span className="text-green-600 font-semibold">{cardapio?.preco_marmita_p || '-'}</span>
                </div>
                <div>
                  <span className="font-bold text-stone-600">M:</span> <span className="text-green-600 font-semibold">{cardapio?.preco_marmita_m || '-'}</span>
                </div>
                <div>
                  <span className="font-bold text-stone-600">G:</span> <span className="text-green-600 font-semibold">{cardapio?.preco_marmita_g || '-'}</span>
                </div>
              </div>
            </div>

            <p className="text-stone-500 mt-6 text-sm italic">
              Venha provar essa delícia no Vittrini!
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}