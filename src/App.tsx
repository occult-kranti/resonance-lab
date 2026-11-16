import { Route, Routes } from "react-router";
import Layout from "@/components/Layout";
import SimProvider from "@/sim/SimProvider";
import FirstRunModal from "@/components/FirstRunModal";
import Overview from "@/pages/Overview";
import Console from "@/pages/Console";
import Chamber from "@/pages/Chamber";
import Copilot from "@/pages/Copilot";
import Timeline from "@/pages/Timeline";
import FieldExplorer from "@/pages/FieldExplorer";
import Vna from "@/pages/Vna";
import Ldv from "@/pages/Ldv";
import Oscilloscope from "@/pages/Oscilloscope";
import Reference from "@/pages/Reference";
import Runs from "@/pages/Runs";
import Notebook from "@/pages/Notebook";
import Learning from "@/pages/Learning";
import Training from "@/pages/Training";
import Challenge from "@/pages/Challenge";
import Faults from "@/pages/Faults";

export default function App() {
  return (
    <SimProvider>
      <Routes>
        {/* Nested-route pattern: Layout renders <Outlet/> (react-dev.md contract B) */}
        <Route element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="console" element={<Console />} />
          <Route path="chamber" element={<Chamber />} />
          <Route path="copilot" element={<Copilot />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="field-explorer" element={<FieldExplorer />} />
          <Route path="vna" element={<Vna />} />
          <Route path="ldv" element={<Ldv />} />
          <Route path="oscilloscope" element={<Oscilloscope />} />
          <Route path="reference" element={<Reference />} />
          <Route path="runs" element={<Runs />} />
          <Route path="notebook" element={<Notebook />} />
          <Route path="learning" element={<Learning />} />
          <Route path="training" element={<Training />} />
          <Route path="challenge" element={<Challenge />} />
          <Route path="faults" element={<Faults />} />
          <Route path="*" element={<Overview />} />
        </Route>
      </Routes>
      <FirstRunModal />
    </SimProvider>
  );
}
