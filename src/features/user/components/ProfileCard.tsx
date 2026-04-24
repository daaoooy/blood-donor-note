import type { UserProfile } from '@/features/user/types/user.domain.types';
import { formatDate } from '@/features/user/utils/user.utiles';

interface ProfileCardProps {
  user: UserProfile;
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  const getInitial = (name: string) => name.charAt(0);

  return (
    <div className="mx-4 rounded-md bg-white p-5 shadow-sm border border-zinc-100">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-red-400 to-red-600 text-white font-semibold text-lg shadow-sm">
          {getInitial(user.name)}
        </div>

        <div className="flex flex-col flex-1 gap-1">
          <p className="text-base font-semibold text-zinc-900 leading-tight">
            {user.name}
          </p>
          <p className="text-xs text-zinc-400 mt-1">{formatDate(user.birth)}</p>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-[10px] text-zinc-400 mb-1">Blood Type</span>
          <div className="rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600 border border-red-100">
            {user.bloodType}
          </div>
        </div>
      </div>

      <div className="mt-4 h-px bg-zinc-100" />

      <div className="mt-3 flex justify-between text-sm">
        <div className="flex flex-col">
          <span className="text-zinc-400 text-xs">Status</span>
          <span className="font-medium text-zinc-800">Active</span>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-zinc-400 text-xs">Level</span>
          <span className="font-medium text-red-500">Lv.3</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
