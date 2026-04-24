import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/components/shadcn/button';

const TagPreview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gap-5 flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        className="w-40 h-40 rounded-full border-2 border-zinc-300 flex items-center justify-center mb-8"
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <motion.div
          className="w-24 h-24 rounded-full bg-zinc-200"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
      </motion.div>

      <h2 className="text-xl font-semibold mb-2">키링을 태그해주세요</h2>

      <p className="text-sm text-zinc-500 mb-8">
        키링을 리더기에 가까이 가져다 주세요.
        <br />
        자동으로 사용자 정보를 불러옵니다.
      </p>

      <Button className="rounded-full px-6 py-5" onClick={() => navigate('/')}>
        홈으로 돌아가기
      </Button>
    </div>
  );
};

export default TagPreview;
