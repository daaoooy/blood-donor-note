import type { UserProfile } from '@/features/user/types/user.types';

interface UserInfoCardProps {
  user: UserProfile;
}

const UserInfoCard = ({ user }: UserInfoCardProps) => {
  return (
    <div>
      <p>이름: {user.name}</p>
      <p>생성: {user.created_at}</p>
    </div>
  );
};

export default UserInfoCard;
