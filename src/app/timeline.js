import {
  Zap,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Paintbrush,
  DollarSign,
  Headset,
  ShieldCheck,
  ShieldUser,
  ChartGantt,
  Binoculars,
} from "lucide-react";

const timelineEvents = [
  {
    id: 1,
    title: "Transparansi Proses",
    description:
      "Setiap langkah proyek dijelaskan secara terbuka, memastikan Anda selalu tahu perkembangan dan biaya.",
    icon: Sparkles,
    decorativeIcon: TrendingUp,
    impact: "Perkembangan biaya",
  },
  {
    id: 2,
    title: "Desain Sesuai Kebutuhan",
    description:
      "Kami pastikan desain memenuhi fungsi dan harapan, tanpa kompromi pada kualitas.",
    icon: Paintbrush,
    decorativeIcon: Sparkles,
    impact: "Kualitas terjamin",
  },
  {
    id: 3,
    title: "Estimasi Biaya Akurat",
    description:
      "RAB disusun dengan detail, menghindari pembengkakan biaya di tengah jalan.",
    icon: DollarSign,
    decorativeIcon: ArrowRight,
    impact: "Kontrol Biaya",
  },
  {
    id: 4,
    title: "Respons Cepat",
    description:
      "Tim kami selalu siap merespons pertanyaan dan kebutuhan Anda dengan sigap.",
    icon: Zap,
    decorativeIcon: Headset,
    impact: "#NoMiskomunikasi",
  },
  {
    id: 5,
    title: "Manajemen Proyek Berpengalaman",
    description:
      "Setiap tahapan dikelola terkoordinasi, meminimalkan risiko keterlambatan.",
    icon: ShieldCheck,
    decorativeIcon: ShieldUser,
    impact: "Tenaga Ahli Berpengalaman",
  },
  {
    id: 6,
    title: "Proses Mudah Dipahami",
    description:
      "Alur kerja yang jelas membuat Anda nyaman mengikuti setiap perkembangan proyek.",
    icon: ChartGantt,
    decorativeIcon: Binoculars,
    impact: "Easy Monitoring",
  },
];

