<script lang="ts" module>
  export type Props = {
    title: string
    icon: string
    description: string
    levels: string[]
  }

</script>

<script lang="ts">
  const { title, icon, description, levels }: Props = $props()
</script>

<div class="milestone-header">
  <div class="icon-wrapper">
    <img src={icon} alt={title} />
  </div>
  <h1>{title}</h1>
  <p class="description">{description}</p>
</div>

<ul class="levels-list">
  {#each levels as level}
    <li class="level-item">
      <span class="level-text">{level}</span>
    </li>
  {/each}
</ul>

<style>
  .milestone-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    padding: 2rem 1rem 1.5rem; /* Top padding for breathing space */
  }

  .icon-wrapper {
    width: 96px;
    height: 96px;
    background-color: #2A2A2A; /* Matches overall theme */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #F0B90B; /* Highlighting the milestone */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); /* Adds depth */
    transition: transform 0.3s ease;
  }

  .icon-wrapper img {
    width: 64px;
    height: 64px;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #F0B90B; /* Matches thematic color */
    margin: 0;
  }

  .description {
    font-size: 1.2rem;
    line-height: 1.5;
    font-style: italic;
    color: #EAEAEA;
    margin: 0;
    padding: 0 1rem; /* Add spacing for better readability on mobile */
  }

  .levels-list {
    padding: 0;
    margin: 0;
    counter-reset: level; /* Initialize counter */
  }

  .level-item {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    font-size: 1.4rem;
    color: #EAEAEA; /* Matches the theme */
    text-align: center;
    font-weight: 400;
    border-bottom: 1px solid #333; /* Adds subtle separation */
    counter-increment: level; /* Increment counter for each item */
  }

  .level-item:last-child {
    border-bottom: none;
  }

  .level-item::before {
    content: counter(level, upper-roman) ". "; /* Generate Roman numerals */
    font-weight: 700;
    color: #F0B90B; /* Roman numeral color */
    margin-right: 0.5rem;
    font-size: 1.4rem;
  }

  .level-text {
    flex-grow: 1;
    text-align: center;
  }
</style>
