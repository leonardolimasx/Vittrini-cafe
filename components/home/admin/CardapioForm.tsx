'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

type Props = {
  cardapioId: string
  nomeAtual: string
  fotoAtualUrl: string | null
  precoAtual: string | null
  precoKgAtual: string | null
  precoMarmitaPAtual: string | null
  precoMarmitaMAtual: string | null
  precoMarmitaGAtual: string | null
}

export default function CardapioForm({ 
  cardapioId, nomeAtual, fotoAtualUrl, precoAtual, precoKgAtual, 
  precoMarmitaPAtual, precoMarmitaMAtual, precoMarmitaGAtual 
}: Props) {
  
  // Função rápida para tirar o "R$" que vem do banco de dados e deixar a caixinha limpa
  const limparRS = (valor: string | null) => valor ? valor.replace(/R\$\s?/g, '').trim() : ''

  const [nome, setNome] = useState(nomeAtual)
  const [preco, setPreco] = useState(limparRS(precoAtual))
  const [precoKg, setPrecoKg] = useState(limparRS(precoKgAtual))
  
  const [precoMarmitaP, setPrecoMarmitaP] = useState(limparRS(precoMarmitaPAtual))
  const [precoMarmitaM, setPrecoMarmitaM] = useState(limparRS(precoMarmitaMAtual))
  const [precoMarmitaG, setPrecoMarmitaG] = useState(limparRS(precoMarmitaGAtual))
  
  const [arquivo, setArquivo] = useState<File | null>(null)
  const [salvando, setSalvando] = useState(false)
  const [mensagem, setMensagem] = useState<string | null>(null)
  const supabase = createClient()

  async function handleSalvar(e: React.FormEvent) {
    e.preventDefault()
    setSalvando(true)
    setMensagem(null)

    let fotoUrl = fotoAtualUrl

    if (arquivo) {
      const nomeArquivo = `prato-dia-${Date.now()}.${arquivo.name.split('.').pop()}`
      const { error: uploadError } = await supabase.storage
        .from('cardapio')
        .upload(nomeArquivo, arquivo, { upsert: true })

      if (uploadError) {
        setMensagem('Erro ao enviar a foto.')
        setSalvando(false)
        return
      }

      const { data: publicUrlData } = supabase.storage
        .from('cardapio')
        .getPublicUrl(nomeArquivo)

      fotoUrl = publicUrlData.publicUrl
    }

    // Função que coloca o "R$ " de volta antes de salvar no banco
    const formatarPreco = (valor: string) => valor ? `R$ ${valor}` : ''

    const { error } = await supabase
      .from('cardapio_dia')
      .update({ 
        nome_prato: nome, 
        foto_url: fotoUrl, 
        preco: formatarPreco(preco),
        preco_kg: formatarPreco(precoKg),
        preco_marmita_p: formatarPreco(precoMarmitaP),
        preco_marmita_m: formatarPreco(precoMarmitaM),
        preco_marmita_g: formatarPreco(precoMarmitaG)
      })
      .eq('id', cardapioId)

    setSalvando(false)
    setMensagem(error ? 'Erro ao salvar.' : 'Cardápio atualizado com sucesso!')
  }

  return (
    <form onSubmit={handleSalvar} className="w-full max-w-md space-y-4 font-sans">
      
      {/* NOME DO PRATO */}
      <div>
        <label className="block text-sm font-semibold text-stone-700">Nome do Prato</label>
        <input
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:border-terracota-500 focus:ring-terracota-500"
        />
      </div>

      {/* PREÇOS PRINCIPAIS */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-stone-700">Prato do Dia</label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 text-sm font-medium">R$</span>
            <input
              type="text"
              placeholder="25,00"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              className="w-full rounded-lg border border-stone-300 pl-9 pr-2 py-2 text-sm focus:border-terracota-500 focus:ring-terracota-500"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-semibold text-stone-700">Preço KG</label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 text-sm font-medium">R$</span>
            <input
              type="text"
              placeholder="59,90"
              value={precoKg}
              onChange={(e) => setPrecoKg(e.target.value)}
              className="w-full rounded-lg border border-stone-300 pl-9 pr-2 py-2 text-sm focus:border-terracota-500 focus:ring-terracota-500"
            />
          </div>
        </div>
      </div>

      {/* MARMITAS */}
      <div className="border border-stone-200 p-3 rounded-xl bg-stone-50 shadow-sm">
        <label className="block text-xs font-bold text-stone-700 mb-3 uppercase tracking-wider">Tamanhos de Marmita</label>
        <div className="grid grid-cols-3 gap-2">
          
          <div>
            <label className="block text-[10px] text-stone-500 font-bold mb-1 text-center">PEQUENA</label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-500 text-xs font-medium">R$</span>
              <input
                type="text"
                placeholder="15,00"
                value={precoMarmitaP}
                onChange={(e) => setPrecoMarmitaP(e.target.value)}
                className="w-full rounded-md border border-stone-300 pl-7 pr-1 py-2 text-xs focus:border-terracota-500 focus:ring-terracota-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] text-stone-500 font-bold mb-1 text-center">MÉDIA</label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-500 text-xs font-medium">R$</span>
              <input
                type="text"
                placeholder="18,00"
                value={precoMarmitaM}
                onChange={(e) => setPrecoMarmitaM(e.target.value)}
                className="w-full rounded-md border border-stone-300 pl-7 pr-1 py-2 text-xs focus:border-terracota-500 focus:ring-terracota-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] text-stone-500 font-bold mb-1 text-center">GRANDE</label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-500 text-xs font-medium">R$</span>
              <input
                type="text"
                placeholder="22,00"
                value={precoMarmitaG}
                onChange={(e) => setPrecoMarmitaG(e.target.value)}
                className="w-full rounded-md border border-stone-300 pl-7 pr-1 py-2 text-xs focus:border-terracota-500 focus:ring-terracota-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* BOTÃO DA FOTO BONITÃO */}
      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-2">Foto do Prato</label>
        <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-stone-300 border-dashed rounded-xl cursor-pointer bg-white hover:bg-stone-50 hover:border-terracota-500 transition">
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl mb-1">📸</span>
            <p className="text-sm text-stone-500 font-medium px-4 text-center">
              {arquivo ? arquivo.name : "Clique para escolher a foto"}
            </p>
          </div>
          {/* O input de verdade fica escondido aqui */}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setArquivo(e.target.files?.[0] ?? null)}
          />
        </label>
      </div>

      {mensagem && (
        <p className={`text-sm font-medium ${mensagem.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
          {mensagem}
        </p>
      )}

      <button
        type="submit"
        disabled={salvando}
        className="w-full rounded-xl bg-terracota-600 py-3 font-bold text-white hover:bg-terracota-700 disabled:opacity-50 transition shadow-md"
      >
        {salvando ? 'Salvando...' : 'Salvar Alterações'}
      </button>
    </form>
  )
}