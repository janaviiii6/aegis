import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../../common/Card"

const data = [
    { time: "00:00", mentions: 120 },
    { time: "04:00", mentions: 150 },
    { time: "08:00", mentions: 450 },
    { time: "12:00", mentions: 1200 },
    { time: "16:00", mentions: 900 },
    { time: "20:00", mentions: 600 },
    { time: "24:00", mentions: 400 },
]

export function VelocityGraph() {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Mention Velocity (24h)</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={data}>
                        <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                            itemStyle={{ color: 'hsl(var(--foreground))' }}
                        />
                        <Line type="monotone" dataKey="mentions" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
