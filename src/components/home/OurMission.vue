<template>
  <div class="our-mission">
    <div class="container">
      <div
        class="lg:w-5/12 md:w-5/12  flex flex-col justify-center lg:h-[400px] md:h-[400px] h-[300px] gap-5"
      >
        <h1 class="text-4xl font-extrabold tracking-tight text-white">{{ $t('mission.main-header') }}</h1>
        <p class="text-[15px] lg:w-9/12 md:w-9/12 w-8/12 font-medium text-gray-300">{{ $t('mission.body') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.our-mission {
  background: url('@/assets/img/our-mission.png');
  background-size: cover;
  background-position: center;
}

@media (max-width: 990px) {
  .our-mission {
    background-position: left;
  }
}
</style>
