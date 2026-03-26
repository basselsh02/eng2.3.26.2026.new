import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import Forbidden from "./components/pages/Forbidden/Forbidden";
import TemplateHome from "./components/pages/TemplateHome/TemplateHome";

// مكتب النشر pages
import Tahsilat from "./components/pages/Nashr/Tahsilat";
import Bay3Krassat from "./components/pages/Nashr/Bay3Krassat";
import Tiba3aMozakrat from "./components/pages/Nashr/Tiba3aMozakrat";
import ByanatAlmashro3 from "./components/pages/Nashr/ByanatAlmashro3";
import IstkmalByanat from "./components/pages/Nashr/IstkmalByanat";
import IdafaShorot from "./components/pages/Nashr/IdafaShorot";

// مكتب العقود pages
import Ejra2at from "./components/pages/Oqood/Ejra2at";
import Ejra2atMaliya from "./components/pages/Oqood/Ejra2atMaliya";
import TasjilAlMawqifAlMali from "./components/pages/Oqood/TasjilAlMawqifAlMali";
import ByanatAlmashro3Oqood from "./components/pages/Oqood/ByanatAlmashro3Oqood";
import TasjilByanAlMashro3 from "./components/pages/Oqood/TasjilByanAlMashro3";

// مكتب الميزانية pages
import TasjilAlMakhsamat from "./components/pages/Mizaniya/TasjilAlMakhsamat";
import ByanAlTa3aqud from "./components/pages/Mizaniya/ByanAlTa3aqud";

import store from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <TemplateHome /> },
      { path: "forbidden", element: <Forbidden /> },

      // مكتب النشر - مهام المدير
      { path: "nashr/tahsilat", element: <Tahsilat /> },
      { path: "nashr/bay3-krassat", element: <Bay3Krassat /> },

      // مكتب النشر - مهام الموظف
      { path: "nashr/tiba3a-mozakrat", element: <Tiba3aMozakrat /> },

      // مكتب النشر - صفحات العمل
      { path: "nashr/byanat-almashro3", element: <ByanatAlmashro3 /> },
      { path: "nashr/bunod-ala3mal", element: <ByanatAlmashro3 /> },
      { path: "nashr/tarshih-alsharaket", element: <ByanatAlmashro3 /> },
      { path: "nashr/istkmal-byanat", element: <IstkmalByanat /> },
      { path: "nashr/idafa-shorot", element: <IdafaShorot /> },

      // مكتب العقود - مهام المدير
      { path: "oqood/ejra2at", element: <Ejra2at /> },
      { path: "oqood/ejra2at-maliya", element: <Ejra2atMaliya /> },
      { path: "oqood/tasjil-almawqif-almali", element: <TasjilAlMawqifAlMali /> },

      // مكتب العقود - مهام الموظف / صفحات العمل
      { path: "oqood/byanat-almashro3", element: <ByanatAlmashro3Oqood /> },
      { path: "oqood/tasjil-byan-almashro3", element: <TasjilByanAlMashro3 /> },

      // مكتب الميزانية - صفحات العمل
      { path: "mizaniya/tasjil-almakhsamat", element: <TasjilAlMakhsamat /> },
      { path: "mizaniya/byan-alta3aqud", element: <ByanAlTa3aqud /> },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </Provider>
  );
}
