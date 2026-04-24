import { FileText, MapPin, Pencil } from 'lucide-react';
import { type NavigateFunction } from 'react-router-dom';
import type { ShortcutItem } from '../types/user.ui.types';

export const createShortcuts = (
  id: string,
  navigate: NavigateFunction,
): ShortcutItem[] => [
  {
    icon: <FileText size={20} />,
    title: '이력',
    onClick: () => navigate(`/user/${id}/donation-history`),
  },
  {
    icon: <MapPin size={20} />,
    title: '센터',
    onClick: () => navigate(`/user/${id}/map`),
  },
  {
    icon: <Pencil size={20} />,
    title: '수정',
    onClick: () => navigate(`/user/${id}/setting`),
  },
];
