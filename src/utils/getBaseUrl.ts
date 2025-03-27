export const getBaseUrl = () => {
    const { protocol, host } = window.location;
    return `${protocol}//${host}/`;
  };