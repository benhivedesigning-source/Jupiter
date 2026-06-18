/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { Downloads } from "./pages/Downloads";
import { Feedback } from "./pages/Feedback";
import { HotRequirements } from "./pages/HotRequirements";
import { JobSecurity } from "./pages/JobSecurity";
import { CrossPlatformTraining } from "./pages/CrossPlatformTraining";
import { Compensation } from "./pages/Compensation";
import { JupiterFuture } from "./pages/JupiterFuture";
import { ReferralProgram } from "./pages/ReferralProgram";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<Industries />} />
          <Route path="careers">
            <Route index element={<Careers />} />
            <Route path="hot-requirements" element={<HotRequirements />} />
            <Route path="job-security" element={<JobSecurity />} />
            <Route path="cross-platform-training" element={<CrossPlatformTraining />} />
            <Route path="compensation" element={<Compensation />} />
            <Route path="future" element={<JupiterFuture />} />
            <Route path="referral-program" element={<ReferralProgram />} />
          </Route>
          <Route path="downloads" element={<Downloads />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

