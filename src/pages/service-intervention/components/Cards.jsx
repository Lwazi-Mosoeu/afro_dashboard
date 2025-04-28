import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function KPICard({ value, description }) {
  return (
    <div className="h-full">
      <Card className="h-full flex flex-col">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl">{value}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pt-0">
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
