export default function Hero() {
  return (
    <div className="w-full flex flex-col">
      {/* Abas de Navegação Fixas no Topo */}
      <nav className="bg-[#132422] text-white py-4 px-4 sticky top-0 z-50 shadow-md font-sans">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-semibold">
          <li><a href="#" className="hover:text-[#7ba59a] transition">Início</a></li>
          <li><a href="#cardapio" className="hover:text-[#7ba59a] transition">Sugestão do Dia</a></li>
          <li><a href="#cafe" className="hover:text-[#7ba59a] transition text-[#7ba59a]">Novo Café</a></li>
          <li><a href="#sobre nos" className="hover:text-[#7ba59a] transition">Sobre Nós</a></li>
          <li><a href="#localizacao" className="hover:text-[#7ba59a] transition">Localização</a></li>
          <li><a href="#tour" className="hover:text-[#7ba59a] transition">Tour 360º</a></li>
        </ul>
      </nav>

      {/* Letreiro Principal com a Foto de Fundo do Restaurante */}
      <div 
        className="relative py-28 px-4 text-center text-white flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/fundo-restaurante.jpg')` }}
      >
        {/* Camada escura por cima da foto para destacar o texto */}
        <div className="absolute inset-0 bg-[#0f1f1d]/80 backdrop-blur-[2px]"></div>

        {/* Conteúdo do Letreiro (Fica acima da camada escura) */}
        <div className="relative z-10 mb-8 flex flex-col items-center">
          <span className="text-6xl md:text-8xl font-extrabold text-[#9ec4bc] tracking-wider drop-shadow-2xl mb-2 font-serif">
            VITTRINI
          </span>
          <span className="text-2xl md:text-3xl font-light tracking-widest text-stone-200 uppercase">
            Restaurante & Café
          </span>
        </div>
        
        {/* Endereço e Horários */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm md:text-base text-stone-200 bg-[#132422]/90 border border-[#7ba59a]/30 py-3 px-6 rounded-full shadow-lg font-sans backdrop-blur-md">
          <span className="flex items-center gap-2">
            📍 Praça Gabriel Botelho, 66 — Botelhos/MG
          </span>
          <span className="hidden md:inline text-[#7ba59a]">•</span>
          <span className="flex items-center gap-2">
            🕒 Seg a Sáb, 09:00 às 18:00
          </span>
        </div>

      </div>
    </div>
  )
}