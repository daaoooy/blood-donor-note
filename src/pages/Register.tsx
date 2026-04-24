import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUpdateUser } from '@/features/user/hooks/mutations/useUpdateUser';
import { Button } from '@/shared/components/shadcn/button';
import type { BloodType } from '@/features/user/types/user.domain.types';

const BLOOD_TYPES: BloodType[] = ['A', 'B', 'AB', 'O'];

const Register = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [bloodType, setBloodType] = useState<BloodType | null>(null);
  const [birth, setBirth] = useState('');

  const { mutate: updateUser, isPending } = useUpdateUser();

  const handleSubmit = () => {
    if (!id || !name.trim() || !bloodType || !birth) return;

    updateUser(
      { id, name, bloodType, birth },
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
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <div className="px-5 pt-10 pb-6">
        <h2 className="text-xl font-bold text-zinc-900">헌혈자 등록</h2>
        <p className="text-sm text-zinc-500 mt-1">기본 정보를 입력해주세요</p>
      </div>

      <div className="mx-4 rounded-md bg-white p-5 shadow-sm border border-zinc-100 space-y-5">
        <div>
          <label className="text-sm text-zinc-600">이름</label>
          <input
            className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="홍길동"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-zinc-600">생년월일</label>
          <input
            type="date"
            className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-zinc-600">혈액형</label>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {BLOOD_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setBloodType(type)}
                className={`rounded-lg py-2 text-sm font-medium border transition
                  ${
                    bloodType === type
                      ? 'bg-red-500 text-white border-red-500'
                      : 'bg-white text-zinc-700 border-zinc-200 hover:bg-red-50'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto p-4">
        <Button
          onClick={handleSubmit}
          disabled={isPending}
          className="w-full h-12 text-base font-semibold bg-red-cross-red-100 hover:bg-red-cross-red-80disabled:bg-zinc-300"
        >
          {isPending ? '등록 중...' : '등록 완료'}
        </Button>
      </div>
    </div>
  );
};

export default Register;
