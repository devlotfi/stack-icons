export const getIconUrl = (id: string, showLabel: boolean) => {
  if (import.meta.env.DEV) {
    return `${import.meta.env.BASE_URL}icons/${id}${
      showLabel ? "" : "-compact"
    }.svg`;
  } else {
    return `${import.meta.env.VITE_GITHUB_URL}${
      import.meta.env.BASE_URL
    }icons/${id}${showLabel ? "" : "-compact"}.svg`;
  }
};
