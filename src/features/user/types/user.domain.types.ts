export interface User {
  id: string;
  name: string;
  bloodType: string;
  registrationNumber: string;
  totalCount: number;
  totalVolumeMl: number;
  lastDonationDate: string | null;
  lastDonationType: string | null;
  nextAvailableDate: string | null;
}

// DB 그대로
export interface UserDTO {
  id: string;
  name: string;
  bloodtype: string;
  birth: string;
  created_at?: string;
}

// 프론트에서 사용하는 타입
export type BloodType = 'A' | 'B' | 'AB' | 'O';

export interface UserProfile {
  id: string;
  name: string;
  bloodType: BloodType;
  birth: string;
  createdAt?: string;
}
