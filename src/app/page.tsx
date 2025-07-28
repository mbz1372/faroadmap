import RoadmapCard from "@/components/RoadmapCard";
import { allRoadmaps } from "@/data";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">نقشه‌های راه یادگیری</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allRoadmaps.map((item) => (
          <RoadmapCard key={item.id} title={item.title} description={item.description} />
        ))}
      </div>
    </main>
  );
}
