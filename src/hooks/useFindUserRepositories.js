import parseResponseByContentType from '../utils/parseResponseByContentType';

export default async (name) => {
  return await parseResponseByContentType(fetch(`https://api.github.com/users/${name}/repos`));
};
