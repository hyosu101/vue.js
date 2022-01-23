<template>
  <div class="under_bar">
    <ul>
      <li>
        <div>포인트</div>
        <router-link to="/Point">
          <img
            class="ud_point"
            id="ud_point"
            :src="require(`@/assets/image/${imgName1}.png`)"
            @click="GoToPoint"
          />
        </router-link>
      </li>
      <li>
        <div>제휴업체</div>
        <router-link to="/Affiliate">
          <img
            class="ud_affiliate"
            id="ud_affiliate"
            :src="require(`@/assets/image/${imgName2}.png`)"
            @click="GoToAffiliate"
          />
        </router-link>
      </li>
      <li>
        <div>HOME</div>
        <router-link to="/">
          <img
            class="ud_home"
            id="ud_home"
            :src="require(`@/assets/image/${imgName3}.png`)"
            @click="GoToHome"
          />
        </router-link>
      </li>
      <li>
        <div>캘린더</div>
        <router-link to="/Calendar">
          <img
            class="ud_calendar"
            id="ud_calendar"
            :src="require(`@/assets/image/${imgName4}.png`)"
            @click="GoToCalendar"
          />
        </router-link>
      </li>
      <li>
        <div>학생회</div>
        <router-link to="/StudentCouncil">
          <img
            class="ud_studecouncil"
            id="ud_studecouncil"
            :src="require(`@/assets/image/${imgName5}.png`)"
            @click="GoToStudecouncil"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.under_bar {
  border-top: 0.5vw solid #000;
  position: fixed;
  content: "";
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: #e07e66;
  z-index: 1000;

  ul {
    li {
      text-align: center;
      float: left;
      width: 20vw;

      img {
        cursor: pointer;
        width: 70%;
        bottom: 0;
      }

      div {
        padding-top: 1vh;
        color: #fff;
        font-size: 0.7rem;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      imgName1: "closedD",
      imgName2: "closedD",
      imgName3: "openedD",
      imgName4: "closedD",
      imgName5: "closedD",
    };
  },
  methods: {
    GoToPoint() {
      if (this.imgName1 === "closedD") {
        this.imgName1 = "openedD";
        this.imgName2 = "closedD";
        this.imgName3 = "closedD";
        this.imgName4 = "closedD";
        this.imgName5 = "closedD";
      }
    },

    GoToAffiliate() {
      if (this.imgName2 === "closedD") {
        this.imgName2 = "openedD";
        this.imgName1 = "closedD";
        this.imgName3 = "closedD";
        this.imgName4 = "closedD";
        this.imgName5 = "closedD";
      }
    },

    GoToHome() {
      if (this.imgName3 === "closedD") {
        this.imgName3 = "openedD";
        this.imgName2 = "closedD";
        this.imgName1 = "closedD";
        this.imgName4 = "closedD";
        this.imgName5 = "closedD";
      }
    },

    GoToCalendar() {
      if (this.imgName4 === "closedD") {
        this.imgName4 = "openedD";
        this.imgName2 = "closedD";
        this.imgName3 = "closedD";
        this.imgName1 = "closedD";
        this.imgName5 = "closedD";
      }
    },

    GoToStudecouncil() {
      if (this.imgName5 === "closedD") {
        this.imgName5 = "openedD";
        this.imgName2 = "closedD";
        this.imgName3 = "closedD";
        this.imgName4 = "closedD";
        this.imgName1 = "closedD";
      }
    },
  },
};
</script>