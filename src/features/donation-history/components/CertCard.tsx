import {
  DONOR,
  type CERTIFICATES,
} from '@/features/donation-history/data/donation.mock';
import InfoRow from '@/features/donation-history/components/InfoRow';

const CertCard = ({
  cert,
}: {
  cert: (typeof CERTIFICATES)[0];
  index: number;
}) => {
  return (
    <div className="p-1 sm:p-2 shrink-0 w-full ">
      <div className="w-full border border-yellow-400 rounded-xl overflow-hidden shadow-sm bg-white">
        <div className="bg-yellow-400 px-3 py-2 flex items-center justify-between">
          <span className="text-sm text-yellow-900">헌혈증서</span>
          <span className="bg-white text-gray-700 border border-gray-200 rounded px-2 py-0.5 text-[10px]">
            증서 번호 {cert.id}
          </span>
        </div>

        <div className="px-3 pt-3 pb-2 text-[10px] sm:text-[11px] text-black flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-x-6 ">
            <InfoRow
              label="성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명"
              value={DONOR.name}
            />
            <InfoRow label="헌혈종류" value={cert.type} />
            <InfoRow label="생년월일" value={DONOR.birth} />
            <div className="flex">
              <span className="w-15 text-gray-400">
                성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;별
              </span>
              <span className="flex gap-2">
                {['남', '여'].map((g) => (
                  <span key={g} className="flex items-center gap-1">
                    {g}
                    <span
                      className={`inline-block w-2.5 h-2.5 border border-black ${
                        DONOR.gender === g ? 'bg-yellow-400' : ''
                      }`}
                    />
                  </span>
                ))}
              </span>
            </div>
          </div>

          <p className="px-2 text-start text-[9px] text-gray-500 leading-snug border-t border-gray-100 pt-2">
            사랑의 헌혈에 동참하여 생명을 나눔 몸소 실천하신 귀하에게 깊은
            존경과 감사의 마음을 담아 이 증서를 드립니다.
          </p>

          <div className="px-2 flex justify-between items-end pt-0.5 pb-1">
            <div className="flex flex-col text-[9px] leading-relaxed text-gray-700 text-start">
              <span>헌혈일자 : {cert.date}</span>
              <span>헌혈원명 : {cert.center}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-semibold text-gray-800">
                보건복지부장관
              </span>
              <div className="w-6 h-6 bg-red-500 opacity-60 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertCard;
