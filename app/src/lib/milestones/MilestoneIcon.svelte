<script lang='ts' module>
  export type Props = {
    icon: string
    title: string
    href: string
  }

</script>

<script lang='ts'>
  const { icon, title, href }: Props = $props()
</script>

<a class='milestone-icon' {href}>
  <img src={icon} alt={title} />
  <span>{title}</span>
</a>

<style>
  .milestone-icon {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: #2A2A2A;
    border-radius: 50%;
    border: 2px solid #F0B90B;
    padding: 10px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .milestone-icon img {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  .milestone-icon span {
    font-size: 0.8rem;
    color: #F0B90B;
  }
</style>
