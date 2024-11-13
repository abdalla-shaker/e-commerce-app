import { Alert } from "@material-tailwind/react";

export function AlertDefault({ isActive }) {
  return (
    <Alert
      className={`absolute w-fit top-1/3 transition-all  ${
        isActive ? "right-20" : "is-not-visible"
      }`}
    >
      This might take some time please wait...
    </Alert>
  );
}
