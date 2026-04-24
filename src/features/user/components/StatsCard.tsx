import { Droplet } from 'lucide-react';
import { MOCK_USER } from '@/features/user/data/user.mock';

const StatsCard = () => {
  return (
    <div className="grid grid-cols-2 gap-3 mx-4">
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 text-zinc-500 text-xs mb-2">
          <Droplet size={14} /> 총 헌혈 횟수
        </div>
        <p className="mt-2 text-xl font-semibold text-zinc-900">
          {MOCK_USER.totalCount}회
        </p>
      </div>

      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 text-zinc-500 text-xs mb-2">
          <Droplet size={14} /> 누적 헌혈량
        </div>
        <p className="mt-2 text-xl font-semibold text-zinc-900">
          {MOCK_USER.totalVolumeMl.toLocaleString()}ml
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
