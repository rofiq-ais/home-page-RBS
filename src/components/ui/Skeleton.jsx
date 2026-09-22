const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 pt-0 flex flex-col animate-pulse">
    <div className="-mx-8 mb-6 overflow-hidden rounded-t-2xl bg-gray-200 h-40"></div>
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
    <div className="mt-auto pt-6 border-t border-gray-100">
      <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-12 bg-gray-200 rounded w-full"></div>
    </div>
  </div>
);

const SkeletonProduct = () => (
  <div className="bg-green-50 rounded-2xl p-6 flex flex-col items-center animate-pulse">
    <div className="mb-6 overflow-hidden rounded-xl bg-gray-200 w-full h-40"></div>
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
    <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
    <div className="h-10 bg-gray-200 rounded w-full"></div>
  </div>
);

export { SkeletonCard, SkeletonProduct };
