import { Link, useLocation, useNavigate } from "react-router";
import { LogOut, ChevronDown } from "lucide-react";
import { useState }  from "react";

interface CompanyHeaderProps {
  showNavigation?: boolean;
}

export function CompanyHeader({ showNavigation = false }: CompanyHeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const handleLogout = () => {
    // ログアウト処理
    navigate("/");
  };

  return (
    <header
      className="w-full h-[100px] border-b border-gray-200 flex items-center px-8 relative"
      style={{
        background: 'linear-gradient(90deg, #0057DB 0%, #37A8FF 50%, #5DEFFF 100%)'
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

        {/* ナビゲーション（会社選択画面では非表示） */}
        {showNavigation && (
          <nav className="flex items-center gap-6 flex-1">
            {/* ナビゲーション項目は必要に応じて追加 */}
          </nav>
        )}

        <div className="flex-1"></div>

        {/* アカウント名 */}
        <div className="relative">
          <button
            onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm">管</span>
            </div>
            <span className="text-white">管理者アカウント</span>
            <ChevronDown className="w-4 h-4 text-white" />
          </button>

          {/* ドロップダウンメニュー */}
          {isAccountMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>ログアウト</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
