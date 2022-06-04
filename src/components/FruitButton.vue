<script setup>

defineProps({
  fruit: {
    type: String,
  },
})

</script>

<template>
  <div class="">
    <div>
      <img src="https://picsum.photos/100"  alt="" srcset="">
    </div>
    <div class="text-xs uppercase">
      {{ fruit }}
    </div>
  </div>
</template>
