import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '@/features/user/hooks/queries/useUser';
import { Button } from '@/shared/components/shadcn/button';
import ScheduleCard from '@/features/user/components/ScheduleCard';
import ShortcutGrid from '@/features/user/components/ShortcutGrid';
import StatsCard from '@/features/user/components/StatsCard';
import { createShortcuts } from '@/features/user/constants/user.ui.constants';
import ProfileCard from '@/features/user/components/ProfileCard';
import EngagementSection from '@/features/user/components/EngagementSection';
import TopBar from '@/features/user/components/TopBar';
import { Separator } from '@/shared/components/shadcn/separator';
import { DownloadIcon } from 'lucide-react';

const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: user, isLoading } = useUser(id!);

  if (isLoading) return <div className="p-10 text-center">로딩 중...</div>;
  if (!user) return <div className="p-10 text-center">유저 없음</div>;

  const shortcuts = createShortcuts(id!, navigate);

  return (
    <div className="bg-zinc-50 min-h-screen flex flex-col">
      <TopBar />
      <div className="flex-1 overflow-y-auto space-y-4 pb-6">
        <ProfileCard user={user} />
        <StatsCard />
        <ScheduleCard />
        <div className="w-auto flex flex-row gap-2 mx-4">
          <Button
            onClick={() => navigate(`/user/${id}/add-donation`)}
            className="rounded-full w-full bg-red-cross-red-100 hover:bg-red-cross-red-80 py-5"
          >
            헌혈 등록하기
          </Button>
        </div>
        <ShortcutGrid items={shortcuts} />
        <Separator />
        <EngagementSection />
        <div className="flex flex-row gap-2 mx-4 items-center justify-center">
          <Button className="flex-2 rounded-full w-full bg-red-cross-red-100 hover:bg-red-cross-red-80 py-5 shadow-sm">
            <DownloadIcon />
            레드 커넥트 설치
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-red-cross-red-20 p-5 shadow-sm"
          >
            📢
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-red-cross-red-20 p-5 shadow-sm"
          >
            📢
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
