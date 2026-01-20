import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { LatestPosts } from "@/components/home/LatestPosts";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
      <LatestPosts />
    </Layout>
  );
};

export default Index;
