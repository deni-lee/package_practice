<template>
<div>
  <p>{{ $t('hello') }}</p>
  <button @click="changeLanguage('cn')" >cn</button>
  <button @click="changeLanguage('en')" >en</button><br>
  {{ $store.state.host }} <br>
  <fa :icon="['fas', 'calculator']" />  <br>
  {{ time }}  <br>
  <button @click="kick">message</button>

 <br>
 
  <vue-plyr style="width:700px;">
    <div class="plyr__video-embed">
      <iframe 
        src="https://www.youtube.com/watch?v=bMhq9dXZ_jI"
        allowfullscreen allowtransparency allow="autoplay">
      </iframe>
    </div>
  </vue-plyr>

<br>

  <iframe width="560" height="315" src="https://www.youtube.com/embed/bMhq9dXZ_jI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div>
   <banner></banner>

  </div>
  
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import swal from 'sweetalert2'

import banner from '~/components/banner.vue'

export default {
  components:{
    banner
  },
  data(){
    return{
      time:'',
    }
  },
    methods: {
      changeLanguage (language) {
        this.$store.commit('SET_LANG', language)
        location.reload()
      },
      kick(){
        swal.fire({
            title: '自动关闭弹窗！',
            text: '2秒后自动关闭。',
            timer: 2000
        }).then(
            function () {},
            // handling the promise rejection
            function (dismiss) {
                if (dismiss === 'timer') {
                    console.log('I was closed by the timer')
                }
            }
        )
              }
    },
    mounted(){
      moment.locale('zh-cn') // moment.js 默认为英文，可通过此方法设置中文
      this.time=moment().format('dddd') // 星期三
    }
}

</script>

<style>

</style>
