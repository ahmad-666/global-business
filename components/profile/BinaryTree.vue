<template>
  <div class="node-container d-flex flex-column align-center">
    <div class="lines d-flex justify-space-around align-center">
      <div class="left-line">
        <div class="bottom-line"></div>
      </div>
      <div class="right-line">
        <div class="bottom-line"></div>
      </div>
    </div>
    <div
      class="
        members
        d-flex
        justify-space-between
        align-center
        mt-8 mt-md-10 mt-xl-12
      "
    >
      <v-tooltip dark top attach>
        <template #activator="{ on, attrs }">
          <nuxt-link
            :to="`/profile/network/${left.id}`"
            class="
              member
              d-flex
              flex-column
              align-center
              cursor-pointer
              ml-n4 ml-md-n3 ml-xl-n2
            "
          >
            <v-badge dot color="blue" offset-x="1em" offset-y=".5em">
              <v-img
                width="5em"
                height="5em"
                :src="left.imgSrc"
                class="rounded-circle"
                v-bind="attrs"
                v-on="on"
              >
              </v-img>
            </v-badge>

            <p class="text-caption grey--text text--lighten-1 mt-1">
              {{ left.name }}
            </p>
          </nuxt-link>
        </template>
        <p>{{ left.tooltip }}</p>
      </v-tooltip>
      <v-tooltip dark attach top>
        <template #activator="{ on, attrs }">
          <nuxt-link
            :to="`/profile/network/${right.id}`"
            class="
              member
              d-flex
              flex-column
              align-center
              cursor-pointer
              mr-n4 mr-md-n3 mr-xl-n2
            "
          >
            <v-badge dot color="blue" offset-x="1em" offset-y=".5em">
              <v-img
                width="5em"
                height="5em"
                :src="right.imgSrc"
                class="rounded-circle"
                v-bind="attrs"
                v-on="on"
              ></v-img>
            </v-badge>

            <p class="text-caption grey--text text--lighten-1 mt-1">
              {{ right.name }}
            </p>
          </nuxt-link>
        </template>
        <p>{{ right.tooltip }}</p>
      </v-tooltip>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    left: {
      type: Object,
      default: null,
    },
    right: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
$line-color: #d1a316;
.node-container {
  width: 100%;
  .lines {
    width: 100%;
    .left-line,
    .right-line {
      position: relative;
      width: 45%;
      height: 1px;
      background-color: $line-color;
      &::before {
        content: '';
        width: 0.75em;
        height: 0.75em;
        border-radius: 50%;
        background-color: $line-color;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .bottom-line {
        position: absolute;
        width: 1px;
        height: 4em;
        background-color: $line-color;
        top: 100%;
        // transform: translateY(-50%);
        &::before {
          content: '';
          width: 0.75em;
          height: 0.75em;
          border-radius: 50%;
          background-color: $line-color;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
        }
      }
    }
    .left-line {
      &::before {
        right: 0;
      }
      .bottom-line {
        left: 0;
      }
    }
    .right-line {
      &::before {
        left: 0;
      }
      .bottom-line {
        right: 0;
      }
    }
  }
}
.members {
  width: 100%;
}
.member {
  position: relative;
}
</style>
