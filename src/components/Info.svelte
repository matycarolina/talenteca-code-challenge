<script>
  async function getAPI() {
    const response = await fetch(
      `https://mocki.io/v1/b63c95fe-b27a-4035-a3f3-77808a353978`
    );
    const obj = await response.json();
    console.log(obj);
    return obj;
  }
  export let tableData1 = [
    "Servicio",
    "Precio en USD",
    "Frecuencia de Facturación",
  ];
  export let tableData2 = [
    "Servicio",
    "Precio en MXN",
    "Frecuencia de Facturación",
  ];
  let condition = false;
  function handleClick() {
    condition = !condition;
  }
</script>

<div class="Info">
  {#await getAPI()}
    Cargando...
  {:then obj}
    <table>
      {#each tableData1 as header}
        <th scope="row">{header}</th>
      {/each}
      {#each obj as cell}
        <tr>
          <th scope="row">{cell.name}</th>
          <td> {cell.prices[0].currency_symbol}{cell.prices[0].total}</td>
          <td>{cell.billing_frequency}</td>
        </tr>
      {/each}
    </table>
  {:catch error}
    Oops. Algo salió mal.
  {/await}
  <div>
    <button
      type="button"
      on:click={() => {
        handleClick();
      }}
    >
      Obtener precios en MXN</button
    >
  </div>
  {#if condition}
    {#await getAPI()}
      Cargando...
    {:then obj}
      <table>
        {#each tableData2 as header}
          <th scope="row">{header}</th>
        {/each}
        {#each obj as cell}
          <tr>
            <th scope="row">{cell.name}</th>
            <td>{cell.prices[1].currency_symbol}{cell.prices[1].total}</td>
            <td>{cell.billing_frequency}</td>
          </tr>
        {/each}
      </table>
    {:catch error}
      Oops. Algo salió mal.
    {/await}
  {:else}
    <p />
  {/if}
</div>

<style>
  td,
  th {
    border: 1px solid rgb(190, 190, 190);
    padding: 10px;
  }

  td {
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #a6a6a6;
  }

  th[scope="row"] {
    background-color: #dfffd1;
    color: #025b0e;
  }

  table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: "Georgia";
    font-size: 0.8rem;
  }
  div {
    padding: 15px;
  }
  button {
    font-family: "Georgia";
  }
</style>
