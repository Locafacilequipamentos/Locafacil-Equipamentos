
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-yellow-400">
      <header className="p-6 border-b border-yellow-500/30 backdrop-blur-xl bg-black/40">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-yellow-500 text-black rounded-xl flex items-center justify-center font-extrabold shadow-lg">
            L
          </div>
          <h1 className="text-2xl font-bold">Locadora Pro</h1>
        </div>
      </header>

      <main className="p-8 container mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/40 border border-yellow-500/20 rounded-2xl p-10 shadow-2xl backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Aluguel de Equipamentos Premium</h2>
          <p className="mb-6 text-yellow-200">Máquinas, ferramentas e equipamentos para sua obra ou evento.</p>
          <button
            onClick={() => setModal(true)}
            className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold shadow-xl hover:bg-yellow-400 transition"
          >
            Reservar Agora
          </button>
        </motion.section>
      </main>

      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-black/70 border border-yellow-500/20 p-8 rounded-2xl max-w-md w-full text-yellow-300"
          >
            <h3 className="text-xl mb-4 font-bold">Reserva</h3>
            <p>Formulário de reserva em desenvolvimento.</p>
            <button
              onClick={() => setModal(false)}
              className="mt-6 bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
