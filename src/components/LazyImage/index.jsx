import React, { Suspense } from "react";

export const LazyImage = ({ gif }) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <img src={gif.images.original.url} alt="gif" width={"71.25rem"} />
    </Suspense>
  );
};
