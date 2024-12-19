<script lang='ts' module>
  import MilestoneIcon from './MilestoneIcon.svelte';

  export type MilestonePreview = {
    icon: string
    title: string
  }

  export type Props = {
    name: string
    id: string
    milestones: Record<string, MilestonePreview>
  }

</script>

<script lang='ts'>
  const { name, milestones, id: categoryId }: Props = $props()
</script>

<a href={categoryId}>{name}</a>
<div class='category'>
  <div class='grid'>
    {#each Object.entries(milestones) as [id, { title, icon }]}
      <MilestoneIcon {title} {icon} href={`${categoryId}/${id}`} />
    {/each}
  </div>
</div>

<style>

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .category {
    /* dark gray */
    border-radius: 1rem;
    padding: 1rem;
    background-color: #333;
  }

  .grid {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
</style>
