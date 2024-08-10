import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPaymentsLinkSkeleton() {
  return (
    <div className="w-full max-w-xl flex flex-col gap-4">
      <Skeleton className="w-full px-8 py-6 bg-gray-300/80" />
      <Skeleton className="w-full px-8 py-6 bg-gray-300/80" />
      <Skeleton className="w-full px-8 py-6 bg-gray-300/80" />
      <Skeleton className="w-full px-8 py-6 bg-gray-300/80" />
    </div>
  );
}
