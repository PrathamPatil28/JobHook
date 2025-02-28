import './App.css'
import { createTheme, Divider, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import { ReactNode } from 'react';

const HomePage = lazy(() => import('./Pages/HomePage'))
const FindJob = lazy(() => import('./Pages/FindJob'))
const FindtalentPage = lazy(() => import('./Pages/FindtalentPage'))
const TalentProfilePage = lazy(() => import('./Pages/TalentProfilePage'))
const PostJobPage = lazy(() => import('./Pages/PostJobPage'))
const Header = lazy(() => import('./Components/header/Header'))
const Footer = lazy(() => import('./Components/footer/Footer'))
const JobDescPage = lazy(() => import('./Pages/JobDescPage'))
const ApplyJobPage = lazy(() => import('./Pages/ApplyJobPage'))
const CompanyPage = lazy(() => import('./Pages/CompanyPage'))
const PostedJobPage = lazy(() => import('./Pages/PostedJobPage'))
const JobHistoryPage = lazy(()=> import ('./Pages/JobHistoryPage'))
const SignupPage = lazy(()=> import ('./Pages/SignupPage'))
const ProfilePage = lazy(()=> import ('./Pages/ProfilePage'))


function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <div className='relative'>
      <Header />
      {location.pathname !== '/signup' && <Divider mr="xs" size="sm" mx="md" />}
      {children}
      <Footer />
    </div>
  );
}

function App() {
  const theme = createTheme({
    colors: {
      'bright-sun': ['#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'],
      'mine-shaft': ['#f2f2f2', '#e6e6e6', '#cccccc', '#b3b3b3', '#999999', '#808080', '#666666', '#4d4d4d', '#333333', '#1a1a1a'],
    },
    fontFamily: 'Poppins'
  });

  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/find-jobs" element={<FindJob />} />
            <Route path="/find-talents" element={<FindtalentPage />} />
            <Route path="/talent-profile" element={<TalentProfilePage />} />
            <Route path="/post-jobs" element={<PostJobPage />} />
            <Route path="/jobs" element={<JobDescPage />} />
            <Route path="/apply-job" element={<ApplyJobPage />} />
            <Route path='/company' element={<CompanyPage />} />
            <Route path='/posted-jobs' element={<PostedJobPage />} />
            <Route path='/job-history' element={<JobHistoryPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<SignupPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
