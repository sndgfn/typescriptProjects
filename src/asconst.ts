// as const assertion

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {// normally aita value bt as const dile ai vale r chng hobe na . 
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;


//aikhane typeof diye airokom ekta enam ba type banano hoise 
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);