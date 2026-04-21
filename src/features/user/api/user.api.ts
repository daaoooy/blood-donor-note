import { supabase } from '@/lib/supabase';
import type { UserProfile } from '@/features/user/types/user.types';

// 유저 조회
export const getUserById = async (id: string): Promise<UserProfile | null> => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data as UserProfile | null;
};

// 유저 생성/업데이트
export const upsertUser = async (
  id: string,
  name: string,
): Promise<UserProfile> => {
  const { data, error } = await supabase
    .from('users')
    .upsert({ id, name })
    .select()
    .single();

  if (error) throw error;
  return data as UserProfile;
};
