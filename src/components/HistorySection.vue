<script setup>
defineProps({
    history: {
        type: Array,
        default: () => []
    },
})
</script>

<template>
  <div class="container">
    <span class="text-xl font-black">History:</span>
    <table class="w-full">
      <thead>
        <tr class="text-left">
          <th colspan="3">
            Selected fruits
          </th>
          <th>Correct fruits</th>
          <th>Correct order</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in history"
          :key="item"
          class="border-b"
        >
          <td
            v-for="fruit in item.selectedFruits"
            :key="fruit"
          >
            {{ fruit }}
          </td>
          <td>
            {{ item.correctFruits }}
          </td>
          <td>
            {{ item.correctFruitsOrder }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>