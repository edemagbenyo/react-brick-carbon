import classNames from "classnames";
import React from "react";
type Props = {
  type: "info" | "error";
  content: string;
};

export default function Notification({ type, content }: Props) {
  return <div className={classNames("p-4 text-center", type === "info" && "bg-blue-300 border-2 border-l-2 border-blue-700", type === "error" && "bg-red-300 border-2 border-l-2 border-red-700")}>{content}</div>;
}
