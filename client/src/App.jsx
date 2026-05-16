import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotebookLayout from './components/NotebookLayout';
import LandingPage from './pages/LandingPage';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import Question5 from './pages/Question5';
import Question6 from './pages/Question6';
import Question7 from './pages/Question7';
import Question8 from './pages/Question8';
import Question9 from './pages/Question9';
import Question10 from './pages/Question10';
import Question11 from './pages/Question11';
import Appendices from './pages/Appendices';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotebookLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="question-1" element={<Question1 />} />
          <Route path="question-2" element={<Question2 />} />
          <Route path="question-3" element={<Question3 />} />
          <Route path="question-4" element={<Question4 />} />
          <Route path="question-5" element={<Question5 />} />
          <Route path="question-6" element={<Question6 />} />
          <Route path="question-7" element={<Question7 />} />
          <Route path="question-8" element={<Question8 />} />
          <Route path="question-9" element={<Question9 />} />
          <Route path="question-10" element={<Question10 />} />
          <Route path="question-11" element={<Question11 />} />
          <Route path="appendices" element={<Appendices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
