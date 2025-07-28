interface Props {
  title: string;
  description: string;
}

export default function RoadmapCard({ title, description }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition-all">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
