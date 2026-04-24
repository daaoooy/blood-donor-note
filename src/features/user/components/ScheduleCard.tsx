import { cn } from '@/lib/utils';
import { CheckCircle2, Clock } from 'lucide-react';

import { Separator } from '@/shared/components/shadcn/separator';

import { MOCK_USER } from '@/features/user/data/user.mock';
import {
  formatDate,
  isAvailableToday,
} from '@/features/user/utils/user.utiles';
import InfoRow from '@/features/user/components/InfoRow';

const ScheduleCard = () => {
  const available = isAvailableToday(MOCK_USER.nextAvailableDate);

  return (
    <div className="rounded-3xl bg-white p-4 shadow-sm mx-4">
      <div className="flex gap-2 items-center">
        <div
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full',
            available ? 'bg-emerald-100' : 'bg-zinc-100',
          )}
        >
          {available ? (
            <CheckCircle2 size={20} className="text-red-cross-red-100" />
          ) : (
            <Clock size={20} className="text-zinc-500" />
          )}
        </div>

        <div>
          <p className="text-md font-semibold text-zinc-900">
            {available ? '지금 헌혈 가능해요' : '아직 헌혈이 어려워요'}
          </p>
        </div>
      </div>

      <Separator className="my-3" />

      <div className="space-y-3 text-sm px-1">
        <InfoRow
          label="마지막 헌혈"
          value={formatDate(MOCK_USER.lastDonationDate)}
        />

        <InfoRow label="헌혈 종류" value={MOCK_USER.lastDonationType ?? '-'} />

        <div className="flex justify-between items-center">
          <span className="text-zinc-500">다음 가능일</span>
          <span className="text-sm font-medium text-zinc-900">
            {formatDate(MOCK_USER.nextAvailableDate)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
