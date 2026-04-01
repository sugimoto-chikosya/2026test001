import { Link, useLocation } from "react-router";
import { useState } from "react";

export function CompanySidebar() {
  const location = useLocation();

  const menuItems = [
    { label: "会社選択", path: "/company-selection?view=select" },
    { label: "会計事務所マスタ", path: "/company-selection?view=accounting-office" },
    { label: "会社マスタ", path: "/company-selection?view=company-master" },
    { label: "担当者設定", path: "/company-selection?view=staff" },
    { label: "ユーザーアカウント", path: "/company-selection?view=user-account" },
  ];

  return (
    <aside
      className="w-64 p-4 h-screen"
      style={{
        background: 'linear-gradient(to bottom, #e6f7fbff, #b1e6faff)',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)'
      }}
    >
      <nav className="space-y-0">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block px-4 py-3 transition-colors hover:bg-white/30 font-semibold"
            style={{
              color: '#025AA2',
              borderBottom: '1px solid #ffffff'
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
