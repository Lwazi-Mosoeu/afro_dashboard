// src/components/Cards.tsx
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface KPIData {
  title: string;
  value: string;
  trend?: "up" | "down";
  delta?: string;
}

type KPICardProps = { data: KPIData } | { value: string; description: string };

export function KPICard(props: KPICardProps) {
  let value: string;
  let title: string;
  let trend: "up" | "down" | undefined;
  let delta: string | undefined;

  if ("data" in props) {
    ({ value, title, trend, delta } = props.data);
  } else {
    value = props.value;
    title = props.description;
    trend = undefined;
    delta = undefined;
  }

  return (
    <div className="h-full">
      <Card className="h-full flex flex-col">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl">{value}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pt-0">
          <CardDescription>{title}</CardDescription>
          {trend && delta && (
            <div
              className={`text-sm ${
                trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {delta} {trend === "up" ? "↑" : "↓"}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
