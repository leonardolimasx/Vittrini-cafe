export default function TourVirtual() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-terracota-800 mb-4">
          Conheça o Nosso Espaço
        </h2>
        <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
          Faça um tour 360º pelo Vittrini e sinta-se em casa antes mesmo de chegar. Navegue pela imagem abaixo!
        </p>

        {/* Caixona do Tour 360 */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-200">
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!4v1787797185416!6m8!1m7!1sCAoSHENJQUJJaEM1V3dtak81eXY3Z0VId1ZWZVg1QnE.!2m2!1d-21.65055210101602!2d-46.39553626452413!3f59.98890345345286!4f-3.894251827127434!5f0.6780255163126824" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>

        </div>
      </div>
    </section>
  )
}