export default function UniversityCardSkeleton() {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
            {/* Image skeleton */}
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-transparent flex items-end p-6">
                    <div className="w-full">
                        {/* Title skeleton */}
                        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                        <div className="h-6 w-3/4 bg-gray-300 rounded mb-2" />
                        {/* Description skeleton */}
                        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                        <div className="h-4 w-full bg-gray-300 rounded" />
                    </div>
                </div>
            </div>

            {/* Content skeleton */}
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            <div className="p-6">
                {/* Stats grid skeleton */}
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <div className="grid grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="text-center">
                            <div className="h-4 w-20 bg-gray-200 mx-auto rounded" />
                        </div>
                    ))}
                </div>
                {/* Learn more button skeleton */}
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <div className="mt-4 flex justify-end">
                    <div className="h-4 w-24 bg-gray-200 rounded" />
                </div>
            </div>
        </div>
    );
} 