import React from "react";
import { Button as CarbonButton } from "@carbon/react";
type Props =  typeof CarbonButton;

export default function Button(props: Props) {
  return <CarbonButton {...props}>{props.children}</CarbonButton>;
}
