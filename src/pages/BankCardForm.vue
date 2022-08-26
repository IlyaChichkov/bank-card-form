<template>
  <div class="page-container">
    <div class="bg-gradient">
    </div>
    <div class="flex flex-col justify-center flex-auto">
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
    </div>
    <div class="absolute left-7 top-1/2">
      <div class="user-card">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankCardForm"
}
</script>

<style scoped>
.page-container{
  @apply flex flex-row h-full;
}
.bg-gradient{
  @apply h-full w-[33%] bg-cover;
  background-image: url("../assets/bg-main-desktop.png");
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
.user-card{
  @apply  h-[128px] w-[128px] bg-cover;
  background-image: url("../assets/bg-card-front.png");
}
</style>