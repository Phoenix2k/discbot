const isDebug = !!process.env.DEBUG;
const isDev = 'production' !== process.env.NODE_ENV;

export { isDebug, isDev };
