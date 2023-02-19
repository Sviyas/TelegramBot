/*
 * @param {*} timeout - delay
 * @description - TimeOut Function
 */
const hold = async (timeout: number) => {
  return await new Promise(resolve => setTimeout(resolve as any, timeout));
};

export default { hold };
