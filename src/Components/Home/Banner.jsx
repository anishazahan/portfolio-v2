import { useRouter } from "next/navigation";
import HomeBanner from "./HomeBanner";

const Banner = () => {
  const router = useRouter();
  return <>{router.pathname === "/" && <HomeBanner></HomeBanner>}</>;
};

export default Banner;
