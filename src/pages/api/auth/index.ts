import { getSession } from "@blitzjs/auth"
import { api } from "src/blitz-server"

export default api(async (_req, res, ctx) => {
  const publicData = ctx.session.$publicData
  res.status(200).json({
    userId: ctx.session.userId,
    publicData: { ...publicData },
  })
})
