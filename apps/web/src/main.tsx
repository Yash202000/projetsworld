import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authentication from './app/drawer/pages/Authentication/Authentication';
import Database from './app/drawer/pages/Database/Database';
import Functions from './app/drawer/pages/Functions/function';
import Hosting from './app/drawer/pages/Hosting/Hosting';
import MachineLearning from './app/drawer/pages/MachineLearning/machineLearning';
import Storage from './app/drawer/pages/storage/storage';
import App from './app/app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="authentication" element={<Authentication />} />
            <Route path="database" element={<Database />} />
            <Route path="functions" element={<Functions />} />
            <Route path="hosting" element={<Hosting />} />
            <Route path="machinelearning" element={<MachineLearning />} />
            <Route path="storage" element={<Storage />} />
          </Route>
        </Routes>
  </BrowserRouter>
);
