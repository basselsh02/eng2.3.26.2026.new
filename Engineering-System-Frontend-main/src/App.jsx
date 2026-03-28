import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import Forbidden from "./components/pages/Forbidden/Forbidden";
import TemplateHome from "./components/pages/TemplateHome/TemplateHome";
import UsersManagement from "./components/pages/Users/UsersManagement";

// مكتب النشر pages
import Tahsilat from "./components/pages/Nashr/Tahsilat";
import Bay3Krassat from "./components/pages/Nashr/Bay3Krassat";
import Tiba3aMozakrat from "./components/pages/Nashr/Tiba3aMozakrat";
import ManagerTasks from "./components/pages/shared/ManagerTasks";
import EmployeeTasks from "./components/pages/shared/EmployeeTasks";
import AssignTask from "./components/pages/shared/AssignTask";
import ByanatAlmashro3 from "./components/pages/Nashr/ByanatAlmashro3";
import IstkmalByanat from "./components/pages/Nashr/IstkmalByanat";
import IdafaShorot from "./components/pages/Nashr/IdafaShorot";

// مكتب العقود pages
import Ejra2at from "./components/pages/Oqood/Ejra2at";
import TasjilAlMawqifAlMali from "./components/pages/Oqood/TasjilAlMawqifAlMali";
import ByanatAlmashro3Oqood from "./components/pages/Oqood/ByanatAlmashro3Oqood";
import TasjilByanAlMashro3 from "./components/pages/Oqood/TasjilByanAlMashro3";

// مكتب الصيانة pages
import SiyanaBayan from "./components/pages/Siyana/SiyanaBayan";
import MohamatAlModirTawridat from "./components/pages/Tawridat/MohamatAlModirTawridat";
import MohamatAlMowazafTawridat from "./components/pages/Tawridat/MohamatAlMowazafTawridat";
import TasjilAlMawqifAlHali from "./components/pages/Tawridat/TasjilAlMawqifAlHali";
import MutabaatAlTaswyat from "./components/pages/Tawridat/MutabaatAlTaswyat";
import ByanAwamarTawrid from "./components/pages/Tawridat/ByanAwamarTawrid";
import NamozhajDaribatAlMabiaat from "./components/pages/Tawridat/NamozhajDaribatAlMabiaat";
import MutabaatAlTaqarir from "./components/pages/Tawridat/MutabaatAlTaqarir";
import MohamatAlModirMashtarawat from "./components/pages/Mashtarawat/MohamatAlModirMashtarawat";
import MohamatAlMowazafMashtarawat from "./components/pages/Mashtarawat/MohamatAlMowazafMashtarawat";
import ByanatAlmashro3at from "./components/pages/Mashtarawat/ByanatAlmashro3at";
import MahdarEjra2at from "./components/pages/Mashtarawat/MahdarEjra2at";
import ByanAlTa3aqud from "./components/pages/Mizaniya/ByanAlTa3aqud";
import TasjilAlMakhsamat from "./components/pages/Mizaniya/TasjilAlMakhsamat";
import TasjilKhetabaatAlDaman from "./components/pages/Hesabat/TasjilKhetabaatAlDaman";
import MutabaatDukholWaKhuroojAlMustakhlasat from "./components/pages/Hesabat/MutabaatDukholWaKhuroojAlMustakhlasat";
import AlTaqarir from "./components/pages/Hesabat/AlTaqarir";

import store from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <TemplateHome /> },
      { path: "forbidden", element: <Forbidden /> },

      // مكتب النشر - مهام المدير
      { path: "nashr/mohamat-almodir", element: <ManagerTasks officeId="nashr" officeName="مكتب النشر" /> },
      { path: "nashr/tahsilat", element: <Tahsilat /> },
      { path: "nashr/bay3-krassat", element: <Bay3Krassat /> },

      // مكتب النشر - مهام الموظف
      { path: "nashr/mohamat-almowazaf", element: <EmployeeTasks officeId="nashr" officeName="مكتب النشر" /> },
      { path: "nashr/tiba3a-mozakrat", element: <Tiba3aMozakrat /> },

      // مكتب النشر - صفحات العمل
      { path: "nashr/byanat-almashro3", element: <ByanatAlmashro3 /> },
      { path: "nashr/bunod-ala3mal", element: <ByanatAlmashro3 /> },
      { path: "nashr/tarshih-alsharaket", element: <ByanatAlmashro3 /> },
      { path: "nashr/istkmal-byanat", element: <IstkmalByanat /> },
      { path: "nashr/idafa-shorot", element: <IdafaShorot /> },

      // مكتب العقود - صفحات العمل
      { path: "oqood/ejra2at", element: <Ejra2at /> },
      { path: "oqood/tasjil-almawqif-almali", element: <TasjilAlMawqifAlMali /> },

      // مكتب العقود - صفحات العمل (متابعة)
      { path: "oqood/byanat-almashro3", element: <ByanatAlmashro3Oqood /> },
      { path: "oqood/tasjil-byan-almashro3", element: <TasjilByanAlMashro3 /> },

      // مكتب الصيانة - صفحات العمل
      { path: "siyana/bayan-mutawaqif", element: <SiyanaBayan /> },

      // مكتب التوريدات
      { path: "tawridat/mohamat-almodir", element: <MohamatAlModirTawridat /> },
      { path: "tawridat/mohamat-almowazaf", element: <MohamatAlMowazafTawridat /> },
      { path: "tawridat/tasjil-almawqif-alhali", element: <TasjilAlMawqifAlHali /> },
      { path: "tawridat/mutabaat-altaswyat", element: <MutabaatAlTaswyat /> },
      { path: "tawridat/byan-awamar-tawrid", element: <ByanAwamarTawrid /> },
      { path: "tawridat/namozhaj-daribat-almabiaat", element: <NamozhajDaribatAlMabiaat /> },
      { path: "tawridat/mutabaat-altaqarir", element: <MutabaatAlTaqarir /> },

      // مكتب المشتريات
      { path: "mashtarawat/mohamat-almodir", element: <MohamatAlModirMashtarawat /> },
      { path: "mashtarawat/mohamat-almowazaf", element: <MohamatAlMowazafMashtarawat /> },
      { path: "mashtarawat/byanat-almashro3at", element: <ByanatAlmashro3at /> },
      { path: "mashtarawat/mahdar-ejra2at", element: <MahdarEjra2at /> },

      // مكتب الميزانية
      { path: "mizaniya/byan-alta3aqud", element: <ByanAlTa3aqud /> },
      { path: "mizaniya/tasjil-almakhsamat", element: <TasjilAlMakhsamat /> },

      // مكتب الحسابات
      { path: "hesabat/tasjil-khetabaat-aldaman", element: <TasjilKhetabaatAlDaman /> },
      { path: "hesabat/mutabaat-dukhol-khurooj-almustakhlasat", element: <MutabaatDukholWaKhuroojAlMustakhlasat /> },
      { path: "hesabat/altaqarir", element: <AlTaqarir /> },
      { path: "assign-task/:officeId/:taskId", element: <AssignTask /> },
      { path: "users", element: <UsersManagement /> },
    ],
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}
