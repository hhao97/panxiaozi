import { getAllResource } from "@/lib/db/queries/resource";
import type { MetadataRoute } from "next";

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 基础URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pansousuo.cc";

  // 静态路由
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
      images: ["https://pan.xiaozi.cc/og.png"],
    },
    {
      url: `${baseUrl}/resource`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  const resources = await getAllResource();
  const resourceRoutes = resources.map((resource) => ({
    url: `${baseUrl}/resource/${resource.pinyin}`,
    lastModified: resource.updatedAt || new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...resourceRoutes];
}
