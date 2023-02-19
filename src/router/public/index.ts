import type { Response, Request } from "express";

export const RootRender = async (req: Request, res: Response) => {
  return res.render("home", {
    layout: false,
    name: "2023",
    path: req.path,
  });
};
