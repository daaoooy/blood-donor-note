import { useMutation, useQueryClient } from '@tanstack/react-query';
import { upsertUser } from '@/features/user/api/user.api';
import type { UserProfile } from '@/features/user/types/user.domain.types';

type UpdateUserParams = {
  id: string;
  name: string;
  bloodType: UserProfile['bloodType'];
  birth: string;
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<UserProfile, Error, UpdateUserParams>({
    mutationFn: ({ id, name, bloodType, birth }) =>
      upsertUser({
        id,
        name,
        bloodType,
        birth,
      }),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user', data.id] });
    },
  });
};
