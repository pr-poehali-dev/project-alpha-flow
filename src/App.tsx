import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import Qualification from "./pages/about/Qualification";
import Results from "./pages/about/Results";
import Publications from "./pages/about/Publications";
import Achievements from "./pages/about/Achievements";

import Programs from "./pages/documents/Programs";
import Plans from "./pages/documents/Plans";
import MO from "./pages/documents/MO";

import PsychologistTips from "./pages/students/PsychologistTips";
import Proforientation from "./pages/students/Proforientation";

import ParentsTips from "./pages/parents/ParentsTips";
import ParentsMeeting from "./pages/parents/ParentsMeeting";

import DiagnosticMaterials from "./pages/teachers/DiagnosticMaterials";
import Memos from "./pages/teachers/Memos";
import Games from "./pages/teachers/Games";

import Fairytale from "./pages/interesting/Fairytale";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />

      {/* О себе */}
      <Route path="/about/qualification" element={<Qualification />} />
      <Route path="/about/results" element={<Results />} />
      <Route path="/about/publications" element={<Publications />} />
      <Route path="/about/achievements" element={<Achievements />} />

      {/* Документы */}
      <Route path="/documents/programs" element={<Programs />} />
      <Route path="/documents/plans" element={<Plans />} />
      <Route path="/documents/mo" element={<MO />} />

      {/* Обучающимся */}
      <Route path="/students/tips" element={<PsychologistTips />} />
      <Route path="/students/proforientation" element={<Proforientation />} />

      {/* Родителям */}
      <Route path="/parents/tips" element={<ParentsTips />} />
      <Route path="/parents/meeting" element={<ParentsMeeting />} />

      {/* Педагогам */}
      <Route path="/teachers/diagnostic" element={<DiagnosticMaterials />} />
      <Route path="/teachers/memos" element={<Memos />} />
      <Route path="/teachers/games" element={<Games />} />

      {/* Интересно */}
      <Route path="/interesting/fairytale" element={<Fairytale />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
