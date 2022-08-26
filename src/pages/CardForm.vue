<template>
  <div class="page-bg"></div>
  <div class="page-container">
    <section class="cards-imgs flex-auto relative">
      <div class="absolute bottom-56 left-36">
        <img src="../assets/bg-card-back.png">
        <p>000</p>
      </div>
      <div class="relative h-fit w-fit top-24 left-8 z-10 obj">
        <img class="-z-20" src="../assets/bg-card-front.png">
        <img class="absolute left-8 top-8" src="../assets/card-logo.svg">
        <p class="absolute left-8 top-32 text-white font-medium text-3xl tracking-[0.08em]">0000 0000 0000 0000</p>
        <p class="absolute left-8 top-48 text-white font-medium text-xl tracking-[0.08em]">Jane Karter</p>
        <p class="absolute right-8 top-48 text-white font-medium text-xl tracking-[0.08em]">00/00</p>
      </div>
    </section>
    <section class="flex-auto">
      <form class="card-form">
        <div class="card-form-item">
          <label class="uppercase">Cardholder Name</label>
          <input placeholder="e. g. Jane Appleseed" required>
          <span class="req-warning invisible">Wrong input</span>
        </div>
        <div class="card-form-item">
          <label class="uppercase">Card Number</label>
          <input placeholder="e. g. 1234 5678 9123 0000" required>
          <span class="req-warning invisible">Wrong input</span>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <div class="card-form-item col-span-2">
            <label class="uppercase">Exp. Date (MM/YY)</label>
            <div class="grid grid-cols-2 gap-2">
              <input type="number" placeholder="MM" required maxlength="2" min="1" max="31">
              <input type="number" placeholder="YY" required maxlength="2" min="0" max="99">
            </div>
            <span class="req-warning invisible">Can't be blank</span>
          </div>
          <div class="card-form-item col-span-2">
            <label>CVC</label>
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
  name: "CardForm"
}
</script>

<style scoped>
.page-bg{
  @apply absolute w-full h-[35%] bg-cover -z-10;
  background-image: url("../assets/bg-main-mobile.png");
}
.page-container{
  @apply h-full flex flex-col;
}
.card-form{
  @apply flex flex-col p-4 w-[80%] max-w-[475px] mx-auto;
}
.card-form-item{
  @apply flex flex-col mt-2;
}
.req-warning{
  @apply text-red text-sm;
}
.cards-imgs{
  @apply h-[45%] w-full;
}
</style>