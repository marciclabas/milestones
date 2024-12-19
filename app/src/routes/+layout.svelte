<script lang="ts">
  import "./index.css";
  import { onNavigate } from "$app/navigation";
    import { base } from "$app/paths";

  onNavigate((nav) => {
    if (!document.startViewTransition || nav.from?.url.href === nav.to?.url.href) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await nav.complete;
      });
    });
  });

  const { children } = $props();
</script>

<div class="container">
  <header>
    <a href={'/'}>
      <img src="/favicon.svg" alt="Milestones Logo" width={48} />
      <h1>Milestones</h1>
    </a>
  </header>
  {@render children()}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    padding: 1rem;
  }

  header a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    view-transition-name: header;
  }

  /* layout.svelte (styles) */
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translateX(30px);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateX(-30px);
    }
  }

  :root::view-transition-old(root) {
    animation:
      90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation:
      210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }
</style>
