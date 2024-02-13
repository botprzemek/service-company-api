import { Request, Response, Router } from 'express'

const router: Router = Router()

router.get('/', (_req: Request, res: Response): void => {
  res.sendStatus(200)
})

export default router