export default function Timeline() {
  return (
    <div className="min-h-screen overflow-hidden py-8 md:py-16">
      <section className="">
        <h2 className="text-2xl text-center sm:text-5xl font-bold mb-10">
          Mengapa Memilih Kami?
        </h2>
      </section>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 relative">
        {/* Desktop Curved SVG Path */}
        <div className="absolute inset-0 justify-center hidden md:flex">
          <svg
            width="400"
            height="100%"
            className="absolute"
            viewBox="0 0 400 1400"
          >
            <defs>
              <linearGradient
                id="timelineGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="14%" stopColor="#ec4899" />
                <stop offset="28%" stopColor="#8b5cf6" />
                <stop offset="42%" stopColor="#9333ea" />
                <stop offset="56%" stopColor="#d946ef" />
                <stop offset="70%" stopColor="#f97316" />
                <stop offset="84%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M200 50 Q150 200 200 350 Q250 500 200 650 Q150 800 200 950 Q250 1100 200 1250 Q150 1350 200 1400"
              stroke="url(#timelineGradient)"
              strokeWidth="4"
              fill="none"
              filter="url(#glow)"
              className="drop-shadow-lg"
            />
            {/* Floating particles */}
            <circle
              cx="180"
              cy="150"
              r="2"
              fill="#ec4899"
              className="animate-pulse"
              opacity="0.6"
            />
            <circle
              cx="220"
              cy="300"
              r="1.5"
              fill="#8b5cf6"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
              opacity="0.8"
            />
            <circle
              cx="170"
              cy="450"
              r="2.5"
              fill="#9333ea"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
              opacity="0.4"
            />
            <circle
              cx="230"
              cy="600"
              r="1"
              fill="#d946ef"
              className="animate-pulse"
              style={{ animationDelay: "1.5s" }}
              opacity="0.7"
            />
            <circle
              cx="180"
              cy="750"
              r="2"
              fill="#f97316"
              className="animate-pulse"
              style={{ animationDelay: "2s" }}
              opacity="0.5"
            />
            <circle
              cx="220"
              cy="900"
              r="1.5"
              fill="#eab308"
              className="animate-pulse"
              style={{ animationDelay: "2.5s" }}
              opacity="0.6"
            />
            <circle
              cx="170"
              cy="1050"
              r="2"
              fill="#10b981"
              className="animate-pulse"
              style={{ animationDelay: "3s" }}
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Mobile Straight Line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-pink-500 via-violet-500 via-purple-600 via-fuchsia-500 via-orange-500 via-yellow-500 to-emerald-500 rounded-full shadow-lg shadow-purple-500/40 md:hidden"></div>

        {/* Desktop Timeline Events */}
        <div className="relative z-10 hidden md:block">
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            const DecorativeIcon = event.decorativeIcon;
            const isEven = index % 2 === 0;
            const topPosition = 100 + index * 200;

            return (
              <div
                key={event.id}
                className="absolute w-full flex items-center group"
                style={{ top: `${topPosition}px` }}
              >
                {/* Left Side Content */}
                <div
                  className={`w-1/2 ${
                    isEven
                      ? "pr-8 lg:pr-16 text-right"
                      : "pl-8 lg:pl-16 order-3"
                  }`}
                >
                  {isEven ? (
                    <>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 transform group-hover:scale-105">
                        {event.title}
                      </h3>
                      {/* Impact Badge */}
                      <div className="flex items-center justify-end space-x-2 mb-4">
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full px-4 py-2 group-hover:from-red-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                          <DecorativeIcon className="w-4 h-4 text-red-400 group-hover:text-pink-400 transition-colors duration-300" />
                          <span className="text-sm font-semibold text-red-300 group-hover:text-pink-300 transition-colors duration-300">
                            {event.impact}
                          </span>
                        </div>
                      </div>
                      {/* Decorative Elements */}
                      <div className="flex justify-end space-x-1 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <div
                          className="w-1 h-1 bg-pink-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </>
                  ) : (
                    <p className="text-base lg:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-all duration-300 transform group-hover:translate-x-2">
                      {event.description}
                    </p>
                  )}
                </div>

                {/* Center Icon */}
                <div className="relative z-20 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-white to-gray-100 rounded-full border-4 border-black shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 order-2">
                  <IconComponent className="w-5 h-5 lg:w-7 lg:h-7 text-black" />
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-20"></div>
                  {/* Floating decorative icon */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <DecorativeIcon className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Right Side Content */}
                <div
                  className={`w-1/2 ${
                    isEven
                      ? "pl-8 lg:pl-16 order-3"
                      : "pr-8 lg:pr-16 text-right"
                  }`}
                >
                  {isEven ? (
                    <p className="text-base lg:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-all duration-300 transform group-hover:translate-x-2">
                      {event.description}
                    </p>
                  ) : (
                    <>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 transform group-hover:scale-105">
                        {event.title}
                      </h3>
                      {/* Impact Badge */}
                      <div className="flex items-center justify-end space-x-2 mb-4">
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full px-4 py-2 group-hover:from-red-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                          <DecorativeIcon className="w-4 h-4 text-red-400 group-hover:text-pink-400 transition-colors duration-300" />
                          <span className="text-sm font-semibold text-red-300 group-hover:text-pink-300 transition-colors duration-300">
                            {event.impact}
                          </span>
                        </div>
                      </div>
                      {/* Decorative Elements */}
                      <div className="flex justify-end space-x-1 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <div
                          className="w-1 h-1 bg-pink-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Timeline Events */}
        <div className="md:hidden">
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            const DecorativeIcon = event.decorativeIcon;

            return (
              <div
                key={event.id}
                className="relative flex items-start group mb-16"
              >
                {/* Icon Circle - positioned on the line */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-white to-gray-100 rounded-full border-4 border-black shadow-2xl group-hover:scale-110 transition-all duration-300 flex-shrink-0 ml-1.5">
                  <IconComponent className="w-5 h-5 text-black" />
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-20"></div>
                  {/* Floating decorative icon */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <DecorativeIcon className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                      {event.title}
                    </h3>
                    {/* Impact Badge */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full px-4 py-2 group-hover:from-red-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                        <DecorativeIcon className="w-4 h-4 text-red-400 group-hover:text-pink-400 transition-colors duration-300" />
                        <span className="text-sm font-semibold text-red-300 group-hover:text-pink-300 transition-colors duration-300">
                          {event.impact}
                        </span>
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="flex space-x-1 opacity-30 group-hover:opacity-60 transition-opacity duration-300 mb-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      <div
                        className="w-1 h-1 bg-pink-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Future Indicator */}
        <div className="relative z-10 justify-center mt-[1400px] hidden md:flex">
          <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 border-2 border-dashed border-gray-600 rounded-full relative">
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-gray-500 rounded-full animate-bounce"></div>
            <div className="absolute inset-0 rounded-full border-2 border-gray-600 animate-pulse opacity-30"></div>
          </div>
          <div className="absolute left-1/2 transform translate-x-8 pl-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ingin tahu lebih jauh?
            </h3>
            <p className="text-gray-400 mb-4">
              Kenalan lebih jauh dan mengenal layanan kami.
            </p>
            <button className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Konsultasi Sekarang</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Future Indicator */}
        <div className="relative flex items-start mt-8 md:hidden">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-800 border-2 border-dashed border-gray-600 rounded-full relative flex-shrink-0 ml-1.5">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
            <div className="absolute inset-0 rounded-full border-2 border-gray-600 animate-pulse opacity-30"></div>
          </div>
          <div className="ml-8">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ingin tahu lebih jauh?
            </h3>
            <p className="text-gray-400 mb-4">
              Kenalan lebih jauh dan mengenal layanan kami.
            </p>
            <button className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Konsultasi Sekarang</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
