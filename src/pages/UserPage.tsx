import { useParams } from 'react-router-dom';
import UserInfoCard from '@/features/user/components/UserInfoCard';
import { useUser } from '@/features/user/hooks/queries/useUser';

const UserPage = () => {
  const { id } = useParams();
  const { data: user, isLoading } = useUser(id);
  if (isLoading || !id) return;

  return (
    <div>
      <h2>User 페이지</h2>
      <UserInfoCard user={user!} />
    </div>
  );
};

export default UserPage;
