import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '@/features/user/hooks/queries/useUser';
import KeyRing3D from '@/shared/assets/keyring-3d.png';
import { motion } from 'framer-motion';

const TagEntry = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, isLoading } = useUser(id);

  useEffect(() => {
    if (isLoading || !id) return;

    const timer = setTimeout(() => {
      if (user) {
        navigate(`/user/${id}`, { replace: true });
      } else {
        navigate(`/register/${id}`, { replace: true });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [user, isLoading, id, navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-zinc-50 px-6 text-center gap-5">
      <motion.img
        src={KeyRing3D}
        alt="keyring"
        className="w-32 mb-8"
        animate={{
          y: [0, -4, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <h2 className="text-base font-semibold text-zinc-800 mb-2">
        사용자 정보를 확인하고 있어요
      </h2>

      <p className="text-sm text-zinc-500 mb-10 leading-relaxed">
        키링 태그가 확인되었습니다
        <br />
        등록된 정보를 불러오는 중입니다
      </p>

      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 bg-red-cross-red-20 rounded-full animate-bounce" />
        <span className="w-2 h-2 bg-red-cross-red-20 rounded-full animate-bounce [animation-delay:0.15s]" />
        <span className="w-2 h-2 bg-red-cross-red-20 rounded-full animate-bounce [animation-delay:0.3s]" />
      </div>

      <p className="text-[11px] text-zinc-400 mt-6">잠시만 기다려주세요</p>
    </div>
  );
};

export default TagEntry;
