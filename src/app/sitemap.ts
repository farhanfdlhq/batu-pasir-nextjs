import { MetadataRoute } from "next";
import { PRODUCTS } from "@/constants"; // Import data produk Anda

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.batupasirjaya.com"; // Ganti dengan domain Anda nanti

  // URL untuk halaman statis
  const staticRoutes = ["", "/catalog", "/about", "/contact", "/estimator"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as "monthly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  // URL untuk setiap halaman produk
  const productRoutes = PRODUCTS.map((product) => ({
    url: `${siteUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
