"use client";

import React from "react";
import { useState } from "react";
import {
  ClipboardCheck,
  DraftingCompass,
  LayoutTemplate,
  PencilRuler,
  Check,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cupon, setCupon] = useState("");
  const [note, setNote] = useState("");

  const [isSending, setIsSending] = useState(false);

  const services = [
    {
      id: "basic-desain",
      icon: PencilRuler, // Gantilah dengan ikon yang sesuai dari pustaka ikon Anda
      title: "Basic Desain",
      shortDescription: "Konsep desain awal",
      longDescription:
        "Layanan tahap awal perencanaan arsitektur yang mencakup identifikasi kebutuhan pengguna, analisis tapak, dan pengembangan ide bentuk bangunan. Diperuntukkan bagi klien yang ingin merumuskan visi proyek secara jelas dan fungsional.",
      gradient: "from-orange-500/20 via-orange-600/30 to-orange-700/20",
      selectedGradient: "from-orange-400/30 via-orange-500/40 to-orange-600/30",
      accentColor: "orange-500",
      borderColor: "border-orange-500/30",
      selectedBorderColor: "border-orange-400/60",
      textColor: "text-orange-200",
      selectedTextColor: "text-orange-100",
      titleColor: "text-orange-100",
    },
    {
      id: "skematik-desain",
      icon: LayoutTemplate, // Ganti sesuai ikon yang tersedia
      title: "Skematik Desain",
      shortDescription: "Pengembangan konsep",
      longDescription:
        "Fase ini memvisualisasikan gagasan menjadi layout ruang, bentuk massa bangunan, serta fasad. Skematik Desain berfungsi untuk validasi desain dari sisi fungsi, estetika, dan konteks tapak sebelum masuk ke tahap detail.",
      gradient: "from-slate-500/20 via-slate-600/30 to-slate-700/20",
      selectedGradient: "from-slate-400/30 via-slate-500/40 to-slate-600/30",
      accentColor: "slate-400",
      borderColor: "border-slate-500/30",
      selectedBorderColor: "border-slate-400/60",
      textColor: "text-slate-300",
      selectedTextColor: "text-slate-200",
      titleColor: "text-slate-200",
    },
    {
      id: "ded",
      icon: DraftingCompass, // Ganti sesuai ikon yang tersedia
      title: "DED (Detail Engineering Design)",
      shortDescription: "Dokumen gambar teknis",
      longDescription:
        "Dokumentasi lengkap gambar kerja arsitektural, struktural, dan MEP yang digunakan untuk pelaksanaan konstruksi di lapangan. DED disusun sesuai standar regulasi dan teknis, sebagai dasar kontraktor melaksanakan pembangunan.",
      gradient: "from-yellow-500/20 via-yellow-600/30 to-amber-600/20",
      selectedGradient: "from-yellow-400/30 via-yellow-500/40 to-amber-500/30",
      accentColor: "yellow-500",
      borderColor: "border-yellow-500/30",
      selectedBorderColor: "border-yellow-400/60",
      textColor: "text-yellow-200",
      selectedTextColor: "text-yellow-100",
      titleColor: "text-yellow-100",
    },
    {
      id: "assessment",
      icon: ClipboardCheck, // Ganti sesuai ikon yang tersedia
      title: "Assessment",
      shortDescription: "Evaluasi kondisi & kelayakan",
      longDescription:
        "Layanan ini mencakup penilaian kondisi bangunan eksisting, kesesuaian fungsi, serta potensi pengembangan. Kami melakukan kajian teknis dan administratif untuk memastikan kelayakan proyek dari sisi arsitektural dan regulatif.",
      gradient: "from-red-500/20 via-red-600/30 to-rose-600/20",
      selectedGradient: "from-red-400/30 via-red-500/40 to-rose-500/30",
      accentColor: "red-500",
      borderColor: "border-red-500/30",
      selectedBorderColor: "border-red-400/60",
      textColor: "text-red-200",
      selectedTextColor: "text-red-100",
      titleColor: "text-red-100",
    },
  ];

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleConfirmSend = async () => {
    if (!name || !email) {
      alert("Nama dan email wajib diisi");
      return;
    }

    const selected = services.find((s) => s.id === selectedService);

    if (isSending) return; // ⛔ cegah klik ulang
    setIsSending(true); // ✅ set langsung

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "wahyunabillafarhan25@gmail.com",
          subject: `Permintaan Layanan Oleh: ${name}`,
          text: `Nama: ${name}\nEmail: ${email}\nCupon: ${cupon}\nNote from Client: ${note}\n\nKlien memilih layanan:\n${selected.title}\n\nDeskripsi:\n${selected.longDescription}\n`,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Gagal mengirim:", result.message);
        alert("Gagal mengirim email");
      } else {
        alert("Email berhasil dikirim");
        setShowModal(false);
        setName("");
        setEmail("");
        setCupon("");
        setNote("");
        setSelectedService(null);
      }
    } catch (error) {
      console.error("Error saat mengirim:", error);
      alert("Terjadi kesalahan saat mengirim email");
    } finally {
      setIsSending(false); // ✅ Selesai loading
    }
  };

  const handleCancelSend = () => {
    setShowModal(false);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault(); // ⛔ blokir submit bawaan
    handleConfirmSend(); // ✅ eksekusi hanya sekali
  };

  return (
    <section className="min-h-screen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">
              Choose Your Service
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 leading-tight">
            What can we help
            <br />
            you build?
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Select the service that best fits your project needs. Each option is
            designed to deliver exceptional results.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowModal(true); // bukan handleSubmit
          }}
          className="space-y-8"
        >
          {/* Services Flex Container */}
          <div className="group/container flex flex-col lg:flex-row gap-4 lg:gap-2 lg:h-96">
            {services.map((service) => {
              const IconComponent = service.icon;
              const isSelected = selectedService === service.id;

              return (
                <div
                  key={service.id}
                  className="group/item cursor-pointer transition-all duration-500 ease-out flex-1 lg:hover:flex-[2]"
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <div
                    className={`
                      relative h-full rounded-3xl p-8 transition-all duration-500 overflow-hidden
                      bg-gradient-to-br ${
                        isSelected ? service.selectedGradient : service.gradient
                      }
                      ${
                        isSelected
                          ? service.selectedBorderColor
                          : service.borderColor
                      }
                      border backdrop-blur-xl
                      ${
                        isSelected
                          ? "shadow-2xl ring-2 ring-white/10"
                          : "shadow-lg hover:shadow-xl"
                      }
                    `}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
                    </div>

                    {/* Selection Indicator */}
                    {isSelected && (
                      <div className="absolute top-6 right-6 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                    )}

                    {/* Hidden Radio Input */}
                    <input
                      disabled={isSending}
                      type="radio"
                      name="service"
                      value={service.id}
                      checked={isSelected}
                      onChange={() => handleServiceSelect(service.id)}
                      className="sr-only"
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon */}
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg transition-all duration-300 ${
                            isSelected
                              ? "scale-110 shadow-xl bg-white/20"
                              : "group-hover/item:scale-105 group-hover/item:bg-white/15"
                          }`}
                        >
                          <IconComponent
                            className={`w-8 h-8 transition-colors duration-300 ${
                              isSelected
                                ? service.titleColor
                                : `${service.titleColor} group-hover/item:scale-110`
                            }`}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold mb-4 transition-all duration-300 ${
                          isSelected
                            ? service.titleColor
                            : `${service.titleColor} group-hover/item:text-white`
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* Text Container */}
                      <div className="flex-1 relative">
                        {/* Short Description */}
                        <div
                          className={`absolute inset-0 transition-opacity duration-200 ${"lg:group-hover/item:opacity-0 lg:group-hover/container:group-[:not(:hover)]/item:opacity-0"} opacity-100 delay-500`}
                        >
                          <p
                            className={`text-base leading-relaxed break-words hyphens-auto overflow-hidden ${
                              isSelected
                                ? service.selectedTextColor
                                : service.textColor
                            }`}
                          >
                            {service.shortDescription}
                          </p>
                        </div>

                        {/* Long Description */}
                        <div
                          className={`absolute inset-0 transition-opacity duration-300 opacity-0 lg:group-hover/item:opacity-100 lg:group-hover/item:delay-300 delay-0`}
                        >
                          <p
                            className={`text-sm leading-relaxed break-words hyphens-auto overflow-hidden ${service.selectedTextColor}`}
                          >
                            {service.longDescription}
                          </p>
                        </div>
                      </div>

                      {/* Selection Prompt */}
                      <div className="mt-6">
                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            isSelected
                              ? "bg-white text-black shadow-lg"
                              : "bg-white/10 text-gray-300 group-hover/item:bg-white/20"
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-4 h-4" />
                              Selected
                            </>
                          ) : (
                            "Click to select"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit Section */}
          <div className="text-center pt-12">
            <button
              type="submit"
              disabled={!selectedService}
              className={`
                group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-semibold
                transition-all duration-300 transform
                ${
                  selectedService
                    ? "bg-gradient-to-r cursor-pointer from-white to-gray-200 text-black shadow-2xl hover:shadow-3xl hover:scale-105 hover:from-gray-100 hover:to-white"
                    : "bg-gray-800 text-gray-500 cursor-not-allowed"
                }
              `}
            >
              <span>Continue with Selected Service</span>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  selectedService ? "bg-black/20" : "bg-gray-700"
                }`}
              >
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </div>
            </button>

            {selectedService && (
              <div className="mt-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">
                    <span className="font-medium text-white">
                      {services.find((s) => s.id === selectedService)?.title}
                    </span>{" "}
                    selected
                  </span>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 mx-3">
            <h2 className="text-xl font-bold mb-4">
              Konfirmasi Permintaan Layanan
            </h2>
            <p className=" text-sm">Anda memilih layanan: </p>
            <h4 className="mb-4 text-xl font-bold text-pink-700">
              {services.find((s) => s.id === selectedService)?.title}
            </h4>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Nama <span className="text-red-600">*</span>
                </label>
                <input
                  disabled={isSending}
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-red-600 focus:border-pink-700"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  disabled={isSending}
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-red-600 focus:border-pink-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Note
                </label>
                <textarea
                  disabled={isSending}
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-red-600 focus:border-pink-700 resize-none"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Have Cupon Code?
                </label>
                <input
                  disabled={isSending}
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-red-600 focus:border-pink-700"
                  value={cupon}
                  onChange={(e) => setCupon(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCancelSend}
                  className="cursor-pointer nline-flex items-center gap-2 bg-white/10 hover:bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-8 py-2"
                >
                  Batal
                </button>

                <button
                  disabled={isSending}
                  type="submit"
                  className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {isSending ? (
                    <div className="cursor-progress flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l5-5-5-5v4a12 12 0 00-12 12h4z"
                        ></path>
                      </svg>
                      <span>Mengirim...</span>
                    </div>
                  ) : (
                    <div className="cursor-pointer flex items-center justify-center gap-2">
                      <span>Konsultasi Sekarang</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
