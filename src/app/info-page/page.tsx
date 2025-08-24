import Link from "next/link";

const InfoPage = () => {
  return (
    <main>
        <h1>Pokemon Name</h1>
        <p><Link href="/info-page/pikachu">Pikachu</Link></p>
    </main>
  )
}

export default InfoPage;