import { ArrowLeft } from 'lucide-react';
import useGoBack from '@/shared/hooks/useGoBack';
import { Button } from '@/shared/components/shadcn/button';

const BackTopTab = () => {
  const goBack = useGoBack();

  return (
    <header className="shrink-0 p-2 flex items-center border-b border-gray-200 mb-2">
      <Button variant="ghost" onClick={goBack} className="p-0 h-8 w-8">
        <ArrowLeft size={20} />
      </Button>
    </header>
  );
};

export default BackTopTab;
