export default function Localizacao() {
  return (
    <section className="py-16 bg-stone-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-terracota-800 mb-10">
          Venha nos Visitar
        </h2>

        <div className="grid md:grid-cols-2 gap-0 bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200">
          
          {/* Informações */}
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-terracota-700 mb-6">Vittrini Restaurante</h3>

            <div className="space-y-5 text-stone-600">
              <p className="flex items-start gap-3">
                <span className="text-xl mt-1">📍</span>
                <span>Praça Gabriel Botelho, 66 - Centro<br/>Botelhos - MG, 37720-000</span>
              </p>

              <p className="flex items-start gap-3">
                <span className="text-xl mt-1">🕒</span>
                <span>
                  <strong>Seg a Sáb:</strong> 09:00 às 18:00<br/>
                  <strong>Domingo:</strong> Fechado
                </span>
              </p>

              <p className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <span>(35) 99871-7153</span>
              </p>
            </div>

            <a
              href="https://wa.me/5535998717153"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block text-center rounded-lg bg-green-600 py-3 px-6 font-bold text-white hover:bg-green-700 transition shadow-md"
            >
              Fazer Pedido no WhatsApp
            </a>
          </div>

          {/* Mapa do Google */}
          <div className="h-64 md:h-full min-h-[350px] w-full bg-stone-200">
            <iframe
              src="https://maps.google.com/maps?q=Pra%C3%A7a%20Gabriel%20Botelho,%2066%20-%20Centro,%20Botelhos%20-%20MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  )
}