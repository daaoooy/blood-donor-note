import { useRef, useState, useCallback } from 'react';
import { CERTIFICATES } from '@/features/donation-history/data/donation.mock';
import CertCard from '@/features/donation-history/components/CertCard';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/shared/components/shadcn/button';
import useGoBack from '@/shared/hooks/useGoBack';
import { Separator } from '@/shared/components/shadcn/separator';

const DonationHistory = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const isDragging = useRef(false);
  const mouseStartX = useRef(0);

  const total = CERTIFICATES.length;

  const goTo = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(index, total - 1));
      setCurrent(next);

      const selectedItem = listRef.current?.children[next] as HTMLElement;
      if (selectedItem) {
        selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    },
    [total],
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) goTo(current + 1);
    else if (diff < -40) goTo(current - 1);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = mouseStartX.current - e.clientX;
    if (diff > 40) goTo(current + 1);
    else if (diff < -40) goTo(current - 1);
  };

  const goBack = useGoBack();

  return (
    <div className="w-full max-w-sm mx-auto select-none h-dvh flex flex-col overflow-hidden bg-background">
      <header className="shrink-0 p-2 flex items-center border-b border-gray-200 mb-2">
        <Button variant="ghost" onClick={goBack} className="p-0 h-8 w-8">
          <ArrowLeft size={20} />
        </Button>
      </header>

      <div className="shrink-0 overflow-hidden mx-4">
        <div
          ref={trackRef}
          className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
          style={{ transform: `translateX(-${current * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={() => {
            isDragging.current = false;
          }}
        >
          {CERTIFICATES.map((cert, i) => (
            <div key={cert.id} className="min-w-full">
              <CertCard cert={cert} index={i} />
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 px-3 py-2 mx-4">
        <div className="relative w-full h-3 flex items-center group cursor-pointer">
          <div
            className="relative w-full h-1 bg-gray-100 rounded-full overflow-hidden"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const percentage = x / rect.width;
              const nextIndex = Math.floor(percentage * total);
              goTo(nextIndex);
            }}
          >
            <div
              className="h-full bg-yellow-400 transition-all duration-300 ease-out"
              style={{ width: `${((current + 1) / total) * 100}%` }}
            />
          </div>

          <div
            className="absolute w-3 h-3 bg-white border-2 border-yellow-400 rounded-full shadow-md transition-all duration-300 ease-out pointer-events-none"
            style={{
              left: `calc(${((current + 1) / total) * 100}% - 8px)`,
            }}
          />

          <input
            type="range"
            min="0"
            max={total - 1}
            value={current}
            onChange={(e) => goTo(parseInt(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        <div className="flex justify-between px-1">
          <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-tighter">
            Start (최근)
          </span>

          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">
            End
          </span>
        </div>
      </div>

      <Separator />

      <div className="flex-1 flex flex-col min-h-0 mx-4 my-3">
        <div className="flex justify-between items-end mb-3 px-1">
          <p className="text-[11px] text-gray-400">전체 헌혈 내역</p>
          <p className="text-[10px] text-gray-300 font-mono">
            {current + 1} / {total}
          </p>
        </div>

        <div
          ref={listRef}
          className="flex-1 overflow-y-auto pr-1 space-y-1.5 pb-10 scrollbar-hide"
        >
          {CERTIFICATES.map((cert, i) => (
            <button
              key={cert.id}
              onClick={() => goTo(i)}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-left transition-all border ${
                i === current
                  ? 'bg-yellow-50 border-yellow-300 ring-1 ring-yellow-300/20'
                  : 'bg-gray-50 border-transparent active:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full border ${
                    i === current
                      ? 'bg-yellow-400 border-yellow-500 animate-pulse'
                      : 'bg-gray-300 border-gray-400'
                  }`}
                />
                <div>
                  <p className="text-[12px] font-semibold text-gray-800">
                    {cert.date}
                  </p>
                  <p className="text-[11px] text-gray-400">{cert.center}</p>
                </div>
              </div>

              <span
                className={`text-[10px] px-2 py-0.5 rounded-md border font-medium ${
                  i === current
                    ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                    : 'bg-white text-gray-500 border-gray-200'
                }`}
              >
                {cert.type}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;
