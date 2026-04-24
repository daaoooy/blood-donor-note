import { useState } from 'react';
import { Button } from '@/shared/components/shadcn/button';
import KeyRing3D from '@/shared/assets/keyring-3d.png';
import { motion } from 'framer-motion';
import KoreanRedCrossKrDefault from '@/shared/assets/korean-red-cross-kr-default.png';
import ThemeToggle from '@/features/theme/components/ThemeToggle';
import { useTheme } from '@/features/theme/hooks/useTheme';
import { useNavigate } from 'react-router-dom';
import { TEST_TAG_ID } from '@/shared/constants/test.constants';

const Home = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1200);
  };
  const { dark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-10 bg-background">
        <div className="flex items-center justify-between px-4 py-3">
          <img src={KoreanRedCrossKrDefault} className="w-24" />
          <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 px-6 gap-4 text-center">
        <motion.img
          src={KeyRing3D}
          alt="keyring-3d"
          className="w-36 mb-6"
          animate={
            clicked
              ? {
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 0.6 }}
        />

        <h3 className="text-lg font-bold mb-2">키링을 가지고 계신가요?</h3>
        <p className="text-sm text-zinc-500 mb-8">
          키링이 있다면 태그하여 바로 내 정보를 확인하고, <br />
          없다면 테스트 계정으로 체험해보세요.
        </p>

        <div className="flex flex-col gap-3 w-full">
          <Button
            className="w-full py-5 rounded-full bg-red-cross-red-100 hover:bg-red-cross-red-80 text-white shadow-sm"
            onClick={() => {
              handleClick();
              setTimeout(() => {
                navigate('/preview');
              }, 800);
            }}
          >
            네! 키링이 있습니다
          </Button>
          <Button
            variant="outline"
            className="w-full py-5 rounded-full shadow-md"
            onClick={() => {
              handleClick();
              setTimeout(() => {
                navigate(`/tag/${TEST_TAG_ID}`);
              }, 800);
            }}
          >
            아뇨! 키링이 없습니다
          </Button>
        </div>

        <div className="mt-5 text-xs text-zinc-400 leading-relaxed">
          키링을 태그하면 자동으로 페이지가 열립니다.
          <br />
          키링이 없다면 테스트 ID로 서비스를 이용할 수 있어요.
        </div>
      </div>
    </div>
  );
};

export default Home;
