import { Link, useLocation } from "react-router";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const location = useLocation();
  const [isPredictionInputOpen, setIsPredictionInputOpen] = useState(false);

  // パスに応じてメニュー項目を切り替え
  const getMenuItems = () => {
    if (location.pathname === "/profit-loss") {
      return [
        { label: "損益比較", path: "/profit-loss?view=comparison" },
        { label: "月次損益（来期予測）", path: "/profit-loss?view=next" },
      ];
    }

    if (location.pathname === "/customer-analysis") {
      return [
        { label: "損益比較", path: "/customer-analysis?view=comparison" },
        { label: "科目別（月次推移）", path: "/customer-analysis?view=monthly" },
        { label: "科目明細", path: "/customer-analysis?view=detail" },
      ];
    }

    if (location.pathname === "/future-prediction") {
      return [
        { label: "月次損益（当期実績予測）", path: "/profit-loss?view=current" },
        { label: "月次損益（来期予測）", path: "/profit-loss?view=next" },
      ];
    }

    // デフォルト（未来予測）
    return [
      { label: "月次損益（当期実績予測）", path: "/profit-loss?view=current" },
      { label: "月次損益（来期予測）", path: "/profit-loss?view=next" },
    ];
  };

  const menuItems = getMenuItems();

  // 予測入力を表示するかどうかを判定
  const showPredictionInput = location.pathname !== "/customer-analysis";

  const predictionSubItems = [
    { label: "期初予測の確定", path: "/prediction/initial" },
    { label: "期中の予測修正", path: "/prediction/mid-term" },
    { label: "来期予測の立案", path: "/prediction/next-term" },
  ];

  return (
    <aside
      className="w-64 p-4 h-screen"
      style={{
        background: 'linear-gradient(to bottom, #0057DB, #37A8FF, #5DEFFF)',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)'
      }}
    >
      <nav className="space-y-0">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block px-4 py-6 transition-colors hover:bg-white/30 font-semibold"
            style={{
              color: '#ffffffff',
              borderBottom: '1px solid #ffffff4b'
            }}
          >
            {item.label}
          </Link>
        ))}

        {showPredictionInput && (
          <div>
            <button
              onClick={() => setIsPredictionInputOpen(!isPredictionInputOpen)}
              className="w-full flex items-center justify-between px-4 py-3 transition-colors hover:bg-white/30 font-semibold"
              style={{
                color: '#ffffffff',
                borderBottom: '1px solid #ffffff4b'
              }}
            >
              <span>予測入力</span>
              {isPredictionInputOpen ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>

            {isPredictionInputOpen && (
              <div className="bg-white/20">
                {predictionSubItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-6 py-2.5 transition-colors hover:bg-white/30 text-sm"
                    style={{
                      color: '#ffffffff',
                      borderBottom: index < predictionSubItems.length - 1 ? '1px solid #ffffff4b' : 'none'
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>
    </aside>
  );
}
