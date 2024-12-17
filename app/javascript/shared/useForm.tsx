import { useForm as useInertiaForm } from '@inertiajs/react';
import { set } from "./set";

export function useForm(...args){
  const form = useInertiaForm(...args);

  function setData(key, value) {
    form.setData((data) => {
      return set(data, key, value);
    });
  }

  return { ...form, setData };
}
