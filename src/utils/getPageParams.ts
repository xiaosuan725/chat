type Params = {
  pageNum?: number;
  pageSize?: number;
};

export default ({ pageNum, pageSize }: Params) => {
  const limit = pageSize || 10;
  const skip = (pageSize || 10) * ((pageNum || 1) - 1);
  return {
    limit,
    skip,
    count: 1,
  };
};
