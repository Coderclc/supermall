<template>
  <div class="details-wares-param" v-if="Object.keys(waresParams).length!=0">
    <table>
      <tr v-for="(table,index) in waresParams.rule.tables[0]" :key="index">
        <td v-for="(item,index) in table" :key="index">{{item}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(set,index) in waresParams.info.set" :key="index">
        <td v-for="(item,index) in set" :key="index">{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailsWaresParam",
  props: {
    waresParams: {
      type: Object
    }
  }
};
</script>

<style scoped>
.details-wares-param {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.details-wares-param table {
  width: 100%;
  border-collapse: collapse;
}
.details-wares-param table tr {
  height: 42px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);

}
.details-wares-param table.info-param{
  border-top: 1px solid rgba(0,0,0,.1);
}
.details-wares-param table.info-param tr td:nth-child(odd){
  width: 95px;
}
.details-wares-param table.info-param tr td:nth-child(even){
  color: var(--color-tint);
}
</style>