export default function BlogCardSkeleton() {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
            {/* Image skeleton */}
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            <div className="relative h-48 bg-gray-200">
                {/* Category badge skeleton */}
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <div className="absolute left-2 top-2 h-6 w-20 bg-gray-300 rounded-lg" />
            </div>

            {/* Content skeleton */}
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            <div className="p-6">
                {/* Category skeleton */}
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <div className="h-4 w-24 bg-gray-200 mb-3" />

                {/* Title skeleton */}
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <div className="h-6 w-3/4 bg-gray-200 mb-3" />

                {/* Content skeleton */}
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <div className="space-y-2 mb-4">
                    <div className="h-4 w-full bg-gray-200" />
                    <div className="h-4 w-5/6 bg-gray-200" />
                </div>

                {/* Meta info skeleton */}
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <div className="flex items-center space-x-4 mb-4">
                    <div className="h-4 w-24 bg-gray-200" />
                    <div className="h-4 w-24 bg-gray-200" />
                    <div className="h-4 w-24 bg-gray-200" />
                </div>

                {/* Read more skeleton */}
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <div className="h-4 w-24 bg-gray-200" />
            </div>
        </div>
    );
} 