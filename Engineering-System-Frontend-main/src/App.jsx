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
