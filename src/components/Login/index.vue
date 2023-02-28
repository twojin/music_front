<!-- <template>
  <el-dialog v-model="propsProxy" title="登录">
    123
  </el-dialog>
</template>

<script setup>
import { emit } from 'process';
import { ref, defineProps, computed, defineEmits } from 'vue';
const props = defineProps({
  isShow: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['update:isShow'])
const propsProxy = computed({
  get: () => props.isShow,
  set: val => {
    emit('update:isShow', val)
  }
})
</script>

<style lang="scss"> -->

</style>