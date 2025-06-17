"use client";

import { useState } from "react";
import { Check, Zap, Shield } from "lucide-react";

export default function Options() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);

  const options = [
    {
      id: "creative",
      title: "Pilihan Bijak",
      subtitle: "pilihan terbaik untuk projekmu",
      image: "/opt2.png",
      description: "Perfect for creative professionals and artistic projects",
      icon: Shield,
      colors: {
        primary: "from-red-500 to-pink-500",
        secondary: "from-red-600 to-pink-600",
        glow: "shadow-red-500/25",
        border: "border-red-500",
        bg: "from-red-500/5 to-pink-500/5",
        accent: "text-red-400",
        accentBg: "bg-red-500/20",
        bgOverlay: "from-red-900/20 via-black to-pink-900/20",
      },
    },
    {
      id: "technical",
      title: "Pilihan Kurang Matang",
      subtitle: "projek kurang perhitungan yang matang",
      image: "/opt1.png",
      description: "Ideal for developers and data-driven solutions",
      icon: Zap,
      colors: {
        primary: "from-blue-500 to-indigo-500",
        secondary: "from-blue-600 to-indigo-600",
        glow: "shadow-blue-500/25",
        border: "border-blue-500",
        bg: "from-blue-500/5 to-indigo-500/5",
        accent: "text-blue-400",
        accentBg: "bg-blue-500/20",
        bgOverlay: "from-blue-900/20 via-black to-indigo-900/20",
      },
    },
  ];

  const currentTheme = hoveredOption
    ? options.find((opt) => opt.id === hoveredOption)?.colors
    : selectedOption
    ? options.find((opt) => opt.id === selectedOption)?.colors
    : null;

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Base background */}

      {/* Radial glow effect */}
      {currentTheme && (
        <div
          className={`fixed inset-0 transition-all duration-1000 ease-out opacity-30`}
          style={{
            background: `radial-gradient(ellipse 800px 600px at center, ${
              currentTheme.primary.includes("red")
                ? "rgba(239, 68, 68, 0.1)"
                : "rgba(59, 130, 246, 0.1)"
            } 0%, transparent 70%)`,
          }}
        />
      )}

      <div className="w-full max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-700 ${
              currentTheme ? "text-white drop-shadow-lg" : "text-white"
            }`}
          >
            Seperti apa tipemu?
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-700 ${
              currentTheme ? "text-gray-300" : "text-gray-400"
            }`}
          >
            Pilihan untuk proyekmu akan mempengaruhi bagaimana hasilnya. Pilih
            dengan bijak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {options.map((option) => {
            const IconComponent = option.icon;
            const isSelected = selectedOption === option.id;
            const isHovered = hoveredOption === option.id;
            const isActive = isSelected || isHovered;

            return (
              <div
                key={option.id}
                className={`relative group cursor-pointer transition-all duration-700 ${
                  isActive ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setSelectedOption(option.id)}
                onMouseEnter={() => setHoveredOption(option.id)}
                onMouseLeave={() => setHoveredOption(null)}
              >
                {/* Glow effect behind card */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-1000 blur-xl ${
                    isActive
                      ? `bg-gradient-to-br ${option.colors.primary} opacity-20 scale-110`
                      : "opacity-0"
                  }`}
                />

                {/* Card */}
                <div
                  className={`
                  relative h-full rounded-2xl border transition-all duration-700 overflow-hidden backdrop-blur-sm
                  ${
                    isActive
                      ? `bg-gradient-to-br from-gray-900/80 to-black/80 ${option.colors.border} ${option.colors.glow} shadow-2xl`
                      : "bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800 hover:border-gray-700"
                  }
                `}
                >
                  {/* Animated background gradient */}
                  <div
                    className={`
                    absolute inset-0 transition-all duration-700 rounded-2xl
                    ${
                      isActive
                        ? `bg-gradient-to-br ${option.colors.bg} opacity-100`
                        : "opacity-0"
                    }
                  `}
                  />

                  {/* Animated border gradient */}
                  <div
                    className={`
                    absolute inset-0 rounded-2xl transition-all duration-700
                    bg-gradient-to-br ${option.colors.primary} opacity-0 blur-sm
                    ${isActive ? "opacity-10" : ""}
                  `}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 pb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`
                          p-3 rounded-xl transition-all duration-700
                          ${
                            isActive
                              ? `${option.colors.accentBg} ${option.colors.accent} shadow-lg`
                              : "bg-gray-800 text-gray-400 group-hover:bg-gray-700"
                          }
                        `}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3
                            className={`text-2xl font-bold transition-colors duration-300 ${
                              isActive
                                ? "text-white drop-shadow-sm"
                                : "text-white"
                            }`}
                          >
                            {option.title}
                          </h3>
                          <p
                            className={`text-sm transition-colors duration-300 ${
                              isActive ? option.colors.accent : "text-gray-400"
                            }`}
                          >
                            {option.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Selection indicator */}
                      <div
                        className={`
                        w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                        ${
                          isSelected
                            ? `${option.colors.border} bg-gradient-to-br ${option.colors.primary}`
                            : isHovered
                            ? `${option.colors.border} bg-gradient-to-br ${option.colors.primary} opacity-50`
                            : "border-gray-600 group-hover:border-gray-500"
                        }
                      `}
                      >
                        {isSelected && (
                          <Check className="w-3 h-3 text-white font-bold" />
                        )}
                      </div>
                    </div>

                    {/* Main Image */}
                    <div className="flex-1 p-6 pt-2">
                      <div className="relative h-full min-h-[300px] group/image">
                        <div
                          className={`
                          relative overflow-hidden rounded-xl h-full transition-all duration-500
                          ${
                            isActive
                              ? `ring-2 ${option.colors.border} ring-opacity-50`
                              : ""
                          }
                        `}
                        >
                          <img
                            src={option.image || "/placeholder.svg"}
                            alt={`${option.title} showcase`}
                            className={`w-full h-full object-cover transition-all duration-500 ${
                              isActive
                                ? "brightness-110 scale-105"
                                : "brightness-90 group-hover/image:brightness-100 group-hover/image:scale-102"
                            }`}
                          />
                          <div
                            className={`
                            absolute inset-0 transition-all duration-500
                            ${
                              isActive
                                ? `bg-gradient-to-t ${option.colors.primary} opacity-10`
                                : "bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover/image:from-black/20"
                            }
                          `}
                          />

                          {/* Image overlay content */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p
                              className={`text-white font-medium transition-all duration-300 ${
                                isActive
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-80 translate-y-2"
                              }`}
                            >
                              {option.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
