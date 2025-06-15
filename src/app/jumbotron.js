import { useEffect, useState } from "react";

export default function Jumbotron() {
  const [scrollY, setScrollY] = useState(0);
  const [videoSize, setVideoSize] = useState({ width: 800, height: 450 }); // 16:9 aspect ratio

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Calculate scroll progress (0 to 1) with smooth easing
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const rawProgress = Math.min((currentScrollY / maxScroll) * 2, 1);
      // Apply smooth easing curve (ease-out)
      const scrollProgress = 1 - Math.pow(1 - rawProgress, 3);

      // Base dimensions
      const baseWidth = 800;
      const baseHeight = 450;

      // Maximum dimensions (container width - padding)
      const containerWidth = Math.min(1200, window.innerWidth - 48); // max-w-6xl with padding
      const maxWidth = containerWidth;
      const maxHeight = (maxWidth * 9) / 16; // maintain 16:9 aspect ratio

      // Calculate new dimensions based on scroll
      const newWidth = baseWidth + (maxWidth - baseWidth) * scrollProgress;
      const newHeight = baseHeight + (maxHeight - baseHeight) * scrollProgress;

      // Stop expanding when width reaches container
      const finalWidth = Math.min(newWidth, maxWidth);
      const finalHeight = Math.min(newHeight, maxHeight);

      setVideoSize({ width: finalWidth, height: finalHeight });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="py-8 text-center relative z-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Lebih dari{" "}
        <span
          className=" bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #F03030, #CC33CC)",
          }}
        >
          70%
        </span>{" "}
        proyek konstruksi di Indonesia
        <br />
        <span className="text-gray-400"> melenceng dari rencana</span>
      </h1>

      <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
        Waktu molor, Biaya membengkak, Kualitas menurun
      </p>

      <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-medium rounded-full">
        Konsultasi Sekarang →
      </button>

      {/* Central Video */}
      <div className="mt-8 flex justify-center">
        <div
          className="rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-75 ease-out"
          style={{
            width: `${videoSize.width}px`,
            height: `${videoSize.height}px`,
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/lzh33ajVxCE?si=9MLp0SrDVsGSUWUC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
