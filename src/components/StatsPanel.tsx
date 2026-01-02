export default function StatsPanel() {
    const stats = [
        { label: "Years of Operation", value: "15+" },
        { label: "Completed Projects", value: "120+" },
        { label: "Business Partners", value: "50+" },
        { label: "States Covered", value: "36" },
    ];

    return (
        <div className="bg-bil-black text-white py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="px-4">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-bil-gold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
