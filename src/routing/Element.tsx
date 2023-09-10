import { lazy, ElementType, Suspense, SuspenseProps } from "react";

// loading screen

const Loadable = (Component: ElementType) => (props: SuspenseProps) =>
  (
    <Suspense fallback={<>loading</>}>
      <Component {...props} />
    </Suspense>
  );

export const CurrencryList = Loadable(lazy(() => import("../pages/container")));