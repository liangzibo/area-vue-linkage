<template>
    <div class="start">
        <h3>快速开始</h3>
        <div class="install">
            <h4>安装</h4>
            <pre>npm i --save area-linkage-vue</pre>
        </div>
        <div class="register">
            <h4>全局注册</h4>
            <pre>import Vue from 'vue';<br/><br/>import { pcaa } from 'area-data-vue';<br/><br/>import VueAreaLinkage from 'area-linkage-vue';<br/><br/>Vue.prototype.$pcaa = pcaa;<br/><br/>Vue.use(VueAreaLinkage);<br/><br/></pre>
        </div>
        <br/>
    </div>
</template>

<script>
    import './index.less';
    export default {};
</script>
