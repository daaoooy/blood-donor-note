import { useNavigate, useParams } from 'react-router-dom';
import { Gamepad2, Lightbulb } from 'lucide-react';
import { Button } from '@/shared/components/shadcn/button';

const EngagementSection = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex gap-3 mx-4 h-32">
      <Button
        variant="ghost"
        onClick={() => navigate(`/user/${id}/quiz`)}
        className="flex-1 rounded-3xl bg-white p-5 shadow-sm justify-center h-full"
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-2 inline-flex items-center justify-center rounded-lg bg-red-50 p-2 text-red-cross-red-100">
              <Gamepad2 size={18} />
            </div>

            <p className="text-sm font-semibold pb-1">헌혈 퀴즈</p>
            <p className="mt-0.5 text-xs text-zinc-500">재미있게 지식 쌓기</p>
          </div>
        </div>
      </Button>

      <div className="flex rounded-3xl items-center justify-cneter bg-red-cross-warm-gray-20/50 py-5 px-6 shadow-sm cursor-default">
        <div className="flex items-center gap-2 flex-col">
          <div className="mt-0.5 rounded-lg bg-red-cross-warm-gray-40 p-1.5 text-red-cross-warm-gray-100">
            <Lightbulb size={16} />
          </div>

          <div>
            <p className="text-sm text-red-cross-warm-gray-100 pb-1">
              오늘의 팁
            </p>
            <p className="text-xs font-medium text-red-cross-warm-gray-80 leading-snug">
              헌혈 전에는 물을 충분히 마셔주세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementSection;
