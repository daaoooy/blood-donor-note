import ThemeToggle from '@/features/theme/components/ThemeToggle';
import { useTheme } from '@/features/theme/hooks/useTheme';
import { Button } from '@/shared/components/shadcn/button';

const Home = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col h-screen items-center justify-center p-2 relative overflow-hidden">
      <div className="h-10 w-full flex justify-start p-1.5 shrink-0">
        <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
      </div>
      <div className="h-full flex items-center">
        <p className="pr-10">테스트 중</p>
        <div className="flex flex-row gap-2">
          <Button className="bg-red-cross-red-100 hover:bg-red-cross-red-80 text-white">
            색상 토큰 테스트 1
          </Button>
          <Button className="bg-red-cross-warm-gray-100 hover:bg-red-cross-warm-gray-80 text-white">
            색상 토큰 테스트 2
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
