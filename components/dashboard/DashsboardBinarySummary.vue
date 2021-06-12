<template>
  <v-card
    dark
    color="secondary card"
    class="pa-4 d-flex flex-column align-center"
  >
    <v-card-title
      class="
        primary
        rounded-pill
        text-center
        pa-1
        font-weight-regular
        text-body-2
        title
        d-block
      "
    >
      UserID: {{ userId }}
    </v-card-title>
    <p
      class="
        secondary
        darken-1
        font-weight-light
        text-body-2 text-center
        py-1
        px-10
        mt-3
      "
    >
      Total Members: {{ totalMembers }}
    </p>
    <div class="lines">
      <div class="topLine line primary"></div>
      <div class="leftLine line primary"></div>
      <div class="rightLine line primary"></div>
      <div class="bottomLeftLine line primary"></div>
      <div class="bottomRightLine line primary"></div>
    </div>
    <div class="wings d-flex justify-space-between">
      <div class="wing left d-flex flex-column align-start">
        <p
          class="
            secondary
            darken-1
            font-weight-light
            text-body-2
            pa-2
            text-center
          "
        >
          Left Members: {{ left.totalMembers }}
        </p>
        <p
          class="
            secondary
            darken-1
            font-weight-light
            text-body-2
            pa-2
            text-center
            mt-2
          "
        >
          This Month Left Invests: {{ left.monthInvest }}
        </p>
        <p
          class="
            secondary
            darken-1
            font-weight-light
            text-body-2
            pa-2
            text-center
            mt-2
          "
        >
          Total Invest Left: {{ left.totalInvest }}
        </p>
      </div>
      <div class="wing right ml-4 d-flex flex-column align-end">
        <p
          class="
            secondary
            darken-1
            font-weight-light
            text-body-2
            pa-2
            text-center
          "
        >
          Right Members: {{ right.totalMembers }}
        </p>
        <p
          class="
            secondary
            darken-1
            font-weight-light
            text-body-2
            pa-2
            text-center
            mt-2
          "
        >
          This Month Right Invests: {{ right.monthInvest }}
        </p>
        <p
          class="
            secondary
            darken-1
            font-weight-light
            text-body-2
            pa-2
            text-center
            mt-2
          "
        >
          Total Invest Right: {{ right.totalInvest }}
        </p>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    userId: {
      type: String,
      required: true,
    },
    totalMembers: {
      type: Number,
      default: 0,
    },
    left: {
      type: Object,
      default: () => {
        return {
          totalMembers: 0,
          monthInvest: 0,
          totalInvest: 0,
        }
      },
    },
    right: {
      type: Object,
      default: () => {
        return {
          totalMembers: 0,
          monthInvest: 0,
          totalInvest: 0,
        }
      },
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
}
.title {
  width: 100%;
}

$level1_line_width: 0.1em;
$level1_line_height: 3em;
$level2_line_width: 40%;
$level2_line_height: 0.1em;
$level3_line_width: 0.1em;
$level3_line_height: 3em;
.wings {
  width: 100%;
  margin-top: $level1_line_height + $level2_line_height + $level3_line_height +
    0em;
}
.wing {
  width: 50%;
}
.lines {
  width: 100%;
  position: relative;
  .line {
    position: absolute;
  }
  .topLine {
    width: $level1_line_width;
    height: $level1_line_height;
  }
  .leftLine,
  .rightLine {
    width: $level2_line_width;
    height: $level2_line_height;
  }
  .bottomLeftLine,
  .bottomRightLine {
    width: $level3_line_width;
    height: $level3_line_height;
  }

  .topLine {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .leftLine {
    top: $level1_line_height;
    left: 50%;
    transform: translateX(-100%);
  }
  .rightLine {
    top: $level1_line_height;
    left: 50%;
    transform: translateX(0%);
  }
  .bottomLeftLine {
    top: calc(#{$level1_line_height} + #{$level2_line_height});
    left: calc(50% - #{$level2_line_width});
    transform: translateX(-50%);
  }
  .bottomRightLine {
    top: calc(#{$level1_line_height} + #{$level2_line_height});
    left: calc(50% + #{$level2_line_width});
    transform: translateX(-50%);
  }
}
</style>
