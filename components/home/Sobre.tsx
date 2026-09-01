export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-6 bg-stone-50 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-800 mb-4">
            Sobre Nós
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* Conteúdo com Foto e Texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Espaço para a Foto (Borda branca removida) */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img 
              src="/sobre-equipe.jpg" 
              alt="Nossa equipe e espaço" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto Institucional */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-stone-800">
              Tradição, Sabor e Acolhimento
            </h3>
            <p className="text-stone-600 text-lg leading-relaxed">
              O Vittrini nasceu da paixão por proporcionar momentos especiais através de uma culinária acolhedora, saborosa e feita com ingredientes selecionados com todo o carinho.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Nosso compromisso diário é oferecer pratos do dia irresistíveis, marmitas preparadas com rigor e um ambiente onde cada cliente se sinta verdadeiramente em casa.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}