import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false); // <-- set to false
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
    } catch (error) {
      setError(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, setData, fn };
};

export default useFetch;
