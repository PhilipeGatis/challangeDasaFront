import useAxios from 'axios-hooks';

export default (name) => {
  const [{ data, loading, error }, refetch] = useAxios(`https://api.github.com/users/${name}`);
  const hasError = error && error.response && !!error.response.status;
  return [{ data, loading, error: hasError }, refetch];
};
