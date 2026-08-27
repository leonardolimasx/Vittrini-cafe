export default function Equipe() {
  return (
    <section className="py-16 bg-stone-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200">
          
          {/* Imagem Fixa da Equipe */}
          <div className="w-full md:w-1/2 h-80 md:h-full min-h-[400px] bg-stone-200">
            {/* O Next.js busca as imagens fixas na pasta "public" */}
            <img 
              src="/equipe.jpg" 
              alt="Equipe Vittrini" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto que você mandou */}
          <div className="w-full md:w-1/2 p-8 md:pr-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-terracota-800 mb-6 leading-tight">
              Feitos de pessoas, unidos por um propósito
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-justify">
              <p>
                Por trás de cada prato, cada sorriso e cada momento vivido aqui, existe uma equipe que trabalha com dedicação, carinho e muita união.
              </p>
              <p>
                Mais do que colegas de trabalho, somos uma família. Cada pessoa tem um papel especial e, juntos, colocamos amor em tudo o que fazemos. É essa parceria, esse cuidado e essa vontade de fazer sempre o melhor que tornam o nosso restaurante tão especial.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}