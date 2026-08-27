import Hero from '@/components/home/Hero'
import CardapioDoDia from '@/components/home/CardapioDoDia'
import NovoCafe from '@/components/home/NovoCafe'
import Equipe from '@/components/home/Equipe'
import Localizacao from '@/components/home/Localizacao'
import TourVirtual from '@/components/home/TourVirtual'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Hero />
      
      <div id="cardapio">
        <CardapioDoDia />
      </div>

      <div id="cafe">
        <NovoCafe />
      </div>

      <div id="equipe">
        <Equipe />
      </div>

      <div id="localizacao">
        <Localizacao />
      </div>

      <div id="tour">
        <TourVirtual />
      </div>
    </main>
  )
}