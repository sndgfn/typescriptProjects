"use strict";
// as const assertion
Object.defineProperty(exports, "__esModule", { value: true });
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
const UserRoles = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER",
};
//aikhane typeof diye airokom ekta enam ba type banano hoise 
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
//# sourceMappingURL=asconst.js.map