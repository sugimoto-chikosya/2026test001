import { useState } from "react";
import { useNavigate } from "react-router";


export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // ログイン処理後、会社選択画面へ遷移
    navigate("/company-selection");
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #E5EEF5 0%, #F0F4F8 100%)'
      }}
    >
      {/* ログインフォーム円形 */}
      <div
        className="flex flex-col items-center justify-center"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, #2B4A6F 0%, #1E3550 100%)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="text-center mb-8">
          <p className="text-white/80 text-sm mb-2 tracking-wider">DATA DRIVEN Management</p>
          <h1 className="text-white text-5xl font-bold tracking-wide">B-Insight</h1>
        </div>

        <form onSubmit={handleLogin} className="w-full max-w-[300px] space-y-6">
          <div>
            <label className="block text-white text-sm mb-2">ユーザー名</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-md border-none outline-none"
              placeholder=""
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">パスワード</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border-none outline-none"
              placeholder=""
            />
          </div>

          <div className="text-center">
            <button
              type="button"
              className="text-white/60 text-xs hover:text-white/80 transition-colors"
            >
              パスワードをお忘れですか？
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full text-white font-bold text-lg transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(90deg, #37A8FF 0%, #5DEFFF 100%)',
              boxShadow: '0 4px 15px rgba(93, 239, 255, 0.4)'
            }}
          >
            ログイン
          </button>
        </form>
      </div>

      {/* フッター */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 text-sm mb-1">Supported by</p>
        <p className="text-gray-700 font-semibold">Active Link Agent Co., Ltd.</p>
      </div>
    </div>
  );
}
