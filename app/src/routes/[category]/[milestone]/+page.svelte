<script lang='ts'>
  import type { PageData } from './$types'
  import Milestone from './Milestone.svelte'

  const { data }: { data: PageData } = $props();
  const { milestone, category, milestoneId } = data

  console.log('Rendering:', milestone)

</script>

<Milestone {...milestone} />