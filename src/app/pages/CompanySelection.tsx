import { useSearchParams, useNavigate } from "react-router";
import { Building2, ChevronRight } from "lucide-react";

export function CompanySelection() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const view = searchParams.get("view") || "select";

  const handleCompanySelect = (companyId: string) => {
    // 会社選択後、ダッシュボードへ遷移
    navigate("/future-prediction");
  };

  // 会社選択画面
  if (view === "select") {
    const companies = [
      { id: "1", name: "株式会社サンプル商事", code: "SAMPLE001" },
      { id: "2", name: "テスト株式会社", code: "TEST002" },
      { id: "3", name: "デモ企業株式会社", code: "DEMO003" },
    ];

    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">会社選択</h1>
        <div className="bg-white rounded-lg shadow-sm">
          <div className="divide-y divide-gray-200">
            {companies.map((company) => (
              <button
                key={company.id}
                onClick={() => handleCompanySelect(company.id)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">{company.name}</p>
                    <p className="text-sm text-gray-500">{company.code}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 会計事務所マスタ
  if (view === "accounting-office") {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">会計事務所マスタ</h1>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600">会計事務所マスタの管理画面</p>
        </div>
      </div>
    );
  }

  // 会社マスタ
  if (view === "company-master") {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">会社マスタ</h1>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600">会社マスタの管理画面</p>
        </div>
      </div>
    );
  }

  // 担当者設定
  if (view === "staff") {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">担当者設定</h1>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600">担当者設定の管理画面</p>
        </div>
      </div>
    );
  }

  // ユーザーアカウント
  if (view === "user-account") {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">ユーザーアカウント</h1>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600">ユーザーアカウントの管理画面</p>
        </div>
      </div>
    );
  }

  return null;
}
