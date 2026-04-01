import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { HeaderIcons } from "../components/icons/HeaderIcons";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "未来予想", path: "/app/future-prediction", icon: HeaderIcons.icon01 },
    { label: "損益分析", path: "/app/profit-loss", icon: HeaderIcons.icon02 },
    { label: "得意先別分析", path: "/app/customer-analysis", icon: HeaderIcons.icon03 },
    { label: "資金繰り", path: "/app/cash-flow", icon: HeaderIcons.icon04 },
    { label: "経営レポート", path: "/app/management-report", icon: HeaderIcons.icon05 },
    { label: "設定・データ管理", path: "/app/settings", icon: HeaderIcons.icon06 },
  ];

  return (
    <header
      className="w-full px-8 pt-4 relative"
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

      {/* コンテンツ */}
      <div className="flex items-center gap-3 justify-between w-full max-w-[1920px] mx-auto relative">
        {/* ロゴ */}
        <div className="flex items-center gap-2 px-4 py-2">
          <span className="font-bold text-3xl text-white">B-Insight</span>
        </div>

        {/* ナビゲーション */}
        <nav className="flex items-end gap-0 flex-1 justify-end">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative w-[140px] px-3 py-2 flex flex-col items-center justify-center gap-1 font-semibold transition-colors
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

        {/* アカウント + ドロワー */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg cursor-pointer"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img src="/header-icon07.svg" className="w-6 h-6" />
            </div>
            <span className="text-white">管理者アカウント</span>
          </div>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50">
              <button
                onClick={() => {
                  localStorage.clear(); // 任意（ログイン情報消す）
                  navigate("/login");
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                ログアウト
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}