import { useSearchParams } from "react-router";

export function ProfitLoss() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "current";

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">損益分析</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          {view === "current" ? "月次損益（当期実績予測）" : "月次損益（来期予測）"}
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left">項目</th>
                <th className="border border-gray-200 px-4 py-2 text-right">4月</th>
                <th className="border border-gray-200 px-4 py-2 text-right">5月</th>
                <th className="border border-gray-200 px-4 py-2 text-right">6月</th>
                <th className="border border-gray-200 px-4 py-2 text-right">7月</th>
                <th className="border border-gray-200 px-4 py-2 text-right">8月</th>
                <th className="border border-gray-200 px-4 py-2 text-right">9月</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">売上高</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥12,500,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥13,200,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥11,800,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥14,300,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥13,900,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥15,100,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">売上原価</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥7,500,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥7,920,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥7,080,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥8,580,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥8,340,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right">¥9,060,000</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">売上総利益</td>
                <td className="border border-gray-200 px-4 py-2 text-right font-bold">¥5,000,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right font-bold">¥5,280,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right font-bold">¥4,720,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right font-bold">¥5,720,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right font-bold">¥5,560,000</td>
                <td className="border border-gray-200 px-4 py-2 text-right font-bold">¥6,040,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
