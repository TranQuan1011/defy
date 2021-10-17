const getParamsValue = (search: string, param: string): string | null => {
  return new URLSearchParams(search).get(param);
};

export default getParamsValue;
