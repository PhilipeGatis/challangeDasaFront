import useAxios from 'axios-hooks';

export default (name) => {
  const [{ data, loading, error }, refetch] = useAxios(`https://api.github.com/users/${name}/repos`);
  return [{ data, loading, error }, refetch];
};
