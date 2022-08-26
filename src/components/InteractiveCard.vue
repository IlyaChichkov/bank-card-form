<template>
  <div class="page-bg">
    <img class="mobile-bg" src="../assets/bg-main-mobile.png">
  </div>
  <div class="page-container">
    <section class="cards-container">

      <div class="card-back">
        <div class="relative h-fit w-fit">
          <img class="-z-20" src="../assets/bg-card-back.png">

          <div class="absolute right-14 top-[6.6em] ">
            <p class="text-white font-medium text-xl">000</p>
          </div>

        </div>
      </div>

      <div class="card-front">
        <div class="relative h-fit w-fit">
          <img class="-z-20" src="../assets/bg-card-front.png">
          <img class="absolute left-8 top-8" src="../assets/card-logo.svg">
          <div class="absolute left-8 top-32 ">
            <p class="text-white font-medium text-3xl tracking-[0.08em]">0000 0000 0000 0000</p>
            <div class="flex flex-row justify-between mt-6">
              <p class="text-white font-normal text-lg tracking-[0.1em] uppercase">Jane Appleseed</p>
              <p class="text-white font-normal text-lg tracking-[0.1em]">00/00</p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="form-container">
      <form class="card-form mt-12">
        <div class="card-form-item">
          <label class="mb-2 uppercase">Cardholder Name</label>
          <input placeholder="e. g. Jane Appleseed" required>
          <span class="req-warning invisible">Wrong input</span>
        </div>
        <div class="card-form-item">
          <label class="mb-2 uppercase">Card Number</label>
          <input placeholder="e. g. 1234 5678 9123 0000" required>
          <span class="req-warning invisible">Wrong input</span>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <div class="card-form-item col-span-2">
            <label class="mb-2 uppercase">Exp. Date (MM/YY)</label>
            <div class="grid grid-cols-2 gap-2">
              <input type="number" placeholder="MM" required maxlength="2" min="1" max="31">
              <input type="number" placeholder="YY" required maxlength="2" min="0" max="99">
            </div>
            <span class="req-warning invisible">Can't be blank</span>
          </div>
          <div class="card-form-item col-span-2">
            <label class="mb-2 uppercase">CVC</label>
            <input placeholder="e. g. 123" required maxlength="3">
            <span class="req-warning invisible">Can't be blank</span>
          </div>
          <button type="submit" class="mt-1 col-span-4">Confirm</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "InteractiveCard",
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>
.page-bg{
  @apply fixed h-[35%] w-full bg-cover -z-10 lg:h-full lg:w-[34%] xl:w-[24%];
}
.mobile-bg{
  @apply w-full h-full bg-cover -z-10;
}
.page-container{
  @apply h-full flex flex-col lg:flex-row;
}
.card-form{
  @apply ml-16 flex flex-col w-[78%] max-w-[525px];
}
.card-form-item{
  @apply flex flex-col mt-2;
}
.card-back{
  @apply absolute top-8 left-[30%] lg:top-[50%] drop-shadow-2xl;
}
.card-front{
  @apply absolute top-44 left-[20%] drop-shadow-2xl;
}
.cards-container{
  @apply relative flex w-full h-[55%] lg:h-full lg:min-w-[590px];
}
.form-container{
  @apply flex flex-col justify-center items-center lg:items-start w-full h-full;
}
</style>