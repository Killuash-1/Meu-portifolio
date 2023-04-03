import { styled } from "@stitches/react";

export const ModalContainer = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
  background: "rgba(0, 0, 0, 0.445)",
});

export const ModalContent = styled("div", {
  width: "400px",
  padding: "24px",
  background: "CanvasText",
  borderRadius: "8px",
  boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
});
