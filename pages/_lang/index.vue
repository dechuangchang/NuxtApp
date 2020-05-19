<template>
  <div class="home">
    index
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: []
    };
  },
  computed: mapState(["locale"]),
  methods: {},
  created() {
    // console.log(this.$store)
  }
};
</script>