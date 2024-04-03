import { z } from 'zod'

const tagSchema = z.object({
  name: z.string(),
  count: z.number(),
})

export const tagsSchema = z.object({
  items: z.array(tagSchema),
  has_more: z.boolean(),
  quota_max: z.number(),
  quota_remaining: z.number(),
})

export type TagsResponse = z.infer<typeof tagsSchema>

export type Tag = z.infer<typeof tagSchema>
