<template>
  <div class="h-screen">
    <h1 class="text-white text-3xl text-center mb-16">Płaca</h1>

    <table class="table-auto text-white text-center mx-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Stawka godzinowa</th>
          <th class="px-4 py-2">Miesięcznie</th>
          <th class="px-4 py-2">Na czysto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hourState in hourStates">
          <td class="border border-white border-2 px-4 py-4">
            {{ hourState }}
          </td>
          <td class="border border-white border-2 px-4 py-4">
            {{ hourState * 168 }}
          </td>
          <td class="border border-white border-2 px-4 py-4">
            {{ (hourState * 168 * 0.81).toFixed() }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      hourStates: [5, 10, 90, 100, 105, 110, 115, 120]
    };
  },
};
</script>
