/* eslint-disable import/prefer-default-export */
import { useState } from "react";

export const useInput = (initialValue: string, callback?: (v: any) => void) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (callback) {
      callback(e.target.value);
    }
  };

  return { value, onChange: handleChange };
};
