// src/components/CopyEmailCard.tsx
"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function CopyEmailCard() {
  const handleCopy = () => {
    navigator.clipboard.writeText("fabrizziozv.17@gmail.com")
      .then(() => {
        toast.success("¡Correo copiado!", {
          description: (<span className="text-black">
            fabrizziozv.17@gmail.com se copió al portapapeles.
          </span>),
        });
      })
      .catch(() => {
        toast.error("Hubo un error al copiar el correo.");
      });
  };

  return (
    <div className="relative flex items-center">
      <div className="absolute inset-0 translate-x-3 translate-y-3 bg-yellow-300 border-2 border-black"></div>
      <div className="relative bg-white border-2 border-black w-120 p-6">
        <label htmlFor="email" className="block text-lg font-bold mb-2">Correo Electrónico</label>
        <div className="flex items-center gap-2">
          <input
            id="email"
            type="text"
            value="fabrizziozv.17@gmail.com"
            readOnly
            className="flex-1 border-2 border-black p-2 text-gray-700"
          />
          <Button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-yellow-300 border-2 border-black px-4 py-2"
          >
            <Copy className="w-4 h-4" />
            Copiar
          </Button>
        </div>
      </div>
    </div>
  );
}
