const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <span className="text-zinc-500">{label}</span>
    <span className="font-medium text-zinc-900">{value}</span>
  </div>
);

export default InfoRow;
