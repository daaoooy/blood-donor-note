import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '@/features/user/hooks/queries/useUser';

const TagEntry = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, isLoading } = useUser(id);

  useEffect(() => {
    if (isLoading || !id) return;

    if (user) {
      navigate(`/user/${id}`, { replace: true });
    } else {
      navigate(`/register/${id}`, { replace: true });
    }
  }, [user, isLoading, id, navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p>사용자 정보를 확인하고 있습니다...</p>
    </div>
  );
};

export default TagEntry;
