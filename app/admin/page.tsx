import { createClient } from '@/lib/supabase/server'
import CardapioForm from '@/components/home/admin/CardapioForm'

export default async function AdminPage() {
  const supabase = await createClient()

  const { data: cardapio } = await supabase
    .from('cardapio_dia')
    .select('id, nome_prato, foto_url, preco, preco_kg, preco_marmita_p, preco_marmita_m, preco_marmita_g')
    .limit(1)
    .maybeSingle()

  return (
    <main className="min-h-screen bg-stone-50 p-8 flex justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md h-fit">
        <h1 className="text-xl font-bold text-center text-terracota-800 mb-6">
          Painel Administrativo — Vittrini
        </h1>
        
        {cardapio ? (
          <CardapioForm
            cardapioId={cardapio.id}
            nomeAtual={cardapio.nome_prato}
            fotoAtualUrl={cardapio.foto_url}
            precoAtual={cardapio.preco}
            precoKgAtual={cardapio.preco_kg}
            precoMarmitaPAtual={cardapio.preco_marmita_p}
            precoMarmitaMAtual={cardapio.preco_marmita_m}
            precoMarmitaGAtual={cardapio.preco_marmita_g}
          />
        ) : (
          <p className="text-center text-red-500 font-medium">
            Opa! Não encontrei os dados no banco.
          </p>
        )}
      </div>
    </main>
  )
}