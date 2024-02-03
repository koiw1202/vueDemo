<template>
    <div class="intro_main">
        <div class="intro-main-first-phrase">
            이미 모두의 은행<br>
            지금은 카카오뱅크
        </div>

        <p class="intro-main-sub-phrase">
            한 사람, 한 사람을 위해 시작한 은행이<br>
            더 많은 사람들이 찾는 모두의 은행이 되었습니다.
        </p>

    </div>

</template>
<script>

export default {
    name : 'Main',

}
</script>

<style scoped>
    .intro_main {
        height: 597px;
        background-color: #ffef6b;
        padding-top: 60px;
    }

    .intro-main-first-phrase {
        position: absolute;
        top: 200px;
        left: 220px;
        font-weight: bold;
        font-size: 49px;
        line-height: 1.4;
        color: black;
        -webkit-font-smoothing: antialiased;
    }

    .intro-main-sub-phrase {
        position: absolute;
        top: 350px;
        left: 225px;
        font-size: 16px;
        line-height: 1.95;
        color: black;
        opacity: .7;
    }

</style>