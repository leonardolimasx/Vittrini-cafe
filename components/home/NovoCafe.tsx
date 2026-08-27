export default function NovoCafe() {
  return (
    <section className="py-20 bg-terracota-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-terracota-800 mb-6">
              Um novo espaço pensado para você
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              Vem aí o nosso novo espaço de Café! Estamos preparando um ambiente aconchegante e moderno, ideal para aquele café da manhã especial, um lanche da tarde delicioso ou um bate-papo com os amigos.
            </p>
            <p className="text-stone-600 leading-relaxed text-justify">
              Em breve, você poderá desfrutar de cafés selecionados, doces artesanais e salgados fresquinhos, tudo com a qualidade Vittrini que você já conhece. Fique ligado para acompanhar a nossa inauguração!
            </p>
          </div>

          <div className="w-full md:w-1/2 h-80 bg-stone-200 rounded-3xl overflow-hidden shadow-xl border border-stone-200">
            {/* O Next.js vai buscar a imagem "cafe.jpg" na pasta public */}
            <img 
              src="/cafe.jpg" 
              alt="Novo Espaço Café Vittrini" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}