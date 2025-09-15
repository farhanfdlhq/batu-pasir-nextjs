"use client";
import React, { useState } from "react";
import type { EstimatedMaterial } from "@/types";
import { SparklesIcon } from "@/components/IconComponents";

const EstimatorPage: React.FC = () => {
  const [projectDescription, setProjectDescription] = useState("");
  const [estimation, setEstimation] = useState<EstimatedMaterial[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const examplePrompts = [
    "Saya mau membangun pondasi rumah ukuran 8x12 meter.",
    "Membuat jalan setapak di taman panjang 15 meter, lebar 1 meter.",
    "Cor dak beton untuk lantai 2, luas 50 meter persegi.",
    "Plesteran dinding luar rumah seluas 100 meter persegi.",
  ];

  const handleEstimate = async () => {
    if (!projectDescription.trim()) {
      setError("Mohon masukkan deskripsi proyek Anda.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setEstimation(null);

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectDescription }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Gagal mendapatkan estimasi dari AI."
        );
      }

      const result: EstimatedMaterial[] = await response.json();
      setEstimation(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan yang tidak diketahui.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (prompt: string) => {
    setProjectDescription(prompt);
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-10">
          <SparklesIcon className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">
            AI Material Estimator
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Jelaskan proyek Anda, dan biarkan AI kami memberikan perkiraan
            kebutuhan material untuk Anda.
          </p>
        </div>

        <div className="bg-slate-50 p-8 rounded-lg shadow-md border border-slate-200">
          <div className="mb-4">
            <label
              htmlFor="project-description"
              className="block text-lg font-semibold text-slate-800 mb-2"
            >
              Deskripsi Proyek Anda
            </label>
            <textarea
              id="project-description"
              rows={5}
              className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition"
              placeholder="Contoh: Saya ingin membuat pondasi untuk rumah dengan ukuran 10x15 meter..."
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="mb-6">
            <p className="text-sm text-slate-600 mb-2">Atau coba contoh ini:</p>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(prompt)}
                  disabled={isLoading}
                  className="text-xs bg-white border border-slate-300 rounded-full px-3 py-1 text-slate-700 hover:bg-slate-100 transition disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleEstimate}
            disabled={isLoading}
            className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300 disabled:bg-slate-400 flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-3"></div>
                <span>Menghitung...</span>
              </>
            ) : (
              <>
                <SparklesIcon className="w-5 h-5 mr-2" /> Dapatkan Estimasi
              </>
            )}
          </button>
        </div>

        {error && (
          <div
            className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md"
            role="alert"
          >
            <strong className="font-bold">Oops! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {estimation && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Hasil Estimasi AI
            </h2>
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                      >
                        Nama Material
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                      >
                        Estimasi Kuantitas
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                      >
                        Catatan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {estimation.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-secondary">
                            {item.materialName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-slate-900">
                            {item.quantity} {item.unit}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-slate-600 max-w-xs break-words">
                            {item.notes}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500 text-center">
              *Estimasi ini dihasilkan oleh AI dan bersifat perkiraan. Kebutuhan
              aktual dapat bervariasi tergantung kondisi lapangan dan metode
              kerja.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstimatorPage;
