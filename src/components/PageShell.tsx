"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RegistrationModal from "./RegistrationModal";

export default function PageShell({
  children,
}: {
  children: React.ReactNode | ((props: { openRegister: () => void }) => React.ReactNode);
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onRegisterClick={() => setModalOpen(true)} />
      <main className="flex-1">
        {typeof children === "function"
          ? children({ openRegister: () => setModalOpen(true) })
          : children}
      </main>
      <Footer />
      <RegistrationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
