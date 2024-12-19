<script lang="ts">
  let levels = [
    "50 Push-Ups",
    "20 Dips",
    "20 Archer Push-Ups",
    "10 One-Arm Push-Ups",
    "5 Chest-to-Wall HSPU",
    "1 Freestanding HSPU",
  ]; // Hardcoded levels
</script>

<ul class="levels-list">
  {#each levels as level}
    <li class="level-item">
      <span class="level-text">{level}</span>
    </li>
  {/each}
</ul>

<style>
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
