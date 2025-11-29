import { PostCard } from "./PostCard"

const mockPosts = {
    misinfo: [
        { id: 1, username: "@conspiracy_king", time: "10m ago", platform: "Twitter", content: "CloudBrew contains dangerous chemicals! #boycott", likes: 120, comments: 45, shares: 30, tags: ["Fearmongering", "Health Scare"] },
        { id: 2, username: "@health_warrior", time: "15m ago", platform: "Reddit", content: "My cousin got sick after drinking CloudBrew. It's poison.", likes: 85, comments: 20, shares: 10, tags: ["Anecdotal", "Health Scare"] },
    ],
    complaints: [
        { id: 3, username: "@angry_customer", time: "1h ago", platform: "Twitter", content: "CloudBrew tastes weird today. Batch #402.", likes: 12, comments: 2, shares: 0, tags: ["Product Quality"] },
    ],
    opinions: [
        { id: 4, username: "@random_guy", time: "2h ago", platform: "Twitter", content: "I prefer the old can design.", likes: 5, comments: 0, shares: 0, tags: [] },
    ]
}

export function TriageBoard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full overflow-hidden">
            {/* Misinformation Column */}
            <div className="flex flex-col h-full bg-muted/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-destructive">Misinformation</h3>
                    <span className="bg-destructive/10 text-destructive text-xs font-bold px-2 py-1 rounded-full">{mockPosts.misinfo.length}</span>
                </div>
                <div className="flex-1 overflow-y-auto pr-2">
                    {mockPosts.misinfo.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>

            {/* Complaints Column */}
            <div className="flex flex-col h-full bg-muted/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-orange-500">Complaints</h3>
                    <span className="bg-orange-500/10 text-orange-500 text-xs font-bold px-2 py-1 rounded-full">{mockPosts.complaints.length}</span>
                </div>
                <div className="flex-1 overflow-y-auto pr-2">
                    {mockPosts.complaints.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>

            {/* Opinions Column */}
            <div className="flex flex-col h-full bg-muted/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-500">Opinions / Noise</h3>
                    <span className="bg-blue-500/10 text-blue-500 text-xs font-bold px-2 py-1 rounded-full">{mockPosts.opinions.length}</span>
                </div>
                <div className="flex-1 overflow-y-auto pr-2">
                    {mockPosts.opinions.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}
