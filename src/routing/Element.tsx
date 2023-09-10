import { lazy, ElementType, Suspense, SuspenseProps } from "react";
import LoadingSpinner from "../components/loading";

// loading screen

const Loadable = (Component: ElementType) => (props: SuspenseProps) =>
  (
    <Suspense fallback={<div className="flex items-center"><LoadingSpinner/></div>}>
      <Component {...props} />
    </Suspense>
  );

export const CurrencryList = Loadable(lazy(() => import("../pages/container")));