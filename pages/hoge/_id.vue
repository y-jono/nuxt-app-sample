<template>
<img :src="path"/>
</template>

<script type="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class HogePage extends Vue {
    hoge = '/img/hoge';
    path = '';

    created () {
        this.path = `/img/hoge${this.$route.params.id}.png`
    }
}
</script>