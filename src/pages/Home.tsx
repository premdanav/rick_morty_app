import Header from "../components/Header";
import Footer from "../components/Footer";
import CharacterCard from "../components/CharacterCard";

const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    status: "Alive",
    species: "Human",
  },
  // Add more mock or real data
];

const Home = () => {
  return (
    <div className="bg-spaceGray min-h-screen text-white font-sans">
      <Header />
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map((char) => (
            <CharacterCard key={char.id} {...char} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
