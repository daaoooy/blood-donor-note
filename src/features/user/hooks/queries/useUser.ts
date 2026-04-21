import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/features/user/api/user.api';
import type { UserProfile } from '@/features/user/types/user.types';

export const useUser = (id?: string) => {
  return useQuery<UserProfile | null>({
    queryKey: ['user', id],
    queryFn: () => getUserById(id!),
    enabled: !!id,
  });
};
