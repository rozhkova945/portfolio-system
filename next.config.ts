import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Storybook лежить у public/storybook і використовує відносні шляхи,
  // тому адреса /storybook/ має лишатися зі слешем у кінці.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [{ source: "/storybook/", destination: "/storybook/index.html" }];
  },
};

export default nextConfig;
