import ThemeToggle from "@/features/theme/components/ThemeToggle";
import { useTheme } from "@/features/theme/hooks/useTheme";

const MainPage = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col h-screen items-center justify-center p-2 relative overflow-hidden">
      <div className="h-10 w-full flex justify-start p-1.5 shrink-0">
        <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
      </div>
      <div className="h-full flex items-center">테스트 중입니다.</div>
    </div>
  );
};

export default MainPage;
