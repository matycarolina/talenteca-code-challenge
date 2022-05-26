<script>
  import Header from "./components/Header.svelte";
  import Info from "./components/Info.svelte";
  import { darkmode } from "./store/store";
</script>

<main class={$darkmode ? "darkmode" : ""}>
  <Header />
  <Info />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    height: 100%;
  }
  :global(main.darkmode) {
    background-color: #373535;
    color: white;
  }
  :global(body){
    margin: 0;
    padding: 0;
    height: 100%;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
