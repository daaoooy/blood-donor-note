import type { User } from '@/features/user/types/user.domain.types';

export const MOCK_USER: User = {
  id: 'user-001',
  name: '홍길동',
  bloodType: 'A',
  registrationNumber: '2019-04-001',
  totalCount: 30,
  totalVolumeMl: 9600,
  lastDonationDate: '2026-04-22T10:30:00.000Z',
  lastDonationType: '전혈 400ml',
  nextAvailableDate: '2026-06-17T00:00:00.000Z',
};
