import React, { useState } from "react";
import { BiHome, BiShieldAlt2, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { MdOutlinePublish } from "react-icons/md";
import { PiFilesLight } from "react-icons/pi";
import { MdOutlineBuild } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RiFundsLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const menu = [
  {
    id: "template-home",
    label: "Template Home",
    icon: <BiHome className="size-5" />,
    path: "/",
  },
  {
    id: "forbidden",
    label: "Forbidden",
    icon: <BiShieldAlt2 className="size-5" />,
    path: "/forbidden",
  },
  {
    id: "maktab-nashr",
    label: "مكتب النشر",
    icon: <MdOutlinePublish className="size-5" />,
    isDropdown: true,
    children: [
      {
        id: "mohamat-almodir",
        label: "مهام المدير",
        path: "/nashr/mohamat-almodir",
        children: [],
      },
      {
        id: "mohamat-almowazaf",
        label: "مهام الموظف",
        path: "/nashr/mohamat-almowazaf",
        children: [],
      },
      {
        id: "safhat-al3amal",
        label: "صفحات العمل",
        path: "/nashr/safhat-al3amal",
        children: [
          {
            id: "byanat-almashro3",
            label: "بيانات المشروع",
            path: "/nashr/byanat-almashro3",
          },
          {
            id: "istkmal-byanat",
            label: "استكمال بيانات المشروع بالنشر",
            path: "/nashr/istkmal-byanat",
          },
          {
            id: "tahsilat",
            label: "التحصيلات",
            path: "/nashr/tahsilat",
          },
          {
            id: "bay3-krassat",
            label: "بيع الكراسات واستلام التأمين الابتدائي",
            path: "/nashr/bay3-krassat",
          },
          {
            id: "tiba3a-mozakrat",
            label: "طباعة مذكرات النشر",
            path: "/nashr/tiba3a-mozakrat",
          },
        ],
      },
    ],
  },
  {
    id: "maktab-oqood",
    label: "مكتب العقود",
    icon: <PiFilesLight className="size-5" />,
    isDropdown: true,
    children: [
      {
        id: "oqood-mohamat-almodir",
        label: "مهام المدير",
        isDropdown: false,
        children: [
          {
            id: "ejra2at",
            label: "الاجراءات",
            path: "/oqood/ejra2at",
          },
          {
            id: "tasjil-almawqif-almali",
            label: "تسجيل الموقف المالي للمشروعات",
            path: "/oqood/tasjil-almawqif-almali",
          },
        ],
      },
      {
        id: "oqood-mohamat-almowazaf",
        label: "مهام الموظف",
        isDropdown: false,
        children: [
          {
            id: "oqood-byanat-almashro3",
            label: "بيانات المشروع",
            path: "/oqood/byanat-almashro3",
          },
          {
            id: "oqood-tasjil-byan",
            label: "تسجيل بيان المشروع",
            path: "/oqood/tasjil-byan-almashro3",
          },
        ],
      },
      {
        id: "oqood-safhat-al3amal",
        label: "صفحات العمل",
        isDropdown: false,
        children: [
          {
            id: "oqood-ejra2at-2",
            label: "الاجراءات",
            path: "/oqood/ejra2at",
          },
          {
            id: "oqood-byanat-2",
            label: "بيانات المشروع",
            path: "/oqood/byanat-almashro3",
          },
          {
            id: "oqood-tasjil-byan-2",
            label: "تسجيل بيان المشروع",
            path: "/oqood/tasjil-byan-almashro3",
          },
          {
            id: "oqood-mawqif-mali",
            label: "تسجيل الموقف المالي للمشروعات",
            path: "/oqood/tasjil-almawqif-almali",
          },
        ],
      },
    ],
  },
  {
    id: "maktab-siyana",
    label: "مكتب الصيانة",
    icon: <MdOutlineBuild className="size-5" />,
    isDropdown: true,
    children: [
      {
        id: "siyana-mohamat-almodir",
        label: "مهام المدير",
        isDropdown: false,
        children: [],
      },
      {
        id: "siyana-mohamat-almowazaf",
        label: "مهام الموظف",
        isDropdown: false,
        children: [],
      },
      {
        id: "siyana-safhat-al3amal",
        label: "صفحات العمل",
        isDropdown: false,
        children: [
          {
            id: "siyana-bayan-mutawaqif",
            label: "بيان بالمتوقف في قسم الصيانة حتى تاريخ",
            path: "/siyana/bayan-mutawaqif",
          },
        ],
      },
    ],
  },
  {
    id: "maktab-tawridat",
    label: "مكتب التوريدات",
    icon: <BsBoxes className="size-5" />,
    isDropdown: true,
    children: [
      { id: "tawridat-mohamat-almodir", label: "مهام المدير", path: "/tawridat/mohamat-almodir", children: [] },
      { id: "tawridat-mohamat-almowazaf", label: "مهام الموظف", path: "/tawridat/mohamat-almowazaf", children: [] },
      {
        id: "tawridat-safhat-al3amal",
        label: "صفحات العمل",
        path: "/tawridat/safhat-al3amal",
        children: [
          { id: "tawridat-tasjil-mawqif", label: "تسجيل الموقف الحالي للمشروع", path: "/tawridat/tasjil-almawqif-alhali" },
          { id: "tawridat-mutabaat-taswyat", label: "متابعة التسويات", path: "/tawridat/mutabaat-altaswyat" },
          { id: "tawridat-byan-awamar", label: "بيان أوامر التوريد", path: "/tawridat/byan-awamar-tawrid" },
          { id: "tawridat-daribat", label: "نموذج ضريبة المبيعات", path: "/tawridat/namozhaj-daribat-almabiaat" },
          { id: "tawridat-taqarir", label: "متابعة التقارير", path: "/tawridat/mutabaat-altaqarir" },
        ],
      },
    ],
  },
  {
    id: "maktab-mashtarawat",
    label: "مكتب المشتريات",
    icon: <FaBalanceScale className="size-5" />,
    isDropdown: true,
    children: [
      { id: "mashtarawat-mohamat-almodir", label: "مهام المدير", path: "/mashtarawat/mohamat-almodir", children: [] },
      { id: "mashtarawat-mohamat-almowazaf", label: "مهام الموظف", path: "/mashtarawat/mohamat-almowazaf", children: [] },
      {
        id: "mashtarawat-safhat-al3amal",
        label: "صفحات العمل",
        path: "/mashtarawat/safhat-al3amal",
        children: [
          { id: "mashtarawat-byanat", label: "بيانات المشروعات", path: "/mashtarawat/byanat-almashro3at" },
          { id: "mashtarawat-mahdar", label: "محضر إجراءات", path: "/mashtarawat/mahdar-ejra2at" },
        ],
      },
    ],
  },
  {
    id: "maktab-mizaniya",
    label: "مكتب الميزانية",
    icon: <RiFundsLine className="size-5" />,
    isDropdown: true,
    children: [
      {
        id: "mizaniya-safhat-al3amal",
        label: "صفحات العمل",
        path: "/mizaniya/safhat-al3amal",
        children: [
          { id: "mizaniya-ta3aqud", label: "بيان التعاقد", path: "/mizaniya/byan-alta3aqud" },
          { id: "mizaniya-makhsamat", label: "تسجيل المخصمات", path: "/mizaniya/tasjil-almakhsamat" },
        ],
      },
    ],
  },
  {
    id: "maktab-hesabat",
    label: "مكتب الحسابات",
    icon: <HiOutlineClipboardDocumentList className="size-5" />,
    isDropdown: true,
    children: [
      {
        id: "hesabat-safhat-al3amal",
        label: "صفحات العمل",
        path: "/hesabat/safhat-al3amal",
        children: [
          { id: "hesabat-daman", label: "تسجيل خطابات الضمان", path: "/hesabat/tasjil-khetabaat-aldaman" },
          { id: "hesabat-mutabaat", label: "متابعة دخول وخروج المستخلصات", path: "/hesabat/mutabaat-dukhol-khurooj-almustakhlasat" },
          { id: "hesabat-taqarir", label: "التقارير", path: "/hesabat/altaqarir" },
        ],
      },
    ],
  },
];

function DropdownItem({ item, isOpen, level = 0 }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <NavLink
        to={item.path}
        className={({ isActive }) => `
          flex items-center gap-2 w-full p-2 rounded-md transition-colors duration-200
          ${isActive ? "bg-primary-500 text-white" : "hover:bg-primary-300 hover:text-primary-content-300"}
          ${level === 1 ? "pr-8 text-sm" : level === 2 ? "pr-12 text-xs" : ""}
          ${!isOpen ? "justify-center" : ""}
        `}
      >
        <span className="font-medium">{isOpen ? item.label : ""}</span>
      </NavLink>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`
          flex items-center gap-2 w-full p-2 rounded-md transition-colors duration-200
          hover:bg-primary-300 hover:text-primary-content-300
          ${level === 1 ? "pr-8 text-sm" : ""}
          ${!isOpen ? "justify-center" : ""}
        `}
      >
        {isOpen && <span className="font-medium flex-1 text-right">{item.label}</span>}
        {isOpen && (open ? <BiChevronUp className="shrink-0" /> : <BiChevronDown className="shrink-0" />)}
      </button>
      {open && isOpen && (
        <div className="mt-1">
          {item.children.map((child) => (
            <DropdownItem key={child.id} item={child} isOpen={isOpen} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      className={`
        h-screen transition-all duration-300 overflow-hidden text-nowrap bg-base border-l border-background px-2
        ${isOpen ? "w-72" : "w-16"}
      `}
    >
      <div className="flex flex-col h-full overflow-y-auto py-6 space-y-1">
        {menu.map((item) => {
          if (item.isDropdown) {
            const isDropdownOpen = openDropdowns[item.id];
            return (
              <div key={item.id}>
                <button
                  onClick={() => toggleDropdown(item.id)}
                  className={`
                    flex items-center gap-2 w-full p-2 rounded-md transition-colors duration-200
                    hover:bg-primary-300 hover:text-primary-content-300
                    ${!isOpen ? "justify-center" : ""}
                    ${isDropdownOpen ? "bg-primary-100 text-primary-700" : ""}
                  `}
                >
                  <span className="text-lg shrink-0">{item.icon}</span>
                  {isOpen && (
                    <>
                      <span className="font-medium flex-1 text-right">{item.label}</span>
                      {isDropdownOpen ? (
                        <BiChevronUp className="shrink-0" />
                      ) : (
                        <BiChevronDown className="shrink-0" />
                      )}
                    </>
                  )}
                </button>

                {isDropdownOpen && isOpen && (
                  <div className="mt-1 space-y-1">
                    {item.children.map((child) => (
                      <DropdownItem key={child.id} item={child} isOpen={isOpen} level={1} />
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-2 w-full p-2 rounded-md transition-colors duration-200
                ${isActive ? "bg-primary-500 text-white" : "hover:bg-primary-300 hover:text-primary-content-300"}
                ${!isOpen ? "justify-center" : ""}
              `}
            >
              <span className="text-lg shrink-0">{item.icon}</span>
              {isOpen && <span className="font-medium">{item.label}</span>}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
