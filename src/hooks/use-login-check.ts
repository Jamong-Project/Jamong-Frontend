import { useEffect } from "react";

export type UseLoginCheckType = {
  loggedInCallback: () => void;
  loggedOutCallback: () => void;
};

const useLoginCheck = (
  enabled: boolean,
  { loggedInCallback, loggedOutCallback }: UseLoginCheckType,
) => {
  useEffect(() => {
    if (enabled) {
      loggedInCallback();
    } else {
      loggedOutCallback();
    }
  }, [enabled]);
};

export default useLoginCheck;
