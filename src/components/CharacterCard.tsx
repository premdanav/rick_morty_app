type CharacterCardProps = {
  name: string;
  image: string;
  status: string;
  species: string;
};

const statusColors = {
  Alive: "text-green-400",
  Dead: "text-red-400",
  unknown: "text-gray-400",
};

const CharacterCard = ({
  name,
  image,
  status,
  species,
}: CharacterCardProps) => (
  <div className="bg-[#2A2A2A] text-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
    <img src={image} alt={name} className="w-full h-56 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-bold mb-1">{name}</h2>
      <p
        className={`text-sm ${
          statusColors[status as keyof typeof statusColors]
        }`}
      >
        {status}
      </p>
      <p className="text-sm text-gray-400">{species}</p>
    </div>
  </div>
);
export default CharacterCard;
