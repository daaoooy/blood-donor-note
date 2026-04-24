import { supabase } from '@/lib/supabase';
import type { UserProfile } from '@/features/user/types/user.domain.types';
import { mapUser } from '@/features/user/utils/user.utiles';

// 유저 조회
export const getUserById = async (id: string): Promise<UserProfile | null> => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  return mapUser(data);
};

type UpsertUserParams = {
  id: string;
  name: string;
  bloodType: UserProfile['bloodType'];
  birth: string;
};

export const upsertUser = async (
  params: UpsertUserParams,
): Promise<UserProfile> => {
  const { id, name, bloodType, birth } = params;

  const { data, error } = await supabase
    .from('users')
    .upsert({
      id,
      name,
      bloodtype: bloodType,
      birth,
    })
    .select()
    .single();

  if (error) throw error;

  return mapUser(data);
};
