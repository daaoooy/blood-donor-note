import { Button } from '@/shared/components/shadcn/button';
import type { ShortcutItem } from '@/features/user/types/user.ui.types';

const ShortcutGrid = ({ items }: { items: ShortcutItem[] }) => {
  return (
    <div className="grid grid-cols-3 gap-3 mx-4">
      {items.map((item) => (
        <Button
          key={item.title}
          onClick={item.onClick}
          variant="ghost"
          className="flex flex-col rounded-lg p-4 h-fit shadow-sm"
        >
          <div className="mb-2 text-red-500">{item.icon}</div>
          <span className="text-xs font-medium text-zinc-700">
            {item.title}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default ShortcutGrid;
