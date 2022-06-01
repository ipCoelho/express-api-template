import { Request, Response, Router } from "express";
import {jwt} from "jsonwebtoken";

const router = Router();

async function getCredentials(req: Request, res: Response) {
  console.log(`auth: `, req.oidc.isAuthenticated());
  return res.status(200).json({
    credentials: req.oidc
  });
}

async function authStatus(req: Request, res: Response) {
  console.log(`auth: `, req.oidc.isAuthenticated());  
  return res.status(200).json({
    authenticated: req.oidc.isAuthenticated()
  });
}

router.get("/credentials", getCredentials);
router.get("/status", authStatus);

export default router;