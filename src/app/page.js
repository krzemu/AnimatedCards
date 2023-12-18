import Container from "@/components/UI/Container"
import BlueCard from "@/components/Cards/BlueCard"
import PinkCard from "@/components/Cards/PinkCard"
import RedCard from "@/components/Cards/RedCard"
import CyanCard from "@/components/Cards/CyanCard"
import BlueLongCard from "@/components/Cards/BlueLongCard"

export default function Home() {
  return (
    <Container>
      <BlueCard />
      <PinkCard />
      <BlueLongCard />
      <CyanCard />
      <RedCard />

      {/* <RedCard />
      <BlueCard />
      <BlueLongCard />
      <PinkCard />
      <BlueCard />
      <CyanCard />
      <PinkCard />
      <BlueLongCard />
      <BlueCard />
      <RedCard />
      <RedCard />
      <CyanCard />
      <BlueLongCard />
      <BlueCard />
      <CyanCard />
      <BlueLongCard />
      <RedCard />
      <BlueCard /> */}

    </Container>

  )
}
