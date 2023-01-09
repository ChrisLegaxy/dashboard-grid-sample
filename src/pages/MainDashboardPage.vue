<template>
  <!-- Wrapper -->
  <main class="flex min-h-screen max-h-screen">
    <!-- Side Menu Wrapper -->
    <div class="min-h-full p-4 min-w-[20rem]">
      <!-- Side Menu Navigation -->
      <nav class="bg-[#3D3D3D] h-full rounded-xl">
        <div class="p-4">
          <button class="rounded-xl p-4 w-full hover:bg-white hover:text-black font-semibold">
            Dashboard
          </button>
        </div>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="min-h-full w-full p-4">
      <div id="grid-display" class="h-full grid grid-rows-4 grid-cols-12 gap-6">
        <div class="col-span-4 row-span-2 rounded-xl bg-[#3D3D3D] !text-[#40F2DD]">Total sales by category</div>
        <div class="col-span-2 rounded-xl bg-[#ADADAD]">Total sales this month</div>
        <div class="col-span-3 rounded-xl bg-[#D9D9D9]">Best selling category ever</div>
        <div class="col-span-3 rounded-xl bg-[#40F2DD]">Most sales this month</div>
        <div class="col-span-3 rounded-xl bg-[#D9D9D9]">Best selling product ever</div>
        <div class="col-span-3 rounded-xl bg-[#ADADAD]">Total margin this month</div>
        <div class="col-span-2 rounded-xl row-span-2 bg-[#3D3D3D] !text-[#40F2DD]">Monthly sales</div>
        <div class="col-span-8 rounded-xl row-span-2 bg-[#D9D9D9]">Sales by person this month</div>
        <div class="col-span-2 rounded-xl bg-[#40F2DD]">Most shipped</div>
        <div class="col-span-4 rounded-xl bg-[#ADADAD]">Total sales</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#grid-display div {
  @apply grid place-items-center text-black font-bold
}
</style>