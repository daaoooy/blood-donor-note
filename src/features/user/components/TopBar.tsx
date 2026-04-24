import KoreanRedCrossKrDefault from '@/shared/assets/korean-red-cross-kr-default.png';
import ThemeToggle from '@/features/theme/components/ThemeToggle';
import { useTheme } from '@/features/theme/hooks/useTheme';

const TopBar = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="sticky top-0 z-10 bg-background">
      <div className="flex items-center justify-between px-4 py-3">
        <img src={KoreanRedCrossKrDefault} className="w-24" />
        <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default TopBar;
