import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { HeaderIcons } from "../components/icons/HeaderIcons";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      label: "未来予想",
      path: "/app/future-prediction",
      icon: HeaderIcons.icon01,
    },
    { label: "損益分析", path: "/app/profit-loss", icon: HeaderIcons.icon02 },
    {
      label: "得意先別分析",
      path: "/app/customer-analysis",
      icon: HeaderIcons.icon03,
    },
    { label: "資金繰り", path: "/app/cash-flow", icon: HeaderIcons.icon04 },
    {
      label: "経営レポート",
      path: "/app/management-report",
      icon: HeaderIcons.icon05,
    },
    {
      label: "データ管理",
      path: "/app/settings",
      icon: HeaderIcons.icon06,
    },
  ];

  return (
    <header
      className="w-full pt-4 relative"
      style={{
        background:
          "linear-gradient(90deg, #0036d4 0%, #37A8FF 50%, #5DEFFF 100%)",
      }}
    >

      {/* オーバーレイ画像 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg-logo.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "260px",
          backgroundPosition: "left center",
          opacity: 0.2,
        }}
      />
      
      <div className="flex w-full items-center">
        {/* 👈 左：サイドバーと揃える */}
<div className="w-[280px] shrink-0 px-4 flex items-center">
<span className="font-bold text-3xl text-white -translate-y-[8px] translate-x-[28px]">
  B-Insight
</span>
</div>

        <div className="flex-1 flex items-center min-w-0">
          {/* 👉 中央：ナビ */}
          <nav className="flex-1 flex items-end gap-0 min-w-0 rounded-tl-3xl overflow-hidden">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
              flex-1 min-w-[80px] max-w-[140px]
              px-1.5 py-2 flex flex-col items-center justify-center gap-1
              font-semibold transition-colors
              ${
                isActive
                  ? "bg-white text-[#2176FF] rounded-t-md"
                  : "text-white/90 hover:bg-white/20 rounded-t-md"
              }
            `}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* 👉 右：アカウント */}
          <div className="flex items-center gap-2 px-2 min-w-0 relative">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500/80 hover:bg-blue-400 rounded-lg cursor-pointer transition-colors"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img src="/header-icon07.svg" className="w-6 h-6" />
              </div>
              <span className="text-white truncate max-w-[180px] hidden xl:block transition-all">
                管理者アカウント
              </span>
            </div>

            {open && (
              <div
                className="
  absolute right-0 top-full mt-2 w-52
  rounded-2xl
  bg-white/5
  backdrop-blur-2xl
  border border-white/20
  shadow-[0_8px_32px_rgba(0,0,0,0.2)]
  z-50
  overflow-hidden
"
              >
                {/* ナビ系 */}
                <button
                  onClick={() => navigate("/company-selection")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  会社選択
                </button>

                <button
                  onClick={() => navigate("/company-info")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  会社情報
                </button>

                <button
                  onClick={() => navigate("/account")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  アカウント情報
                </button>

                {/* 区切り */}
                <div className="border-t my-1" />

                {/* ログアウト */}
                <button
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                  className="
  w-full text-left px-4 py-2
  text-blue-300
  hover:bg-white/10
  hover:text-blue-200
  transition-all
"
                >
                  ログアウト
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}


