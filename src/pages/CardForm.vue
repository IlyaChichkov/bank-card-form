<template>
  <div class="page-bg">
    <img class="mobile-bg" src="../assets/bg-main-mobile.png">
  </div>
  <div class="page-container">
    <section class="cards-container flex-grow">

      <div class="card-back">
        <div class="relative h-fit w-fit">
          <img class="-z-20" src="../assets/bg-card-back.png">

          <div class="absolute right-14 top-[6.6em] ">
            <p class="text-white font-medium text-xl">{{getCVC}}</p>
          </div>

        </div>
      </div>

      <div class="card-front">
        <div class="relative h-fit w-fit">
          <img class="-z-20" src="../assets/bg-card-front.png">
          <img class="absolute left-8 top-8" src="../assets/card-logo.svg">
          <div class="absolute left-8 top-32 w-[86%]">
            <p class="text-white font-medium text-3xl tracking-[0.08em]">{{getCardNumForPreview}}</p>
            <div class="flex flex-row justify-between w-full mt-6">
              <p class="text-white font-normal text-lg tracking-[0.1em] uppercase">{{getName}}</p>
              <p class="text-white">
                <span class="text-white">{{getMonth}}</span>/<span class="text-white">{{getYear}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="form-container flex-grow">
      <form class="card-form">
        <div class="card-form-item mb-4">
          <label class="mb-2 uppercase">Cardholder Name</label>
          <div class="input-border">
            <input :class="[error.noNameInput? 'error': '']" v-on:input.prevent="setCardholderName($event.target)" placeholder="e. g. Jane Appleseed" required>
          </div>
        </div>
        <div class="card-form-item">
          <label class="mb-2 uppercase">Card Number</label>
          <div class="input-border">
            <input :class="[error.noNumberInput || error.wrongNumber? 'error': '']" v-on:input.prevent="setCardNum($event.target)" placeholder="e. g. 1234 5678 9123 0000" required maxlength="19">
          </div>
          <span :class="['req-warning', error.wrongNumber? 'visible': 'invisible']">Wrong format, numbers only</span>
        </div>
        <div class="grid grid-cols-4 gap-3 mt-4">
          <div class="card-form-item col-span-2">
            <label class="mb-2 uppercase">Exp. Date (MM/YY)</label>
            <div class="grid grid-cols-2 gap-2">
              <div class="input-border">
                <input :class="[error.wrongDate.month? 'error': '']" v-on:input.prevent="setMonth($event.target)" type="text" placeholder="MM" required maxlength="3" min="0" max="99">
              </div>
              <div class="input-border">
                <input :class="[error.wrongDate.year? 'error': '']" v-on:input.prevent="setYear($event.target)" type="text" placeholder="YY" required maxlength="3" min="0" max="99">
              </div>
            </div>
            <span :class="['req-warning', error.wrongDate.month || error.wrongDate.year? 'visible': 'invisible']">Can't be blank</span>
          </div>
          <div class="card-form-item col-span-2">
            <label class="mb-2 uppercase">CVC</label>
            <div class="input-border">
              <input :class="[error.wrongCVC? 'error': '']" v-on:input.prevent="setCVC($event.target.value)" v-model="cardCVC" placeholder="e. g. 123" required maxlength="3">
            </div>
            <span :class="['req-warning', error.wrongCVC? 'visible': 'invisible']">Can't be blank</span>
          </div>
          <button v-on:click="confirmValidation" class="form-submit mt-1 col-span-4">Confirm</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>

function containsAnyLetter(str) {
  return /[a-zA-Z]/.test(str);
}

export default {
  name: "InteractiveCard",
  data(){
    return{
      cardholderName: null,
      cardNumber: null,
      dateM: null,
      dateY: null,
      cardCVC: null,
      error: {
        noNameInput: false,
        noNumberInput: false,
        wrongName: false,
        wrongNumber: false,
        wrongDate: {
          month: false,
          year: false
        },
        wrongCVC: false
      }
    }
  },
  methods:{
    setCardholderName(target){
      let val = target.value;
      this.cardholderName = val;
      this.error.noNameInput = false;
      target.value = this.getName;
    },
    setCardNum(target){
      let val = target.value;
      if(containsAnyLetter(val)){
        this.error.wrongNumber = true;
      }else{
        this.error.wrongNumber = false;
      }
      val = val.toString().replaceAll(' ', '');
      this.cardNumber = val;
      this.error.noNumberInput = false;
      target.value = this.getCardNum;
    },
    setMonth(target){
      let val = target.value;
      val = Number(val);
      if(isNaN(val)){
        val = 1;
      }
      if(val < 1) {
        val = 1;
      }
      if(val > 12) {
        val = 12;
      }
      this.dateM = val;
      this.error.wrongDate.month = false;
      target.value = this.getMonth;
    },
    setYear(target){
      let val = target.value;
      val = Number(val);
      if(isNaN(val)){
        val = 1;
      }
      if(val > 99) {
        val = 99;
      }
      this.dateY = Number(val);
      this.error.wrongDate.year = false;
      target.value = this.getYear;
    },
    setCVC(val){
      this.cardCVC = val;
      this.error.wrongCVC = false;
    },
    confirmValidation(){
      if(this.cardholderName == null){
        this.error.noNameInput = true;
      }
      if(this.cardNumber == null){
        this.error.noNumberInput = true;
      }
      if(this.dateM == null){
        this.error.wrongDate.month = true;
      }
      if(this.dateY == null){
        this.error.wrongDate.year = true;
      }
      if(this.cardCVC == null){
        this.error.wrongCVC = true;
      }
      return null;
    }
  },
  computed: {
    getName: function (){
      if(this.cardholderName === null) return 'Jane Appleseed';
      let result = this.cardholderName.split(' ');
      for (let i = 0; i < result.length; i++) {
        const w = result[i];
        result[i] = w.charAt(0).toUpperCase() + w.slice(1);
      }
      return result.toString().replaceAll(',', ' ');
    },
    getCardNum: function (){
      if(this.cardNumber === null) return '0000 0000 0000 0000';
      let number = this.cardNumber;
      let result = '';
      let k = 0;
      for (let i = 0; i < number.length; i++) {
        if(k === 4){
          result += ' ';
          k = 0;
        }
        result += number[i];
        k++;
      }
      return result.toUpperCase();
    },
    getCardNumForPreview: function (){
      if(this.cardNumber === null) return '0000 0000 0000 0000';
      let number = this.cardNumber;
      let result = '';
      let k = 0;
      for (let i = 0; i < 16; i++) {
        if(k === 4){
          result += ' ';
          k = 0;
        }
        if(i < number.length){
          if(isNaN(number[i])){
            result += '0';
          }else{
            result += number[i];
          }
        }else{
          result += '0';
        }
        k++;
      }
      return result.toUpperCase();
    },
    getMonth: function (){
      if(this.dateM == null){
        return '00';
      }
      if(Number(this.dateM) < 10){
        return '0' + this.dateM;
      }
      return this.dateM;
    },
    getYear: function (){
      if(this.dateY == null){
        return '00';
      }
      if(Number(this.dateY) < 10){
        return '0' + this.dateY;
      }
      return this.dateY;
    },
    getCVC: function (){
      if(this.cardCVC == null){
        return '000';
      }
      return this.cardCVC;
    }
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
  @apply h-full flex flex-col lg:flex-row top-[40%];
}
.card-form{
  @apply h-full ml-0 lg:ml-16 flex flex-col justify-center w-[78%] max-w-[525px];
}
.card-form-item{
  @apply flex flex-col mt-2;
}
.card-back{
  @apply absolute top-8 left-[28%] lg:top-[50%] drop-shadow-2xl min-w-[447px];
}
.card-front{
  @apply absolute top-44 left-[15%] lg:top-[20%] drop-shadow-2xl min-w-[447px];
}
.cards-container{
  @apply relative flex w-full min-h-[428px] lg:h-full lg:min-w-[590px];
}
.form-container{
  @apply flex flex-col justify-center items-center lg:items-start w-full h-full;
}
.req-warning{
  @apply text-red text-sm mt-2;
}
</style>