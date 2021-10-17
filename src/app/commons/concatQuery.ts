const concatQuery = (obj: Object): string => {
  let query = '?';

  for (const key in obj) {
    if (obj[key] !== '' && obj[key] !== 'All') {
      if (Array.isArray(obj[key])) {
        query = query + `${key}=${obj[key].join(',')}`;
      } else {
        query = query + `${key}=${obj[key]}&`;
      }
    }
  }

  if (query[query.length - 1] === '&') {
    return query.slice(0, query.length - 1);
  }

  return query;
};

export default concatQuery;
