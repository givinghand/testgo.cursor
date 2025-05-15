
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LandingPage } from "@/pages/LandingPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { TestSelectionPage } from "@/pages/TestSelectionPage";
import { UserStatusPage } from "@/pages/UserStatusPage";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/giris" element={<LoginPage />} />
            <Route path="/uye-ol" element={<RegisterPage />} />
            <Route path="/test-coz" element={<TestSelectionPage />} />
            <Route path="/durumum" element={<UserStatusPage />} />
            {/* Mevcut diğer sayfalarınızı buraya ekleyebilirsiniz */}
            {/* <Route path="/testler" element={<TestPage />} /> */}
            {/* <Route path="/durum-analizi" element={<StatusAnalysisPage />} /> */}
            {/* <Route path="/eksik-konular" element={<MissingTopicsPage />} /> */}
            {/* <Route path="/denemeler" element={<ExamPage />} /> */}
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
