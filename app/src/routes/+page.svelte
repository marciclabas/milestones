<script lang="ts">
  import { CategoryPreview, MILESTONES } from '$lib/milestones/index';
</script>

{#each Object.entries(MILESTONES) as [id, category]}
  <CategoryPreview {...category} {id} />
{/each}
