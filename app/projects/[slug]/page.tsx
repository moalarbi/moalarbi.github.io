import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
// import { Redis } from "@upstash/redis"; ← نحذفه مؤقتاً
// import { ReportView } from "./view"; ← نحذفه مؤقتاً

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

// const redis = Redis.fromEnv(); ← نحذفه مؤقتاً

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  // لتجنب فشل التصدير، نستخدم شرط بديل
  if (!project) {
    return <div className="p-10 text-center">🔍 المشروع غير موجود</div>;
  }

  // const views = await redis.get<number>(...); ← نحذفه مؤقتاً
  const views = 1234; // رقم وهمي مؤقت

  return (
    <div dir="rtl" lang="ar" className="bg-zinc-50 min-h-screen text-right">
      <Header project={project} views={views} />
      {/* <ReportView slug={project.slug} /> ← نحذفه مؤقتاً */}

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}