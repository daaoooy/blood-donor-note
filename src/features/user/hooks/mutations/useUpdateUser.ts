import { useMutation, useQueryClient } from '@tanstack/react-query';
import { upsertUser } from '@/features/user/api/user.api';
import type { UserProfile } from '@/features/user/types/user.types';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<UserProfile, Error, { id: string; name: string }>({
    mutationFn: ({ id, name }: { id: string; name: string }) =>
      upsertUser(id, name),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user', data.id] });
    },
  });
};
