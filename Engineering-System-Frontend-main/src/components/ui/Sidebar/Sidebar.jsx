import React, { useState } from "react";
import { BiHome, BiShieldAlt2, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { MdOutlinePublish } from "react-icons/md";
import { PiFilesLight } from "react-icons/pi";
import { TbReportMoney } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
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
        children: [],
      },
      {
        id: "oqood-mohamat-almowazaf",
        label: "مهام الموظف",
        isDropdown: false,
        children: [],
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
            id: "oqood-ejra2at-maliya-2",
            label: "الاجراءات المالية",
            path: "/oqood/ejra2at-maliya",
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
    id: "maktab-mizaniya",
    label: "مكتب الميزانية",
    icon: <TbReportMoney className="size-5" />,
    isDropdown: true,
    children: [
      {
        id: "mizaniya-mohamat-almodir",
        label: "مهام المدير",
        isDropdown: false,
        children: [],
      },
      {
        id: "mizaniya-mohamat-almowazaf",
        label: "مهام الموظف",
        isDropdown: false,
        children: [],
      },
      {
        id: "mizaniya-safhat-al3amal",
        label: "صفحات العمل",
        isDropdown: false,
        children: [
          {
            id: "mizaniya-tasjil-makhsamat",
            label: "تسجيل المخصمات المالية",
            path: "/mizaniya/tasjil-almakhsamat",
          },
          {
            id: "mizaniya-byan-ta3aqud",
            label: "تسجيل بيان التعاقد والموازنة والصرف",
            path: "/mizaniya/byan-alta3aqud",
          },
        ],
      },
    ],
  },
  {
    id: "maktab-mashtarawat",
    label: "مكتب المشتريات",
    icon: <HiOutlineShoppingCart className="size-5" />,
    isDropdown: true,
    children: [
      {
        id: "mashtarawat-mohamat-almodir",
        label: "مهام المدير",
        isDropdown: false,
        children: [
          {
            id: "mashtarawat-modir-1",
            label: "مهام المدير",
            path: "/mashtarawat/mohamat-almodir",
          },
        ],
      },
      {
        id: "mashtarawat-mohamat-almowazaf",
        label: "مهام الموظف",
        isDropdown: false,
        children: [
          {
            id: "mashtarawat-mowazaf-1",
            label: "مهام الموظف",
            path: "/mashtarawat/mohamat-almowazaf",
          },
        ],
      },
      {
        id: "mashtarawat-safhat-al3amal",
        label: "صفحات العمل",
        isDropdown: false,
        children: [
          {
            id: "mashtarawat-byanat-almashro3at",
            label: "بيانات المشروعات",
            path: "/mashtarawat/byanat-almashro3at",
          },
          {
            id: "mashtarawat-mahdar-ejra2at",
            label: "محضر اجراءات الفتح والبت الفني",
            path: "/mashtarawat/mahdar-ejra2at",
          },
          {
            id: "mashtarawat-mahdar-ejra2at-mali",
            label: "محضر اجراءات الفتح والبت المالي",
            path: "/mashtarawat/mahdar-ejra2at-mali",
          },
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
