import React, { useState, useEffect, ComponentType } from "react";

export interface WithDataLoaderProps<T> {
  WrappedComponent: ComponentType<T>;
  dataUrl: string;
}

function withDataLoader<T>(props: WithDataLoaderProps<T>) {
  const { WrappedComponent, dataUrl } = props;

  return function WithDataLoaderWrapper(props: T) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(dataUrl);
          const json = await response.json();
          setData(json);
        } catch (error) {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [dataUrl]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
      <WrappedComponent
        {...props}
        data={data}
        loading={loading}
        error={error}
      />
    );
  };
}

export default withDataLoader;
