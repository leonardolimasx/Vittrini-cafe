export default function Hero() {
  return (
    <div className="w-full flex flex-col">
      {/* Abas de Navegação Fixas no Topo */}
      <nav className="bg-[#132422] text-white py-4 px-4 sticky top-0 z-50 shadow-md">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-semibold font-sans">
          <li><a href="#" className="hover:text-[#7ba59a] transition">Início</a></li>
          <li><a href="#cardapio" className="hover:text-[#7ba59a] transition">Sugestão do Dia</a></li>
          <li><a href="#cafe" className="hover:text-[#7ba59a] transition text-[#7ba59a]">Novo Café</a></li>
          <li><a href="#equipe" className="hover:text-[#7ba59a] transition">Nossa Equipe</a></li>
          <li><a href="#localizacao" className="hover:text-[#7ba59a] transition">Localização</a></li>
          <li><a href="#tour" className="hover:text-[#7ba59a] transition">Tour 360º</a></li>
        </ul>
      </nav>

      {/* Letreiro Principal Limpo e Elegante */}
      <div className="bg-[#1c3532] py-24 px-4 text-center text-white flex flex-col items-center">
        
        <div className="mb-10 flex flex-col items-center">
          <span className="text-6xl md:text-8xl font-extrabold text-[#7ba59a] tracking-widest drop-shadow-lg mb-4">
            VITTRINI
          </span>
          <span className="text-3xl md:text-4xl font-light tracking-wider text-stone-300 italic">
            Restaurante e Café
          </span>
        </div>
        
        {/* Endereço e Horários */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm md:text-base text-stone-300 mt-4 bg-[#152a27] py-3 px-6 rounded-full shadow-inner font-sans">
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