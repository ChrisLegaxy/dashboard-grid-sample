<template>
  <!-- Wrapper -->
  <main class="flex min-h-screen max-h-screen text-black">
    <!-- Content -->
    <div class="min-h-full w-full m-4 rounded-xl bg-[#D9D9D9]">
      <div class="h-full grid grid-cols-3 p-8">
        <!-- Top Section -->
        <div class="mr-12">
          <label for="categories" class="block mb-2 font-bold text-gray-900"
            >Category</label
          >
          <select
            id="categories"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose a category</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
        </div>
        <div>
          <div class="mr-12">
            <label for="categories" class="block mb-2 font-bold text-gray-900"
              >Product</label
            >
            <select
              id="categories"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Choose a product</option>
              <option>Product 1</option>
              <option>Product 2</option>
            </select>
          </div>
        </div>
        <div>
          <div class="mr-12">
            <label for="categories" class="block mb-2 font-bold text-gray-900"
              >Sales person</label
            >
            <select
              id="categories"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Choose a category</option>
              <option>Sales person 1</option>
              <option>Sales person 2</option>
            </select>
          </div>
        </div>
        <div>
          <div class="mr-12">
            <label for="categories" class="block mb-2 font-bold text-gray-900"
              >Country to ship to</label
            >
            <select
              id="categories"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        <div>
          <div class="mr-12">
            <label for="first_name" class="block mb-2 font-bold text-gray-900"
              >Price</label
            >
            <input
              type="text"
              id="first_name"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="12.5"
              required
            />
          </div>
        </div>
        <div>
          <div class="mr-12">
            <label for="first_name" class="block mb-2 font-bold text-gray-900"
              >Quantity</label
            >
            <input
              type="text"
              id="first_name"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="3"
              required
            />
          </div>
        </div>

        <!-- Table -->
        <div class="col-span-3">
          <table class="table table-auto w-full">
            <thead class="text-left bg-[#40F2DD] rounded-xl p-4">
              <tr>
                <th class="rounded-tl-xl rounded-bl-xl">Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th class="rounded-tr-xl rounded-br-xl">Actions</th>
              </tr>
            </thead>

            <tbody class="mt-10 bg-[#3D3D3D]">
              <tr>
                <td class="rounded-tl-xl">Fish Fingers</td>
                <td>Frozen</td>
                <td>£12.5</td>
                <td>3</td>
                <td class="rounded-tr-xl">
                  <button class="bg-white text-black py-1 px-8 rounded-xl">
                    Remove
                  </button>
                </td>
              </tr>
              <tr>
                <td class="rounded-bl-xl">Fish Fingers</td>
                <td>Frozen</td>
                <td>£12.5</td>
                <td>3</td>
                <td class="rounded-br-xl">
                  <button class="bg-white text-black py-1 px-8 rounded-xl">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Bottom Section -->
        <div class="col-span-3 grid">
          <div class="flex justify-between mt-auto">
            <div class="text-3xl font-bold text-white">Total: £25</div>
            <div>
              <button class="p-0.5 px-12 font-bold rounded-xl bg-white mr-6">
                Cancel
              </button>
              <button
                class="p-0.5 px-12 font-bold rounded-xl bg-[#3D3D3D] text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
th {
  @apply p-2 px-6;
}

td {
  @apply text-[#40F2DD] font-bold p-2 px-6;
}

tbody:before {
  @apply bg-[#D9D9D9];
  content: "-";
  display: block;
  line-height: 2rem;
  color: transparent !important;
}
</style>
