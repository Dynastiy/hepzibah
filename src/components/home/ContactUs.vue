<template>
  <div class="bg-gray-100 text-gray-100 px-8 py-12">
    <div
      class="px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-8 mx-auto bg-white text-gray-900 rounded-lg shadow-sm"
    >
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-4xl lg:text-5xl font-bold leading-tight">{{ $t('contact.header') }}</h2>
          <!-- <div class="text-gray-700 mt-8">
              Hate forms? Send us an <a class="underline" href="mail-to:#">email</a> instead.
            </div> -->
        </div>
        <div class="mt-8 text-center">
            <img src="@/assets/img/contact.svg" alt="">
        </div>
      </div>
      <div class="">
        <div>
          <span class="uppercase text-sm text-gray-600 font-bold">{{ $t('contact.full-name') }}</span>
          <input
            class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          />
        </div>
        <div class="mt-4">
          <span class="uppercase text-sm text-gray-600 font-bold">{{ $t('contact.email') }}</span>
          <input
            class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mt-4">
          <span class="uppercase text-sm text-gray-600 font-bold">{{ $t("contact.message") }}</span>
          <textarea
            class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div class="mt-8">
          <button
            class="uppercase text-sm font-bold tracking-wide bg-primary text-gray-900 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
          >
            {{ $t("contact.send") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
