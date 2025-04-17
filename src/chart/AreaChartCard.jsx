// "use client";

// import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// const chartData = [
//   { month: "Jan", value: 186 },
//   { month: "Feb", value: 305 },
//   { month: "Mar", value: 237 },
//   { month: "Apr", value: 73 },
//   { month: "May", value: 209 },
//   { month: "Jun", value: 214 },
// ];

// export function AreaChartCard({
//   title = "Trend",
//   className = "",
//   height = 100
// }) {
//   return (
//     <Card className={`h-full flex flex-col ${className}`}>
//       <CardHeader className="pb-2">
//         <CardTitle className="text-sm font-medium text-muted-foreground">
//           {title}
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="flex-1 p-0">
//         <div className={`h-[${height}px]`}>
//           <AreaChart
//             width={300}
//             height={height}
//             data={chartData}
//             margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
//             <XAxis
//               dataKey="month"
//               axisLine={false}
//               tickLine={false}
//               tick={{ fontSize: 12 }}
//             />
//             <Area
//               type="monotone"
//               dataKey="value"
//               stroke="#3b82f6"
//               fill="#93c5fd"
//               strokeWidth={2}
//               fillOpacity={1}
//             />
//           </AreaChart>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
