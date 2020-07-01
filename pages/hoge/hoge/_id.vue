<template>
<img :src="hoge"/>
</template>

<script type="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

export default Vue.extend({
    data () {
        return {
            hoge: `/img/hoge${this.$route.params.id}`
        }
    }
})
</script>