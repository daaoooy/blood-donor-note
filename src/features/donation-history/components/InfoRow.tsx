const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex">
      <span className="w-15 text-gray-400">{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default InfoRow;
