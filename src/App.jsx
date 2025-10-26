import { Navigate, Route, Routes } from 'react-router-dom';
import { Sidebar } from './layout/Sidebar';
import { DashboardPage } from './pages/Dashboard';
import { TemplatePage } from './pages/Template';
import { DemoFlowPage } from './pages/DemoFlow';
import { ScrollTopButton } from './components/ScrollTopButton';

const App = () => {
  return (
    <div className="sm-shell">
      <Sidebar />
      <main className="sm-main">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/demo" element={<DemoFlowPage />} />
          <Route path="/template" element={<TemplatePage />} />
          <Route path="/template/:sectionId" element={<TemplatePage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
      <ScrollTopButton />
    </div>
  );
};

export default App;
