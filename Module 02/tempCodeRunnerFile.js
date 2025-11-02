const canAccess = currentUserRoles.some((role) =>
  featureAccessRoles.includes(role)
);