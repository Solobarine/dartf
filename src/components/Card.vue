<template>
  <div class="container">
    <section class="head">
      <div class="company">
        <i></i>
        <p class="c-name">dart</p>
      </div>
      <img src="../assets/chip.png" alt="Micro Chip">
    </section>
    <div class="info">
      <p class="name">Solly</p>
      <p class="date">12/25</p>
      <p class="accno">3417 xxx xxxx 5816 </p>
      <i class="fa-brands fa-cc-visa"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  data () {
    return {
      themeColors: this.$store.state.settings[0]
    }
  }
}
</script>

<style scoped>
  .container {
    background: linear-gradient(135deg, v-bind(themeColors.background_color_1), v-bind(themeColors.background_color_2));
    padding: 0;
    font-size: 18px;
    display: flex;
    border-radius: 14px;
    flex-direction: column;
    justify-content: space-between;
  }

  .head {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    font-size: 23px;
  }

  .company {
    display: flex;
  }

  .info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas: 
      "name date"
      "number number"
      "visa visa"
      ;
  }

  .date {
    grid-area: date;
    text-align: right;
  }

  .name {
    grid-area: name;
    text-align: left;
  }

  .accno {
    grid-area: number;
    font-weight: 700;
    text-align: center;
    font-size: 28px;
  }

  .fa-microchip {
    font-size: 26px;
    padding-top: 5px;
  }

  .fa-cc-visa {
    grid-area: visa;
    text-align: center;
    font-size: 25px;
    color: #fff;
  }

  img {
    width: 20%;
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 8px;
    }

    img {
      width: 8%;
    }

    .accno {
      font-size: 16px;
    }

    .fa-cc-visa {
      font-size: 18px;
    }
  }
</style>
