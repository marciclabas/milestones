import { MILESTONES, type Milestone } from '$lib/milestones';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export type Data = {
  category: string
  milestoneId: string
  milestone: Milestone
}

export const load: PageLoad = ({ params: { category, milestone: milestoneId }}): Data => {
  const milestone = MILESTONES[category]?.milestones?.[milestoneId]

  if (!milestone)
    error(404, `Milestone not found: ${category}/${milestoneId}`)

  console.log('Found:', milestone)
  return { category, milestoneId, milestone }
}