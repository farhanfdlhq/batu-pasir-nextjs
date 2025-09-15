import { MetadataRoute } from "next";
import { PRODUCTS } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://batu-pasir-nextjs.vercel.app/"; // Ganti dengan domain Anda nanti

  const staticRoutes = ["", "/catalog", "/about", "/contact", "/estimator"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const productRoutes = PRODUCTS.map((product) => ({
    url: `${siteUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
