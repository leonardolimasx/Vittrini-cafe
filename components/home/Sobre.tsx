export default function Sobre() {
  return (
    <section id="sobre" className="py-16 px-4 bg-stone-50 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Título alterado para Sobre Nós */}
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-800 mb-6">
          Sobre Nós
        </h2>

        {/* Linha decorativa elegante */}
        <div className="w-16 h-1 bg-terracota-600 mx-auto mb-8 rounded-full"></div>

        {/* Texto institucional (você pode alterar para a história do Vittrini) */}
        <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
          <p>
            O Vittrini nasceu da paixão por proporcionar momentos especiais através de uma culinária acolhedora, saborosa e feita com ingredientes selecionados. 
          </p>
          <p>
            Nosso compromisso é oferecer pratos do dia irresistíveis, marmitas preparadas com todo o cuidado e um ambiente onde cada cliente se sinta em casa.
          </p>
        </div>

      </div>
    </section>
  )
}