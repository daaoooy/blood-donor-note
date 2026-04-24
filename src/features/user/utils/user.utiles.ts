import type { UserDTO, UserProfile } from '../types/user.domain.types';

export const formatDate = (iso: string | null): string => {
  if (!iso) return '-';
  const d = new Date(iso);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
};

export const isAvailableToday = (iso: string | null): boolean => {
  if (!iso) return false;
  return new Date(iso) <= new Date();
};

export const mapUser = (user: UserDTO): UserProfile => ({
  id: user.id,
  name: user.name,
  bloodType: user.bloodtype as UserProfile['bloodType'],
  birth: user.birth,
  createdAt: user.created_at,
});

export const formatDateTime = (date: string) => {
  return new Date(date).toLocaleString('ko-KR');
};
