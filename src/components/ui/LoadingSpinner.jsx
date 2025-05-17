
import React from "react";
import { Loader2 } from "lucide-react";

export function LoadingSpinner({ size = "md" }) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-12 w-12",
    lg: "h-20 w-20",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-primary mb-4`} />
      <p className="text-lg text-muted-foreground">Yükleniyor, lütfen bekleyin...</p>
    </div>
  );
}
