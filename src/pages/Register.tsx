import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUpdateUser } from '@/features/user/hooks/mutations/useUpdateUser';
import { Button } from '@/shared/components/shadcn/button';

const Register = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const { mutate: updateUser, isPending } = useUpdateUser();

  const handleSubmit = () => {
    if (!id || !name.trim()) return;

    updateUser(
      { id, name },
      {
        onSuccess: () => {
          navigate(`/user/${id}`, { replace: true });
        },
        onError: (error) => {
          alert('등록 중 오류가 발생했습니다.');
          console.error(error);
        },
      },
    );
  };

  return (
    <div className="p-4 space-y-4">
      <h2>헌혈자 등록</h2>
      <input
        className="border p-2 rounded w-full"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        className="bg-red-cross-red-100 text-white disabled:bg-gray-400"
        onClick={handleSubmit}
        disabled={isPending}
      >
        {isPending ? '등록 중...' : '등록하기'}
      </Button>
    </div>
  );
};

export default Register;
