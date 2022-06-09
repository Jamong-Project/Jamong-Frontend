/* eslint-disable import/prefer-default-export */
import { useState } from "react";

export const useInput = (initialValue: any, callback?: (v: any) => void) => {
  const [value, setValue] = useState<any>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (callback) {
      callback(e.target.value);
    }
  };

  return { value, onChange: handleChange };
};
