import { allRoadmaps } from "@/data";
import RoadmapTree from "@/components/RoadmapTree";

interface Params {
  params: { slug: string };
}

export default function RoadmapPage({ params }: Params) {
  const roadmap = allRoadmaps.find((r) => r.id === params.slug);

  if (!roadmap) return <div className="text-center py-20">نقشه راه مورد نظر یافت نشد.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">{roadmap.title}</h1>
      <p className="text-center text-gray-600 mb-10">{roadmap.description}</p>
      <RoadmapTree steps={roadmap.data} />
    </div>
  );
}
