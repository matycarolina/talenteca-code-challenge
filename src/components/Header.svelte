<script>
  import Logo from "./Logo.svelte";
  import Switch from "./Switch.svelte";
</script>

<div class="Header">
  <h1>Planes de Servicio Ofrecidos</h1>
  <Logo />
  <Switch />
</div>

<style>
  .Header {
    border-bottom: solid 1px #ccc;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    padding: 10px;
  }
  h1 {
    color: #66a64a;
    font-family: "Georgia";
  }
</style>
