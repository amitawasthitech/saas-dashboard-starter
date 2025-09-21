export default function StatCard({
  title,
  value,
  change,
  positive,
  bgColor,
}) {
  return (
    <div
      className={`
    rounded-2xl p-6 flex flex-col gap-2 shadow-sm transition-colors duration-300
    ${["Orders", "Revenue"].includes(title) ? "dark:bg-dark-card" : ""}
  `}
      style={{
        backgroundColor: ["Orders", "Revenue"].includes(title) ? undefined : bgColor,
      }}
    >

      {/* Title */}
      <span className={`text-[14px] font-semibold ${['Orders', 'Revenue']?.includes(title) ? "dark:text-white" : "text-gray-900"}`}>{title}</span>

      {/* Value + Change */}
      <div className="flex items-center gap-8">
        <span className={`text-[24px] font-bold ${['Orders', 'Revenue']?.includes(title) ? "dark:text-white" : "text-gray-900"}`}>{value}</span>
        {change && (
          <span
            className={`flex items-center gap-1 text-[12px] font-medium  ${['Orders', 'Revenue']?.includes(title) ? "dark:text-white" : "text-gray-900"}`}
          >
            <img
              src={
                positive
                  ? (['Orders', 'Revenue']?.includes(title) ? "/icons/whiteArrowRise.svg" : "/icons/up-arrow.svg")
                  : (['Orders', 'Revenue']?.includes(title) ? "/icons/whiteArrowFall.svg" : "/icons/down-arrow.svg")
              }
              alt="trend"
              className="h-3 w-3"
            />
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
