export const generateAvatarInitials = (user) => {
  const { name, last } = user;

  return `${name[0]}${last[0]}`;
};
